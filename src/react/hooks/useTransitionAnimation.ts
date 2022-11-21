import { useContext, useEffect, useRef, useState } from "react";
import {
  EXITED,
  EXITING,
  NOT_EXIT,
  TransitionNotifierContext,
  TransitionState,
  TransitionStateContext,
} from "../components/TransitionGroup";
import { AnimationHandle, useAnimation } from "./useAnimation";
import { getKeys } from "../../core/utils";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import type {
  AnimationOptions,
  GetKeyframeFunction,
  TypedKeyframe,
} from "../../core";

export type TransitionAnimationHandle = {
  (ref: Element | null): void;
};

export type TransitionAnimationDefinition = [
  keyframe: TypedKeyframe | TypedKeyframe[] | GetKeyframeFunction,
  options?: AnimationOptions
];

export const useTransitionAnimation = (keyframes: {
  enter?: TransitionAnimationDefinition;
  update?: TransitionAnimationDefinition;
  exit?: TransitionAnimationDefinition;
}): TransitionAnimationHandle => {
  const keys = getKeys(keyframes);
  const animations = keys.reduce((acc, k) => {
    const def = keyframes[k];
    if (!def) return acc;
    acc[k] = useAnimation(def[0], def[1]);
    return acc;
  }, {} as { [key in TransitionState]: AnimationHandle | undefined });

  const animationsRef = useRef(animations);

  const [animation, cleanup] = useState<
    [TransitionAnimationHandle, () => void]
  >(() => {
    const forAllHandle = (fn: (handle: AnimationHandle) => void) => {
      getKeys(animationsRef.current).forEach((name) =>
        fn(animationsRef.current[name]!)
      );
    };

    const externalHandle: TransitionAnimationHandle = (ref: Element | null) => {
      forAllHandle((h) => {
        h(ref);
      });
    };
    return [
      externalHandle,
      () => {
        forAllHandle((handle) => {
          handle.cancel();
        });
      },
    ];
  })[0];

  useIsomorphicLayoutEffect(() => {
    animationsRef.current = animations;
  });

  useEffect(() => cleanup, []);

  const currentState = useContext(TransitionStateContext);
  const notify = useContext(TransitionNotifierContext);

  useIsomorphicLayoutEffect(() => {
    // Decide if the parent should animate children on exit or not
    // State must change like enter (-> update) -> exit so it's ok to use ref
    if (keys.includes("exit")) {
      notify(EXITING);
    } else {
      notify(NOT_EXIT);
    }
  }, keys);

  useIsomorphicLayoutEffect(() => {
    if (currentState !== "update") return;

    animationsRef.current[currentState]?.play();
  });

  useIsomorphicLayoutEffect(() => {
    if (currentState === "update") return;

    animationsRef.current[currentState]
      ?.play()
      .end()
      .then(() => {
        if (currentState === "exit") {
          notify(EXITED);
        }
      })
      .catch(() => {
        // ignore uncaught promise error
      });
  }, [currentState]);

  return animation;
};
