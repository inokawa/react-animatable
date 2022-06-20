import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimationOptions,
  createAnimation,
  createHandle,
  isSameObject,
} from "./core";
import type { AnimationHandle } from "./useAnimation";

export type ComputedTimingContext = Required<
  {
    [key in keyof ComputedEffectTiming]: NonNullable<ComputedEffectTiming[key]>;
  }
>;
export type AnimationFunction = (ctx: ComputedTimingContext) => void;

const bindUpdateFunction = (
  animation: Animation,
  getUpdateFunction: () => AnimationFunction
) => {
  const update = () => {
    const timing = animation.effect?.getComputedTiming();
    if (!timing) return;
    const progress = timing.progress;
    if (progress != null) {
      getUpdateFunction()(timing as ComputedTimingContext);
    }
    if (animation.playState === "running") {
      requestAnimationFrame(update);
    }
  };
  animation.ready.then(update);
};

export const useAnimationFunction = (
  onUpdate: AnimationFunction,
  options?: AnimationOptions
): AnimationHandle => {
  const onUpdateRef = useRef(onUpdate);
  const optionsRef = useRef(options);

  const [animation, cleanup] = useState<[AnimationHandle, () => void]>(() => {
    const getOnUpdate = () => onUpdateRef.current;
    const getOptions = () => optionsRef.current;

    let cache: [Animation, AnimationOptions | undefined] | undefined;
    const handle = createHandle<AnimationOptions | undefined, null>(
      (options) => {
        if (cache) {
          const [prevAnimation, prevOptions] = cache;
          if (isSameObject(options, prevOptions)) {
            if (prevAnimation.playState !== "running") {
              bindUpdateFunction(prevAnimation, getOnUpdate);
            }
            return prevAnimation;
          }
          prevAnimation.cancel();
        }
        const animation = createAnimation(null, null, options);
        bindUpdateFunction(animation, getOnUpdate);
        cache = [animation, options];
        return animation;
      }
    );

    const externalHandle: AnimationHandle = {
      play: () => {
        handle._play(getOptions(), null);
        return externalHandle;
      },
      replay: () => {
        handle._replay(getOptions(), null);
        return externalHandle;
      },
      reverse: () => {
        handle._reverse(getOptions(), null);
        return externalHandle;
      },
      cancel: handle._cancel,
      finish: handle._finish,
      pause: handle._pause,
      commit: handle._commit,
      setTime: handle._setTime,
      setPlaybackRate: handle._setRate,
      end: handle._end,
    };
    return [
      externalHandle,
      () => {
        handle._cancel();
      },
    ];
  })[0];

  useLayoutEffect(() => {
    onUpdateRef.current = onUpdate;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return animation;
};
