import { useEffect, useRef, useState } from "react";
import type { Expand } from "../../core/types";
import { assign, isSameObject, isSameObjectArray } from "../../core/utils";
import {
  AnimationOptions,
  createAnimation,
  GetKeyframeFunction,
  normalizeKeyframe,
  PlayOptions,
  ReverseOptions,
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

export type AnimationPlayArgs<Args = void> = Args extends void
  ? [PlayOptions?]
  : [Expand<PlayOptions & (Args extends void ? {} : { args: Args })>];

export type AnimationReverseArgs<Args = void> = Args extends void
  ? [ReverseOptions?]
  : [Expand<ReverseOptions & (Args extends void ? {} : { args: Args })>];

/**
 * Handle of {@link useAnimation}.
 * @typeParam Args - argument type
 */
export interface AnimationHandle<Args = void> {
  /**
   * You have to pass this callback to ref of element you want to control.
   */
  (ref: Element | null): void;
  /**
   * A wrapper of Web Animations API's [play](https://developer.mozilla.org/en-US/docs/Web/API/Animation/play).
   */
  play: (...opts: AnimationPlayArgs<Args>) => AnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [reverse](https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse).
   */
  reverse: (...opts: AnimationReverseArgs<Args>) => AnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [cancel](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel).
   */
  cancel: () => AnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [finish](https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish).
   */
  finish: () => AnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [pause](https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause).
   */
  pause: () => AnimationHandle<Args>;
  /**
   * A setter of Web Animations API's [currentTime](https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime).
   */
  setTime: (time: number) => AnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [updatePlaybackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate).
   *
   * If you pass function, you can get current playbackRate from its argument.
   */
  setPlaybackRate: (
    rate: number | ((prevRate: number) => number)
  ) => AnimationHandle<Args>;
  /**
   * A getter of Promise that will be resolved in specified timing.
   *
   * - `finished`: resolved when animation is finished and its playback direction is normal.
   * - `reverseFinished`: resolved when animation is finished and its playback direction is reversed.
   */
  waitFor: (event: WaitingAnimationEventName) => Promise<AnimationHandle<Args>>;
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
            el: Element,
            keyframes: TypedKeyframe[],
            options: AnimationOptions | undefined
          ]
        | undefined;

      const getTarget = () => target;
      const initAnimation = (opts: { args?: Args } = {}): Animation => {
        const keyframes = normalizeKeyframe(
          getTarget()!,
          keyframeRef.current,
          opts.args!
        );
        const options = optionsRef.current;
        const el = getTarget()!;
        if (cache) {
          const [prevAnimation, prevEl, prevKeyframes, prevOptions] = cache;
          // Reuse animation if possible
          if (
            el === prevEl &&
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
        cache = [animation, el, keyframes, options];
        return animation;
      };
      const getAnimation = () => cache?.[0];

      const cancel = () => {
        _cancel(getAnimation());
      };

      const externalHandle: AnimationHandle<Args> = assign(
        (ref: Element | null) => {
          target = ref;
        },
        {
          play: (...opts: AnimationPlayArgs<Args>) => {
            _play(initAnimation(opts[0] as { args?: Args }), opts[0]);
            return externalHandle;
          },
          reverse: (...opts: AnimationReverseArgs<Args>) => {
            _reverse(initAnimation(opts[0]));
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
          setTime: (time: number) => {
            _setTime(getAnimation(), time);
            return externalHandle;
          },
          setPlaybackRate: (rate: number | ((prevRate: number) => number)) => {
            _setRate(getAnimation(), rate);
            return externalHandle;
          },
          waitFor: (event: WaitingAnimationEventName) =>
            _waitFor(getAnimation(), event).then(() => externalHandle),
        }
      );

      return [
        externalHandle,
        () => {
          cancel();
        },
      ];
    }
  )[0];

  useIsomorphicLayoutEffect(() => {
    keyframeRef.current = keyframe;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return animation;
};
