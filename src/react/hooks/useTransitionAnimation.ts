import { useContext, useEffect, useRef, useState } from "react";
import {
  EXITED,
  EXITING,
  NOT_EXIT,
  TransitionNotifierContext,
  TransitionState,
  TransitionStateContext,
} from "../components/TransitionGroup";
import type { AnimationHandle } from "./useAnimation";
import { assign, getKeys } from "../../core/utils";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export type AnimationController<ID extends string> = {
  (ref: Element | null): void;
  get: (name: ID) => AnimationHandle;
};

export const useTransitionAnimation = <T extends TransitionState>(
  definitions: {
    [key in T]: AnimationHandle;
  }
): AnimationController<T> => {
  const definitionsRef = useRef(definitions);

  const [animation, cleanup] = useState<[AnimationController<T>, () => void]>(
    () => {
      const getHandle = (name: T): AnimationHandle => {
        return definitionsRef.current[name];
      };
      const forAllHandle = (fn: (handle: AnimationHandle) => void) => {
        getKeys(definitionsRef.current).forEach((name) =>
          fn(getHandle(name as T))
        );
      };

      const cancelAll = () => {
        forAllHandle((handle) => {
          handle.cancel();
        });
      };

      const externalHandle: AnimationController<T> = assign(
        (ref: Element | null) => {
          forAllHandle((h) => {
            h(ref);
          });
        },
        {
          get: getHandle,
        }
      );
      return [
        externalHandle,
        () => {
          cancelAll();
        },
      ];
    }
  )[0];

  useIsomorphicLayoutEffect(() => {
    definitionsRef.current = definitions;
  });

  useEffect(() => cleanup, []);

  const currentState = useContext(TransitionStateContext);
  const notify = useContext(TransitionNotifierContext);

  const keys = getKeys(definitions);
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
          notify(EXITED);
        }
      })
      .catch(() => {
        // ignore uncaught promise error
      });
  }, [currentState]);

  return animation;
};
