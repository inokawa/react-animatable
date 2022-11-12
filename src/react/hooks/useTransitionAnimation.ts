import { useContext, useLayoutEffect } from "react";
import {
  TransitionHasExitContext,
  TransitionNotifierContext,
  TransitionState,
  TransitionStateContext,
} from "../components/AnimationGroup";
import type { AnimationHandleWithRef } from "./useAnimation";
import {
  AnimationControllerWithRef,
  useAnimationController,
} from "./useAnimationController";
import { getKeys } from "../../core/utils";
import { usePrevious } from "./usePrevious";

export const useTransitionAnimation = <T extends TransitionState>(
  definitions: {
    [key in T]: AnimationHandleWithRef;
  }
): AnimationControllerWithRef<T> => {
  const animation = useAnimationController(definitions);
  const currentState = useContext(TransitionStateContext);
  const setShow = useContext(TransitionNotifierContext);
  const hasExitRef = useContext(TransitionHasExitContext);

  const keys = getKeys(definitions);
  useLayoutEffect(() => {
    // Decide if the parent should animate children on exit or not
    // State must change like enter (-> update) -> exit so it's ok to use ref
    hasExitRef.current = keys.includes("exit");
  }, keys);

  useLayoutEffect(() => {
    if (currentState !== "update") return;
    const handle = definitions[currentState as T];
    if (!handle) return;
    animation.get(currentState as T).play();
    return () => {
      animation.get(currentState as T).cancel();
    };
  });

  const prevState = usePrevious(currentState);

  useLayoutEffect(() => {
    if (currentState === "update") return;
    const handle = definitions[currentState as T];
    if (!handle) return;
    animation.get(prevState as T).persist();
    animation
      .cancelAll()
      .get(currentState as T)
      .play()
      .end()
      .then(() => {
        if (currentState === "exit") {
          setShow(false);
        }
      })
      .catch(() => {
        // ignore uncaught promise error
      });
  }, [currentState]);

  return animation;
};
