import { useEffect, useRef, useState } from "react";
import {
  assign,
  getStyle,
  isSameObject,
  isSameObjectArray,
  toArray,
} from "../../core/utils";
import {
  AnimationOptions,
  createAnimation,
  PlayOptions,
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

export type AnimationHandle = {
  (ref: Element | null): void;
  play: (opts?: PlayOptions) => AnimationHandle;
  reverse: () => AnimationHandle;
  cancel: () => AnimationHandle;
  finish: () => AnimationHandle;
  pause: () => AnimationHandle;
  setTime: (time: number) => AnimationHandle;
  setPlaybackRate: (
    rate: number | ((prevRate: number) => number)
  ) => AnimationHandle;
  end: () => Promise<AnimationHandle>;
};

export const useAnimation = (
  keyframe:
    | TypedKeyframe
    | TypedKeyframe[]
    | ((prev: CSSStyleDeclaration) => TypedKeyframe[]),
  options?: AnimationOptions
): AnimationHandle => {
  const keyframeRef = useRef(keyframe);
  const optionsRef = useRef(options);

  const [animation, cleanup] = useState<[AnimationHandle, () => void]>(() => {
    let target: Element | null = null;

    const getTarget = () => target;
    const getKeyframes = () => {
      if (typeof keyframeRef.current === "function") {
        return keyframeRef.current(getStyle(getTarget()!));
      }
      return toArray(keyframeRef.current);
    };
    const getOptions = () => optionsRef.current;

    let cache:
      | [
          animation: Animation,
          el: Element,
          keyframes: TypedKeyframe[],
          options: AnimationOptions | undefined
        ]
      | undefined;
    const initAnimation = (): Animation => {
      const keyframes = getKeyframes();
      const options = getOptions();
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

    const externalHandle: AnimationHandle = assign(
      (ref: Element | null) => {
        target = ref;
      },
      {
        play: (opts?: PlayOptions) => {
          _play(initAnimation(), opts);
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
  })[0];

  useIsomorphicLayoutEffect(() => {
    keyframeRef.current = keyframe;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return animation;
};
