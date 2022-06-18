import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimationOptions,
  createAnimation,
  createHandle,
  isSameObject,
  TypedKeyframe,
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

const buildAnimationInitializer = (
  getUpdateFunction: () => AnimationFunction
): ((
  keyframes: TypedKeyframe | TypedKeyframe[],
  options: AnimationOptions | undefined
) => Animation | undefined) => {
  let cache: [Animation, AnimationOptions | undefined] | undefined;

  return (_, options) => {
    if (cache) {
      const [prevAnimation, prevOptions] = cache;
      if (isSameObject(options, prevOptions)) {
        if (prevAnimation.playState !== "running") {
          bindUpdateFunction(prevAnimation, getUpdateFunction);
        }
        return prevAnimation;
      }
      prevAnimation.cancel();
    }
    const animation = createAnimation(null, null, options);
    bindUpdateFunction(animation, getUpdateFunction);
    cache = [animation, options];
    return animation;
  };
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

    const handle = createHandle(buildAnimationInitializer(getOnUpdate));
    const externalHandle: AnimationHandle = {
      play: () => {
        return handle._play([], getOptions()).then(() => externalHandle);
      },
      replay: () => {
        return handle._replay([], getOptions()).then(() => externalHandle);
      },
      reverse: () => {
        return handle._reverse([], getOptions()).then(() => externalHandle);
      },
      cancel: handle._cancel,
      finish: handle._finish,
      pause: handle._pause,
      setTime: handle._setTime,
      setPlaybackRate: handle._setRate,
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
