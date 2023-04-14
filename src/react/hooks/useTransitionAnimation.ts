import { useContext, useEffect, useRef } from "react";
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
  TypedKeyframeEffectOptions,
  GetKeyframeFunction,
  TypedKeyframe,
} from "../../core";
import { useStatic } from "./useStatic";

export interface TransitionAnimationHandle {
  (ref: Element | null): void;
}

export interface TransitionAnimationOptions
  extends TypedKeyframeEffectOptions {}

export type TransitionAnimationDefinition = [
  keyframe: TypedKeyframe | TypedKeyframe[] | GetKeyframeFunction,
  options?: TransitionAnimationOptions
];

/**
 *
 * A hook to compose multiple {@link useAnimation} and plays them when element enter/update/exits.
 * This hook must be used under {@link TransitionGroup} component.
 */
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

  const [animation, cleanup] = useStatic(
    (): [TransitionAnimationHandle, () => void] => {
      const forAllHandle = (fn: (handle: AnimationHandle) => void) => {
        getKeys(animationsRef.current).forEach((name) =>
          fn(animationsRef.current[name]!)
        );
      };

      const externalHandle: TransitionAnimationHandle = (
        ref: Element | null
      ) => {
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
    }
  );

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
      .waitFor("finish")
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
