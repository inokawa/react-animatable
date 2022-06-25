import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { isSameObject, isSameObjectArray, toArray } from "../utils";
import {
  AnimationOptions,
  createAnimation,
  createHandle,
  TypedKeyframe,
} from "./core";

export type AnimationHandle = {
  play: () => AnimationHandle;
  replay: () => AnimationHandle;
  reverse: () => AnimationHandle;
  cancel: () => AnimationHandle;
  finish: () => AnimationHandle;
  pause: () => AnimationHandle;
  commit: () => AnimationHandle;
  setTime: (time: number) => AnimationHandle;
  setPlaybackRate: (
    rate: number | ((prevRate: number) => number)
  ) => AnimationHandle;
  end: () => Promise<void>;
};
export type WithRef<T> = T & { ref: React.RefObject<any> };

export const useAnimation = (
  keyframe: TypedKeyframe | TypedKeyframe[],
  options?: AnimationOptions
): WithRef<AnimationHandle> => {
  const keyframeRef = useRef(keyframe);
  const optionsRef = useRef(options);

  const [animation, cleanup] = useState<[WithRef<AnimationHandle>, () => void]>(
    () => {
      const ref = createRef<HTMLElement>();

      const getTarget = () => ref.current;
      const getKeyframes = () => toArray(keyframeRef.current);
      const getOptions = () => optionsRef.current;

      let cache:
        | [
            Animation,
            HTMLElement,
            TypedKeyframe[],
            AnimationOptions | undefined
          ]
        | undefined;
      const initAnimation = (
        keyframes: TypedKeyframe[],
        options: AnimationOptions | undefined
      ): Animation => {
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
      const handle = createHandle();

      const externalHandle: WithRef<AnimationHandle> = {
        play: () => {
          handle._play(initAnimation(getKeyframes(), getOptions()));
          return externalHandle;
        },
        replay: () => {
          handle._replay(initAnimation(getKeyframes(), getOptions()));
          return externalHandle;
        },
        reverse: () => {
          handle._reverse(initAnimation(getKeyframes(), getOptions()));
          return externalHandle;
        },
        cancel: () => {
          handle._cancel(getAnimation());
          return externalHandle;
        },
        finish: () => {
          handle._finish(getAnimation());
          return externalHandle;
        },
        pause: () => {
          handle._pause(getAnimation());
          return externalHandle;
        },
        commit: () => {
          handle._commit(getAnimation(), getTarget()!, getKeyframes());
          return externalHandle;
        },
        setTime: (time) => {
          handle._setTime(getAnimation(), time);
          return externalHandle;
        },
        setPlaybackRate: (rate) => {
          handle._setRate(getAnimation(), rate);
          return externalHandle;
        },
        end: () => handle._end(getAnimation()),
        ref,
      };
      return [
        externalHandle,
        () => {
          handle._cancel(getAnimation());
        },
      ];
    }
  )[0];

  useLayoutEffect(() => {
    keyframeRef.current = keyframe;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return animation;
};
