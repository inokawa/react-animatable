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
    const initAnimation = (
      options: AnimationOptions | undefined
    ): Animation => {
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
    };
    const getAnimation = () => cache?.[0];
    const handle = createHandle();

    const externalHandle: AnimationHandle = {
      play: () => {
        handle._play(initAnimation(getOptions()));
        return externalHandle;
      },
      replay: () => {
        handle._replay(initAnimation(getOptions()));
        return externalHandle;
      },
      reverse: () => {
        handle._reverse(initAnimation(getOptions()));
        return externalHandle;
      },
      cancel: () => handle._cancel(getAnimation()),
      finish: () => handle._finish(getAnimation()),
      pause: () => handle._pause(getAnimation()),
      commit: () => handle._commit(getAnimation()),
      setTime: (time) => handle._setTime(getAnimation(), time),
      setPlaybackRate: (rate) => handle._setRate(getAnimation(), rate),
      end: () => handle._end(getAnimation()),
    };
    return [
      externalHandle,
      () => {
        handle._cancel(getAnimation());
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
