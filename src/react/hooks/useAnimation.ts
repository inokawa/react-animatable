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
  _end,
  _finish,
  _pause,
  _play,
  _reverse,
  _setRate,
  _setTime,
} from "../../core/waapi";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

type PlayArgs<Args = void> = Args extends void
  ? [PlayOptions?]
  : [Expand<PlayOptions & (Args extends void ? {} : { args: Args })>];

type ReverseArgs<Args = void> = Args extends void
  ? [ReverseOptions?]
  : [Expand<ReverseOptions & (Args extends void ? {} : { args: Args })>];

export type AnimationHandle<Args = void> = {
  (ref: Element | null): void;
  play: (...opts: PlayArgs<Args>) => AnimationHandle<Args>;
  reverse: (...opts: ReverseArgs<Args>) => AnimationHandle<Args>;
  cancel: () => AnimationHandle<Args>;
  finish: () => AnimationHandle<Args>;
  pause: () => AnimationHandle<Args>;
  setTime: (time: number) => AnimationHandle<Args>;
  setPlaybackRate: (
    rate: number | ((prevRate: number) => number)
  ) => AnimationHandle<Args>;
  end: () => Promise<AnimationHandle<Args>>;
};

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
          if (
            el === prevEl &&
            isSameObjectArray(keyframes, prevKeyframes) &&
            isSameObject(options, prevOptions)
          ) {
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
          play: (...opts: PlayArgs<Args>) => {
            _play(initAnimation(opts[0] as { args?: Args }), opts[0]);
            return externalHandle;
          },
          reverse: (...opts: ReverseArgs<Args>) => {
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
          end: () => _end(getAnimation()).then(() => externalHandle),
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
