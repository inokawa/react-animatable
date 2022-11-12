import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { assign, getKeys } from "../../core/utils";
import type { PlayOptions } from "../../core/waapi";
import type { AnimationHandle, AnimationHandleWithRef } from "./useAnimation";

export type AnimationControllerWithRef<ID extends string> = {
  (ref: Element | null): void;
} & AnimationController<ID>;

export type AnimationController<ID extends string> = {
  get: (name: ID) => AnimationHandle;
  playAll: (opts?: PlayOptions) => AnimationController<ID>;
  reverseAll: () => AnimationController<ID>;
  cancelAll: () => AnimationController<ID>;
  finishAll: () => AnimationController<ID>;
  pauseAll: () => AnimationController<ID>;
};

export const useAnimationController = <ID extends string>(
  definitions: {
    [key in ID]: AnimationHandleWithRef;
  }
): AnimationControllerWithRef<ID> => {
  const definitionsRef = useRef(definitions);

  const [animation, cleanup] = useState<
    [AnimationControllerWithRef<ID>, () => void]
  >(() => {
    const getHandle = (name: ID): AnimationHandleWithRef => {
      return definitionsRef.current[name];
    };
    const forAllHandle = (fn: (handle: AnimationHandleWithRef) => void) => {
      getKeys(definitionsRef.current).forEach((name) =>
        fn(getHandle(name as ID))
      );
    };

    const cancelAll = () => {
      forAllHandle((handle) => {
        handle.cancel();
      });
    };

    const externalHandle: AnimationController<ID> = {
      get: getHandle,
      playAll: (opts) => {
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
    };
    return [
      assign((ref: Element | null) => {
        forAllHandle((h) => {
          h(ref);
        });
      }, externalHandle),
      () => {
        cancelAll();
      },
    ];
  })[0];

  useLayoutEffect(() => {
    definitionsRef.current = definitions;
  });

  useEffect(() => cleanup, []);

  return animation;
};
