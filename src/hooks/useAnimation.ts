import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimationOptions,
  createAnimation,
  createHandle,
  isSameObject,
  isSameObjectArray,
  TypedKeyframe,
} from "./core";

export type AnimationHandle = {
  play: () => AnimationHandle;
  replay: () => AnimationHandle;
  reverse: () => AnimationHandle;
  cancel: () => void;
  finish: () => void;
  pause: () => void;
  commit: () => void;
  setTime: (time: number) => void;
  setPlaybackRate: (rate: number | ((prevRate: number) => number)) => void;
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
      const getKeyframes = () => keyframeRef.current;
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
        kf: TypedKeyframe | TypedKeyframe[],
        options: AnimationOptions | undefined
      ): Animation => {
        const el = getTarget()!;
        const keyframes = Array.isArray(kf) ? kf : [kf];
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
        cancel: () => handle._cancel(getAnimation()),
        finish: () => handle._finish(getAnimation()),
        pause: () => handle._pause(getAnimation()),
        commit: () => handle._commit(getAnimation()),
        setTime: (time) => handle._setTime(getAnimation(), time),
        setPlaybackRate: (rate) => handle._setRate(getAnimation(), rate),
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
