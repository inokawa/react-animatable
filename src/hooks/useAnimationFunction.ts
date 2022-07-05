import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { isSameObject } from "../utils";
import {
  AnimationOptions,
  createAnimation,
  createHandle,
  PlayOptions,
} from "./core";

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
      const handle = createHandle();

      const cancel = () => {
        handle._cancel(getAnimation());
      };

      const externalHandle: AnimationFunctionHandle = {
        play: (opts) => {
          handle._play(initAnimation(), opts);
          return externalHandle;
        },
        reverse: () => {
          handle._reverse(initAnimation());
          return externalHandle;
        },
        cancel: () => {
          cancel();
          return externalHandle;
        },
        finish: () => {
          handle._finish(getAnimation());
          return externalHandle;
        },
        pause: () => {
          handle._pause(getAnimation());
          return externalHandle;
        },
        setTime: (time) => {
          handle._setTime(getAnimation(), time);
          return externalHandle;
        },
        setPlaybackRate: (rate) => {
          handle._setRate(getAnimation(), rate);
          return externalHandle;
        },
        end: () => handle._end(getAnimation()).then(() => externalHandle),
      };
      return [
        externalHandle,
        () => {
          cancel();
        },
      ];
    }
  )[0];

  useLayoutEffect(() => {
    onUpdateRef.current = onUpdate;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return animation;
};
