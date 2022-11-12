import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { assign, getKeys } from "../../core/utils";
import type { PlayOptions } from "../../core/waapi";
import type { AnimationHandle } from "./useAnimation";

export type AnimationController<ID extends string> = {
  (ref: Element | null): void;
  get: (name: ID) => AnimationHandle;
  playAll: (opts?: PlayOptions) => AnimationController<ID>;
  reverseAll: () => AnimationController<ID>;
  cancelAll: () => AnimationController<ID>;
  finishAll: () => AnimationController<ID>;
  pauseAll: () => AnimationController<ID>;
};

export const useAnimationController = <ID extends string>(
  definitions: {
    [key in ID]: AnimationHandle;
  }
): AnimationController<ID> => {
  const definitionsRef = useRef(definitions);

  const [animation, cleanup] = useState<[AnimationController<ID>, () => void]>(
    () => {
      const getHandle = (name: ID): AnimationHandle => {
        return definitionsRef.current[name];
      };
      const forAllHandle = (fn: (handle: AnimationHandle) => void) => {
        getKeys(definitionsRef.current).forEach((name) =>
          fn(getHandle(name as ID))
        );
      };

      const cancelAll = () => {
        forAllHandle((handle) => {
          handle.cancel();
        });
      };

      const externalHandle: AnimationController<ID> = assign(
        (ref: Element | null) => {
          forAllHandle((h) => {
            h(ref);
          });
        },
        {
          get: getHandle,
          playAll: (opts?: PlayOptions) => {
            forAllHandle((handle) => {
              handle.play(opts);
            });
            return externalHandle;
          },
          reverseAll: () => {
            forAllHandle((handle) => {
              handle.reverse();
            });
            return externalHandle;
          },
          cancelAll: () => {
            cancelAll();
            return externalHandle;
          },
          finishAll: () => {
            forAllHandle((handle) => {
              handle.finish();
            });
            return externalHandle;
          },
          pauseAll: () => {
            forAllHandle((handle) => {
              handle.pause();
            });
            return externalHandle;
          },
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

  useLayoutEffect(() => {
    definitionsRef.current = definitions;
  });

  useEffect(() => cleanup, []);

  return animation;
};
