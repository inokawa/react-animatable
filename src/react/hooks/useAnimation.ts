import { useEffect } from "react";
import { assign, getStyle, toArray } from "../../core/utils.js";
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
} from "../../core/waapi.js";
import { useStatic } from "./useStatic.js";
import { useLatestRef } from "./useLatestRef.js";
import { AnimationDefinition } from "../types/index.js";
import {
  deleteAnimation,
  getAnimation,
  AnimationObject,
  initAnimation,
} from "./state.js";

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
      let element: Element | null = null;
      let active: AnimationObject | undefined;

      const currentAnimation = () => active && getAnimation(active);
      const init = (args: Args) => {
        if (!element) return;
        const [keyframe, _options = {}] = argsRef.current;
        const { timeline, ...options } = _options;

        const prevActive = active;

        return initAnimation(
          element,
          (active = {
            _keyframes: normalizeKeyframe(element, keyframe, args),
            _options: options,
            _timeline: timeline?._get(),
          }),
          prevActive
        );
      };
      const clean = () => {
        if (active) {
          deleteAnimation(active);
        }
      };

      const externalHandle: AnimationHandle<Args> = assign(
        (ref: Element | null) => {
          if (!(element = ref)) {
            clean();
          }
        },
        {
          play: (...opts) => {
            const animation = init(((opts[0] || {}) as { args?: Args }).args!);
            if (animation) {
              _play(animation);
            }
            return externalHandle;
          },
          reverse: () => {
            const animation = currentAnimation();
            if (animation) {
              _reverse(animation);
            }
            return externalHandle;
          },
          cancel: () => {
            const animation = currentAnimation();
            if (animation) {
              _cancel(animation);
            }
            return externalHandle;
          },
          finish: () => {
            const animation = currentAnimation();
            if (animation) {
              _finish(animation);
            }
            return externalHandle;
          },
          pause: () => {
            const animation = currentAnimation();
            if (animation) {
              _pause(animation);
            }
            return externalHandle;
          },
          setTime: (time) => {
            let animation = currentAnimation();
            if (!animation) {
              const [keyframe] = argsRef.current;
              if (typeof keyframe === "function") {
                return externalHandle;
              }
              // Init animation in setTime to start animation without calling play
              animation = init(undefined!);
            }
            if (animation) {
              _setTime(animation, time);
            }

            return externalHandle;
          },
          setPlaybackRate: (rate) => {
            const animation = currentAnimation();
            if (animation) {
              _setRate(animation, rate);
            }
            return externalHandle;
          },
          waitFor: (event) => {
            const animation = currentAnimation();
            return _waitFor(animation, event).then(() => externalHandle);
          },
        } satisfies BaseAnimationHandle<Args>
      );

      return [externalHandle, () => clean];
    }
  );

  useEffect(mount, []);

  return handle;
};
