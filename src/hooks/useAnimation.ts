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
            HTMLElement,
            Animation,
            TypedKeyframe[],
            AnimationOptions | undefined
          ]
        | undefined;
      const handle = createHandle((kf, options) => {
        const el = getTarget();
        if (!el) return;
        const keyframes = Array.isArray(kf) ? kf : [kf];
        if (cache) {
          const [prevEl, prevAnimation, prevKeyframes, prevOptions] = cache;
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
        cache = [el, animation, keyframes, options];
        return animation;
      });

      const externalHandle: WithRef<AnimationHandle> = {
        play: () => {
          handle._play(getKeyframes(), getOptions());
          return externalHandle;
        },
        replay: () => {
          handle._replay(getKeyframes(), getOptions());
          return externalHandle;
        },
        reverse: () => {
          handle._reverse(getKeyframes(), getOptions());
          return externalHandle;
        },
        cancel: handle._cancel,
        finish: handle._finish,
        pause: handle._pause,
        commit: handle._commit,
        setTime: handle._setTime,
        setPlaybackRate: handle._setRate,
        end: handle._end,
        ref,
      };
      return [
        externalHandle,
        () => {
          handle._cancel();
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
