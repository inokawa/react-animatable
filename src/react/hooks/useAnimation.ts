import { useEffect } from "react";
import { assign, getStyle, toArray } from "../../core/utils";
import {
  PlayOptions,
  _cancel,
  _waitFor,
  _finish,
  _pause,
  _play,
  _reverse,
  _setRate,
  _setTime,
  WaitingAnimationEventName,
  TypedKeyframe,
  GetKeyframeFunction,
} from "../../core/waapi";
import { useStatic } from "./useStatic";
import { useLatestRef } from "./useLatestRef";
import { AnimationDefinition } from "../types";
import {
  deleteAnimation,
  getAnimation,
  AnimationObject,
  initAnimation,
} from "./state";

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

/**
 * A basic hook to use Web Animations API. See {@link AnimationHandle}.
 * @typeParam Args - argument type
 */
export const useAnimation = <Args = void>(
  ...args: AnimationDefinition<Args>
): AnimationHandle<Args> => {
  const argsRef = useLatestRef(args);

  const [handle, mount] = useStatic(
    (): [AnimationHandle<Args>, () => () => void] => {
      let _target: Element | null = null;
      let _active: AnimationObject | undefined;

      const init = (args: Args) => {
        if (!_target) return;
        const [keyframe, options] = argsRef.current;
        const prevActive = _active;

        return initAnimation(
          _target,
          (_active = {
            _keyframes: normalizeKeyframe(_target, keyframe, args),
            _options: options,
          }),
          prevActive
        );
      };
      const clean = () => {
        if (_active) {
          deleteAnimation(_active);
        }
      };

      const externalHandle: AnimationHandle<Args> = assign(
        (ref: Element | null) => {
          if (!(_target = ref)) {
            clean();
          }
        },
        <BaseAnimationHandle<Args>>{
          play: (...opts) => {
            const animation = init(((opts[0] || {}) as { args?: Args }).args!);
            if (animation) {
              _play(animation);
            }
            return externalHandle;
          },
          reverse: () => {
            if (_active) {
              _reverse(getAnimation(_active));
            }
            return externalHandle;
          },
          cancel: () => {
            if (_active) {
              _cancel(getAnimation(_active));
            }
            return externalHandle;
          },
          finish: () => {
            if (_active) {
              _finish(getAnimation(_active));
            }
            return externalHandle;
          },
          pause: () => {
            if (_active) {
              _pause(getAnimation(_active));
            }
            return externalHandle;
          },
          setTime: (time) => {
            let animation = _active && getAnimation(_active);
            if (!animation) {
              const [keyframe] = argsRef.current;
              if (typeof keyframe === "function") {
                return externalHandle;
              }
              // Init animation in setTime to start animation without calling play
              animation = init(undefined!);
            }
            _setTime(animation, time);

            return externalHandle;
          },
          setPlaybackRate: (rate) => {
            if (_active) {
              _setRate(getAnimation(_active), rate);
            }
            return externalHandle;
          },
          waitFor: (event) => {
            return _waitFor(_active && getAnimation(_active), event).then(
              () => externalHandle
            );
          },
        }
      );

      return [externalHandle, () => clean];
    }
  );

  useEffect(mount, []);

  return handle;
};
