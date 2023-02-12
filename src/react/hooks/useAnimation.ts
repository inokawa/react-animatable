import { useEffect, useRef } from "react";
import {
  assign,
  getStyle,
  isSameObject,
  isSameObjectArray,
  toArray,
} from "../../core/utils";
import {
  TypedKeyframeEffectOptions,
  createAnimation,
  GetKeyframeFunction,
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

export type PlayOptionsWithArgs<Args = void> = PlayOptions & { args: Args };

export interface BaseAnimationHandle<Args = void> {
  /**
   * A wrapper of Web Animations API's [play](https://developer.mozilla.org/en-US/docs/Web/API/Animation/play). It's similar to GSAP's `play()`.
   */
  play(
    ...opts: Args extends void ? [PlayOptions?] : [PlayOptionsWithArgs<Args>]
  ): BaseAnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [reverse](https://developer.mozilla.org/en-US/docs/Web/API/Animation/reverse). It's similar to GSAP's `reverse()`.
   */
  reverse(): BaseAnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [cancel](https://developer.mozilla.org/en-US/docs/Web/API/Animation/cancel). It's similar to GSAP's `kill()`.
   */
  cancel(): BaseAnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [finish](https://developer.mozilla.org/en-US/docs/Web/API/Animation/finish).
   */
  finish(): BaseAnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [pause](https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause). It's similar to GSAP's `pause()`.
   */
  pause(): BaseAnimationHandle<Args>;
  /**
   * A setter of Web Animations API's [currentTime](https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime). It's similar to GSAP's `seek()`.
   *
   * If you pass function, you can get [endTime](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming#return_value) from its argument.
   */
  setTime(
    time: number | ((endTime: number) => number)
  ): BaseAnimationHandle<Args>;
  /**
   * A wrapper of Web Animations API's [updatePlaybackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate). It's similar to GSAP's `timeScale()`.
   *
   * If you pass function, you can get current [playbackRate](https://developer.mozilla.org/en-US/docs/Web/API/Animation/playbackRate) from its argument.
   */
  setPlaybackRate(
    rate: number | ((prevRate: number) => number)
  ): BaseAnimationHandle<Args>;
  /**
   * A getter of Promise that will be resolved in specified timing.
   *
   * - `finished`: resolved when animation is finished and its playback direction is normal.
   * - `reverseFinished`: resolved when animation is finished and its playback direction is reversed.
   */
  waitFor(event: WaitingAnimationEventName): Promise<BaseAnimationHandle<Args>>;
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

export interface AnimationOptions extends TypedKeyframeEffectOptions {}

const normalizeKeyframe = <Args>(
  el: Element,
  keyframe: TypedKeyframe | TypedKeyframe[] | GetKeyframeFunction<Args>,
  args: Args
): TypedKeyframe[] => {
  if (typeof keyframe === "function") {
    return keyframe(getStyle(el), args);
  }
  return toArray(keyframe);
};

class AnimationState {
  private _active:
    | {
        _animation: Animation;
        _keyframes: TypedKeyframe[];
        _options: AnimationOptions | undefined;
      }
    | undefined;

  _init(
    el: Element,
    keyframes: TypedKeyframe[],
    options: AnimationOptions | undefined
  ): Animation {
    if (this._active) {
      const {
        _animation: prevAnimation,
        _keyframes: prevKeyframes,
        _options: prevOptions,
      } = this._active;
      // Reuse animation if possible
      if (
        isSameObjectArray(keyframes, prevKeyframes) &&
        isSameObject(options, prevOptions)
      ) {
        return prevAnimation;
      }
      prevAnimation.cancel();
    }
    return (this._active = {
      _animation: createAnimation(el, keyframes as Keyframe[], options),
      _keyframes: keyframes,
      _options: options,
    })._animation;
  }

  _get() {
    return this._active?._animation;
  }

  _clear() {
    if (!this._active) return;
    this._active._animation.cancel();
    this._active = undefined;
  }
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

  type Handle = [AnimationHandle<Args>, () => void];
  const handleRef = useRef<Handle | undefined>();
  const [handle, cleanup] =
    handleRef.current ||
    (handleRef.current = ((): Handle => {
      let target: Element | null = null;
      const state = new AnimationState();

      const externalHandle: AnimationHandle<Args> = assign(
        (ref: Element | null) => {
          if (!(target = ref)) {
            state._clear();
          }
        },
        <BaseAnimationHandle<Args>>{
          play: (...opts) => {
            if (!target) return externalHandle;
            const keyframes = normalizeKeyframe(
              target,
              keyframeRef.current,
              ((opts[0] || {}) as { args?: Args }).args!
            );
            _play(state._init(target, keyframes, optionsRef.current), opts[0]);
            return externalHandle;
          },
          reverse: () => {
            _reverse(state._get());
            return externalHandle;
          },
          cancel: () => {
            _cancel(state._get());
            return externalHandle;
          },
          finish: () => {
            _finish(state._get());
            return externalHandle;
          },
          pause: () => {
            _pause(state._get());
            return externalHandle;
          },
          setTime: (time) => {
            let animation = state._get();
            if (!animation) {
              if (!target || typeof keyframeRef.current === "function") {
                return externalHandle;
              }
              // Init animation in setTime to start animation without calling play
              const keyframes = normalizeKeyframe(
                target,
                keyframeRef.current,
                undefined
              );
              animation = state._init(target, keyframes, optionsRef.current);
            }
            _setTime(animation, time);
            return externalHandle;
          },
          setPlaybackRate: (rate) => {
            _setRate(state._get(), rate);
            return externalHandle;
          },
          waitFor: (event) =>
            _waitFor(state._get(), event).then(() => externalHandle),
        }
      );

      return [
        externalHandle,
        () => {
          state._clear();
        },
      ];
    })());

  useIsomorphicLayoutEffect(() => {
    keyframeRef.current = keyframe;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return handle;
};
