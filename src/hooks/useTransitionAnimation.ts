import { useContext, useLayoutEffect } from "react";
import {
  TransitionHasExitContext,
  TransitionNotifierContext,
  TransitionState,
  TransitionStateContext,
} from "../components/AnimationGroup";
import {
  AnimationOptions,
  AnimationsHandle,
  TypedKeyframe,
  useAnimations,
  WithRef,
} from ".";
import { getKeys } from "../utils";

export const useTransitionAnimation = <T extends TransitionState>(
  definitions: {
    [key in T]: [TypedKeyframe | TypedKeyframe[], AnimationOptions?];
  }
): WithRef<AnimationsHandle<T>> => {
  const animation = useAnimations(definitions);
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
    animation.play(currentState as T);
    return () => {
      animation.cancel(currentState as T);
    };
  });

  useLayoutEffect(() => {
    if (currentState === "update") return;
    const handle = definitions[currentState as T];
    if (!handle) return;
    animation
      .cancelAll()
      .play(currentState as T)
      .end(currentState as T)
      .then(() => {
        if (currentState === "exit") {
          setShow(false);
        }
      });
  }, [currentState]);

  return animation;
};
