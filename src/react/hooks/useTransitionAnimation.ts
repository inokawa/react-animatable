import { useContext } from "react";
import {
  TransitionHasExitContext,
  TransitionNotifierContext,
  TransitionState,
  TransitionStateContext,
} from "../components/AnimationGroup";
import type { AnimationHandle } from "./useAnimation";
import {
  AnimationController,
  useAnimationController,
} from "./useAnimationController";
import { getKeys } from "../../core/utils";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export const useTransitionAnimation = <T extends TransitionState>(
  definitions: {
    [key in T]: AnimationHandle;
  }
): AnimationController<T> => {
  const animation = useAnimationController(definitions);
  const currentState = useContext(TransitionStateContext);
  const setShow = useContext(TransitionNotifierContext);
  const hasExitRef = useContext(TransitionHasExitContext);

  const keys = getKeys(definitions);
  useIsomorphicLayoutEffect(() => {
    // Decide if the parent should animate children on exit or not
    // State must change like enter (-> update) -> exit so it's ok to use ref
    hasExitRef.current = keys.includes("exit");
  }, keys);

  useIsomorphicLayoutEffect(() => {
    if (currentState !== "update") return;
    const handle = definitions[currentState as T];
    if (!handle) return;
    animation.get(currentState as T).play();
    return () => {
      animation.get(currentState as T).cancel();
    };
  });

  useIsomorphicLayoutEffect(() => {
    if (currentState === "update") return;
    const handle = definitions[currentState as T];
    if (!handle) return;
    animation
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
