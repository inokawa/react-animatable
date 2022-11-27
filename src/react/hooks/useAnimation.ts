import { useEffect, useRef, useState } from "react";
import type { Expand } from "../../core/types";
import { assign, isSameObject, isSameObjectArray } from "../../core/utils";
import {
  AnimationOptions,
  createAnimation,
  GetKeyframeFunction,
  normalizeKeyframe,
  PlayOptions,
  TypedKeyframe,
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

export type PlayArgs<Args = void> = Args extends void
  ? [PlayOptions?]
  : [Expand<PlayOptions & (Args extends void ? {} : { args: Args })>];

export interface BaseAnimationHandle<Args = void> {
  /**
   * A wrapper of Web Animations API's [play](https://developer.mozilla.org/en-US/docs/Web/API/Animation/play).
   */
  play: (...opts: PlayArgs<Args>) => BaseAnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [reverse](https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse).
   */
  reverse: () => BaseAnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [cancel](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel).
   */
  cancel: () => BaseAnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [finish](https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish).
   */
  finish: () => BaseAnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [pause](https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause).
   */
  pause: () => BaseAnimationHandle<Args>;
  /**
   * A setter of Web Animations API's [currentTime](https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime).
   *
   * If you pass function, you can get [endTime](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming#return_value) from its argument.
   */
  seek: (
    time: number | ((endTime: number) => number)
  ) => BaseAnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [updatePlaybackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate).
   *
   * If you pass function, you can get current [playbackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate) from its argument.
   */
  setPlaybackRate: (
    rate: number | ((prevRate: number) => number)
  ) => BaseAnimationHandle<Args>;
  /**
   * A getter of Promise that will be resolved in specified timing.
   *
   * - `finished`: resolved when animation is finished and its playback direction is normal.
   * - `reverseFinished`: resolved when animation is finished and its playback direction is reversed.
   */
  waitFor: (
    event: WaitingAnimationEventName
  ) => Promise<BaseAnimationHandle<Args>>;
}

/**
 * Handle of {@link useAnimation}.
 * @typeParam Args - argument type
 */
export interface AnimationHandle<Args = void>
  extends BaseAnimationHandle<Args> {
  /**
   * You have to pass this callback to ref of element you want to control.
   */
  (ref: Element | null): void;
}

/**
 * A basic hook to use Web Animations API. See {@link AnimationHandle}.
 * @typeParam Args - argument type
 */
export const useAnimation = <Args = void>(
  keyframe: TypedKeyframe | TypedKeyframe[] | GetKeyframeFunction<Args>,
  options?: AnimationOptions
): AnimationHandle<Args> => {
  const keyframeRef = useRef(keyframe);
  const optionsRef = useRef(options);

  const [animation, cleanup] = useState<[AnimationHandle<Args>, () => void]>(
    () => {
      let target: Element | null = null;
      let cache:
        | [
            animation: Animation,
            keyframes: TypedKeyframe[],
            options: AnimationOptions | undefined
          ]
        | undefined;

      const initAnimation = (
        el: Element,
        opts: { args?: Args } = {}
      ): Animation => {
        const keyframes = normalizeKeyframe(
          el,
          keyframeRef.current,
          opts.args!
        );
        const options = optionsRef.current;
        if (cache) {
          const [prevAnimation, prevKeyframes, prevOptions] = cache;
          // Reuse animation if possible
          if (
            isSameObjectArray(keyframes, prevKeyframes) &&
            isSameObject(options, prevOptions)
          ) {
            // Reset reversed playback direction
            if (prevAnimation.playbackRate < 0) {
              _setRate(prevAnimation, (p) => -p);
            }
            return prevAnimation;
          }
          prevAnimation.cancel();
        }
        const animation = createAnimation(el, keyframes as Keyframe[], options);
        cache = [animation, keyframes, options];
        return animation;
      };
      const getAnimation = () => cache?.[0];

      const externalHandle: AnimationHandle<Args> = assign(
        (ref: Element | null) => {
          if (!(target = ref)) {
            cache = undefined;
          }
        },
        <BaseAnimationHandle<Args>>{
          play: (...opts) => {
            if (!target) return externalHandle;
            _play(initAnimation(target, opts[0] as { args?: Args }), opts[0]);
            return externalHandle;
          },
          reverse: () => {
            _reverse(getAnimation());
            return externalHandle;
          },
          cancel: () => {
            _cancel(getAnimation());
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
          seek: (time) => {
            _setTime(getAnimation(), time);
            return externalHandle;
          },
          setPlaybackRate: (rate) => {
            _setRate(getAnimation(), rate);
            return externalHandle;
          },
          waitFor: (event) =>
            _waitFor(getAnimation(), event).then(() => externalHandle),
        }
      );

      return [externalHandle, externalHandle.cancel];
    }
  )[0];

  useIsomorphicLayoutEffect(() => {
    keyframeRef.current = keyframe;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return animation;
};
