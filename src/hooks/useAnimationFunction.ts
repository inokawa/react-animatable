import { useLayoutEffect, useRef, useState } from "react";
import {
  AnimationOptions,
  createAnimation,
  createHandle,
  isSameObject,
  TypedKeyframe,
} from "./core";
import { AnimationHandle } from "./useAnimation";

export type ComputedTimingContext = Required<
  {
    [key in keyof ComputedEffectTiming]: NonNullable<ComputedEffectTiming[key]>;
  }
>;
export type AnimationFunction = (ctx: ComputedTimingContext) => void;

const startAnimation = (
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
  animation.play();
  animation.ready.then(update);
};

const buildAnimationInitializer = (
  getUpdateFunction: () => AnimationFunction
): ((
  keyframes: TypedKeyframe | TypedKeyframe[],
  options: AnimationOptions | undefined
) => Animation[]) => {
  let cache: [Animation, AnimationOptions | undefined] | [] = [];

  return (kf, options) => {
    if (cache.length) {
      const [prevAnimation, prevOptions] = cache;
      if (isSameObject(options, prevOptions)) {
        if (prevAnimation.playState !== "running") {
          startAnimation(prevAnimation, getUpdateFunction);
        }
        return [prevAnimation];
      }
      prevAnimation.cancel();
    }
    const animation = createAnimation(null, null, options);
    startAnimation(animation, getUpdateFunction);
    cache = [animation, options];
    return [animation];
  };
};

export const useAnimationFunction = (
  onUpdate: AnimationFunction,
  options?: AnimationOptions
): AnimationHandle => {
  const onUpdateRef = useRef(onUpdate);
  const optionsRef = useRef(options);

  const animation = useState<AnimationHandle>(() => {
    const getOnUpdate = () => onUpdateRef.current;
    const getOptions = () => optionsRef.current;

    const handle = createHandle(buildAnimationInitializer(getOnUpdate));
    const externalHandle: AnimationHandle = {
      play: () => {
        return handle.play([], getOptions()).then(() => externalHandle);
      },
      replay: () => {
        return handle.replay([], getOptions()).then(() => externalHandle);
      },
      reverse: () => {
        return handle.reverse([], getOptions()).then(() => externalHandle);
      },
      cancel: handle.cancel,
      finish: handle.finish,
      pause: handle.pause,
      setTime: handle.setTime,
      setPlaybackRate: handle.setPlaybackRate,
    };
    return externalHandle;
  })[0];

  useLayoutEffect(() => {
    onUpdateRef.current = onUpdate;
    optionsRef.current = options;
  });

  return animation;
};
