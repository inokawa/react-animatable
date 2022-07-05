import {
  createRef,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { isSameObject, isSameObjectArray, toArray } from "../utils";
import {
  AnimationOptions,
  createAnimation,
  createHandle,
  PlayOptions,
  TypedKeyframe,
} from "./core";

export type AnimationHandle = {
  play: (opts?: PlayOptions) => AnimationHandle;
  reverse: () => AnimationHandle;
  cancel: () => AnimationHandle;
  finish: () => AnimationHandle;
  pause: () => AnimationHandle;
  persist: () => AnimationHandle;
  setTime: (time: number) => AnimationHandle;
  setPlaybackRate: (
    rate: number | ((prevRate: number) => number)
  ) => AnimationHandle;
  end: () => Promise<AnimationHandle>;
  ref: RefObject<any>;
};

export const useAnimation = (
  keyframe: TypedKeyframe | TypedKeyframe[],
  options?: AnimationOptions
): AnimationHandle => {
  const keyframeRef = useRef(keyframe);
  const optionsRef = useRef(options);

  const [animation, cleanup] = useState<[AnimationHandle, () => void]>(() => {
    const ref = createRef<HTMLElement>();

    const getTarget = () => ref.current;
    const getKeyframes = () => toArray(keyframeRef.current);
    const getOptions = () => optionsRef.current;

    let cache:
      | [
          animation: Animation,
          el: HTMLElement,
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
    const handle = createHandle();

    const cancel = () => {
      handle._cancel(getAnimation());
    };

    const externalHandle: AnimationHandle = {
      play: (opts) => {
        handle._play(initAnimation(), opts);
        return externalHandle;
      },
      reverse: () => {
        handle._reverse(initAnimation());
        return externalHandle;
      },
      cancel: () => {
        cancel();
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
      persist: () => {
        handle._persist(getAnimation(), getTarget()!, getKeyframes());
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
      end: () => handle._end(getAnimation()).then(() => externalHandle),
      ref,
    };
    return [
      externalHandle,
      () => {
        cancel();
      },
    ];
  })[0];

  useLayoutEffect(() => {
    keyframeRef.current = keyframe;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return animation;
};
