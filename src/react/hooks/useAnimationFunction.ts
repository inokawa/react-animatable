import { useEffect, useRef, useState } from "react";
import { isSameObject } from "../../core/utils";
import {
  AnimationOptions,
  createAnimation,
  PlayOptions,
  _cancel,
  _end,
  _finish,
  _pause,
  _play,
  _reverse,
  _setRate,
  _setTime,
} from "../../core/waapi";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export type AnimationFunctionHandle = {
  play: (opts?: PlayOptions) => AnimationFunctionHandle;
  reverse: () => AnimationFunctionHandle;
  cancel: () => AnimationFunctionHandle;
  finish: () => AnimationFunctionHandle;
  pause: () => AnimationFunctionHandle;
  setTime: (time: number) => AnimationFunctionHandle;
  setPlaybackRate: (
    rate: number | ((prevRate: number) => number)
  ) => AnimationFunctionHandle;
  end: () => Promise<AnimationFunctionHandle>;
};

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
): AnimationFunctionHandle => {
  const onUpdateRef = useRef(onUpdate);
  const optionsRef = useRef(options);

  const [animation, cleanup] = useState<[AnimationFunctionHandle, () => void]>(
    () => {
      const getOnUpdate = () => onUpdateRef.current;
      const getOptions = () => optionsRef.current;

      let cache: [Animation, AnimationOptions | undefined] | undefined;
      const initAnimation = (): Animation => {
        const options = getOptions();
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

      const cancel = () => {
        _cancel(getAnimation());
      };

      const externalHandle: AnimationFunctionHandle = {
        play: (opts) => {
          _play(initAnimation(), opts);
          return externalHandle;
        },
        reverse: () => {
          _reverse(initAnimation());
          return externalHandle;
        },
        cancel: () => {
          cancel();
          return externalHandle;
        },
        finish: () => {
          _finish(getAnimation());
          return externalHandle;
        },
        pause: () => {
          _pause(getAnimation());
          return externalHandle;
        },
        setTime: (time) => {
          _setTime(getAnimation(), time);
          return externalHandle;
        },
        setPlaybackRate: (rate) => {
          _setRate(getAnimation(), rate);
          return externalHandle;
        },
        end: () => _end(getAnimation()).then(() => externalHandle),
      };
      return [
        externalHandle,
        () => {
          cancel();
        },
      ];
    }
  )[0];

  useIsomorphicLayoutEffect(() => {
    onUpdateRef.current = onUpdate;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return animation;
};
