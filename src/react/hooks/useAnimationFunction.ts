import { useEffect, useRef, useState } from "react";
import type { Expand } from "../../core/types";
import { isSameObject } from "../../core/utils";
import {
  AnimationOptions,
  createAnimation,
  PlayOptions,
  ReverseOptions,
  _cancel,
  _waitFor,
  _finish,
  _pause,
  _play,
  _reverse,
  _setRate,
  _setTime,
  WaitingAnimationEventName,
} from "../../core/waapi";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export type AnimationFunctionPlayArgs<Args = void> = Args extends void
  ? [PlayOptions?]
  : [Expand<PlayOptions & (Args extends void ? {} : { args: Args })>];

export type AnimationFunctionReverseArgs<Args = void> = Args extends void
  ? [ReverseOptions?]
  : [Expand<ReverseOptions & (Args extends void ? {} : { args: Args })>];

/**
 * Handle of {@link useAnimationFunction}
 * @typeParam Args - argument type
 */
export interface AnimationFunctionHandle<Args = void> {
  play: (
    ...opts: AnimationFunctionPlayArgs<Args>
  ) => AnimationFunctionHandle<Args>;
  reverse: (
    ...opts: AnimationFunctionReverseArgs<Args>
  ) => AnimationFunctionHandle<Args>;
  cancel: () => AnimationFunctionHandle<Args>;
  finish: () => AnimationFunctionHandle<Args>;
  pause: () => AnimationFunctionHandle<Args>;
  setTime: (time: number) => AnimationFunctionHandle<Args>;
  setPlaybackRate: (
    rate: number | ((prevRate: number) => number)
  ) => AnimationFunctionHandle<Args>;
  waitFor: (
    event: WaitingAnimationEventName
  ) => Promise<AnimationFunctionHandle<Args>>;
}

export type ComputedTimingContext = Required<
  {
    [key in keyof ComputedEffectTiming]: NonNullable<ComputedEffectTiming[key]>;
  }
>;

export type AnimationFunction<Args = void> = Args extends void
  ? (ctx: ComputedTimingContext) => void
  : (ctx: ComputedTimingContext, args: Args) => void;

const bindUpdateFunction = <Args>(
  animation: Animation,
  getUpdateFunction: () => AnimationFunction<Args>,
  args: Args
) => {
  const update = () => {
    const timing = animation.effect?.getComputedTiming();
    if (!timing) return;
    const progress = timing.progress;
    if (progress != null) {
      getUpdateFunction()(timing as ComputedTimingContext, args);
    }
    if (animation.playState === "running") {
      requestAnimationFrame(update);
    }
  };
  animation.ready.then(update);
};

/**
 * Same as {@link useAnimationFunction}, but it drives function not React element.
 * @typeParam Args - argument type
 */
export const useAnimationFunction = <Args = void>(
  onUpdate: AnimationFunction<Args>,
  options?: AnimationOptions
): AnimationFunctionHandle<Args> => {
  const onUpdateRef = useRef(onUpdate);
  const optionsRef = useRef(options);

  const [animation, cleanup] = useState<
    [AnimationFunctionHandle<Args>, () => void]
  >(() => {
    const getOnUpdate = () => onUpdateRef.current;

    let cache: [Animation, AnimationOptions | undefined] | undefined;
    const initAnimation = (opts: { args?: Args } = {}): Animation => {
      const options = optionsRef.current;
      if (cache) {
        const [prevAnimation, prevOptions] = cache;
        // Reuse animation if possible
        if (isSameObject(options, prevOptions)) {
          if (prevAnimation.playState !== "running") {
            bindUpdateFunction(prevAnimation, getOnUpdate, opts.args!);
          }
          // Reset reversed playback direction
          if (prevAnimation.playbackRate < 0) {
            _setRate(prevAnimation, (p) => -p);
          }
          return prevAnimation;
        }
        prevAnimation.cancel();
      }
      const animation = createAnimation(null, null, options);
      bindUpdateFunction(animation, getOnUpdate, opts.args!);
      cache = [animation, options];
      return animation;
    };
    const getAnimation = () => cache?.[0];

    const cancel = () => {
      _cancel(getAnimation());
    };

    const externalHandle: AnimationFunctionHandle<Args> = {
      play: (...opts) => {
        _play(initAnimation(opts[0] as { args?: Args }), opts[0]);
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
      waitFor: (event: WaitingAnimationEventName) =>
        _waitFor(getAnimation(), event).then(() => externalHandle),
    };
    return [
      externalHandle,
      () => {
        cancel();
      },
    ];
  })[0];

  useIsomorphicLayoutEffect(() => {
    onUpdateRef.current = onUpdate;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return animation;
};
