import {
  MutableRefObject,
  RefCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { getKeys } from "../utils";
import type { PlayOptions } from "./core";
import type { AnimationHandle } from "./useAnimation";

export type AnimationController<ID extends string> = {
  get: (name: ID) => AnimationHandle;
  playAll: (opts?: PlayOptions) => AnimationController<ID>;
  reverseAll: () => AnimationController<ID>;
  cancelAll: () => AnimationController<ID>;
  finishAll: () => AnimationController<ID>;
  pauseAll: () => AnimationController<ID>;
  ref: RefCallback<any>;
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
          forAllHandle((handle) => {
            handle.cancel();
          });
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
        ref: (v) => {
          forAllHandle((h) => {
            (h.ref as MutableRefObject<any>).current = v;
          });
        },
      };
      return [
        externalHandle,
        () => {
          externalHandle.cancelAll();
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
