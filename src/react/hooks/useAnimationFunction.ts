import { useEffect } from "react";
import { isSameObject } from "../../core/utils";
import {
  TypedKeyframeEffectOptions,
  createAnimation,
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
import type { BaseAnimationHandle } from "./useAnimation";
import { useStatic } from "./useStatic";
import { useLatestRef } from "./useLatestRef";

/**
 * Handle of {@link useAnimationFunction}.
 * @typeParam Args - argument type
 */
export interface AnimationFunctionHandle<Args = void>
  extends BaseAnimationHandle<Args> {}

export interface AnimationFunctionOptions extends TypedKeyframeEffectOptions {}

/**
 * Non nullable [ComputedEffectTiming](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming)
 */
export type ComputedTimingContext = Required<{
  [key in keyof ComputedEffectTiming]: NonNullable<ComputedEffectTiming[key]>;
}>;

/**
 * An argument of {@link useAnimationFunction}.
 * In this callback you can update any state or ref in JS.
 * - `ctx`: current animation state
 * - `args`: any argument passed from play
 */
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
 * Same as {@link useAnimation}, but it drives function not React element. See {@link AnimationFunctionHandle}.
 * @typeParam Args - argument type
 */
export const useAnimationFunction = <Args = void>(
  onUpdate: AnimationFunction<Args>,
  options?: AnimationFunctionOptions
): AnimationFunctionHandle<Args> => {
  const onUpdateRef = useLatestRef(onUpdate);
  const optionsRef = useLatestRef(options);

  const [handle, cleanup] = useStatic(
    (): [AnimationFunctionHandle<Args>, () => void] => {
      const getOnUpdate = () => onUpdateRef.current;

      let cache: [Animation, AnimationFunctionOptions | undefined] | undefined;
      const initAnimation = (opts: { args?: Args } = {}): Animation => {
        const options = optionsRef.current;
        if (cache) {
          const [prevAnimation, prevOptions] = cache;
          // Reuse animation if possible
          if (isSameObject(options, prevOptions)) {
            if (prevAnimation.playState !== "running") {
              bindUpdateFunction(prevAnimation, getOnUpdate, opts.args!);
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
          const animation = getAnimation();
          if (animation) {
            _cancel(animation);
          }
          return externalHandle;
        },
        finish: () => {
          const animation = getAnimation();
          if (animation) {
            _finish(animation);
          }
          return externalHandle;
        },
        pause: () => {
          const animation = getAnimation();
          if (animation) {
            _pause(animation);
          }
          return externalHandle;
        },
        setTime: (time) => {
          const animation = getAnimation();
          if (animation) {
            _setTime(animation, time);
          }
          return externalHandle;
        },
        setPlaybackRate: (rate) => {
          const animation = getAnimation();
          if (animation) {
            _setRate(animation, rate);
          }
          return externalHandle;
        },
        waitFor: (event: WaitingAnimationEventName) =>
          _waitFor(getAnimation(), event).then(() => externalHandle),
      };
      return [externalHandle, externalHandle.cancel];
    }
  );

  useEffect(() => cleanup, []);

  return handle;
};
