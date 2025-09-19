import { useContext, useEffect } from "react";
import {
  EXITED,
  EXITING,
  NOT_EXIT,
  TransitionNotifierContext,
  TransitionState,
  TransitionStateContext,
} from "../components/TransitionGroup.js";
import { AnimationHandle, useAnimation } from "./useAnimation.js";
import { getKeys, noop } from "../../core/utils.js";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";
import type {
  TypedKeyframeEffectOptions,
  GetKeyframeFunction,
  TypedKeyframe,
} from "../../core/index.js";
import { useStatic } from "./useStatic.js";
import { useLatestRef } from "./useLatestRef.js";

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

  const animationsRef = useLatestRef(animations);

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
      .catch(
        noop // ignore uncaught promise error
      );
  }, [currentState]);

  return animation;
};
