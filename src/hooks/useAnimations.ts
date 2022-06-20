import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimationOptions,
  createAnimation,
  createHandle,
  isSameObject,
  isSameObjectArray,
  TypedKeyframe,
} from "./core";
import type { WithRef } from "./useAnimation";

export type AnimationsHandle<ID extends string> = {
  play: (name: ID) => AnimationsHandle<ID>;
  replay: (name: ID) => AnimationsHandle<ID>;
  reverse: (name: ID) => AnimationsHandle<ID>;
  cancel: () => void;
  finish: () => void;
  pause: () => void;
  commit: () => void;
  setTime: (time: number) => void;
  setPlaybackRate: (rate: number | ((prevRate: number) => number)) => void;
  end: () => Promise<void>;
};

export const useAnimations = <ID extends string>(
  definitions: {
    [key in ID]: [TypedKeyframe | TypedKeyframe[], AnimationOptions?];
  }
): WithRef<AnimationsHandle<ID>> => {
  const definitionsRef = useRef(definitions);

  const [animation, cleanup] = useState<
    [WithRef<AnimationsHandle<ID>>, () => void]
  >(() => {
    const ref = createRef<HTMLElement>();

    const getTarget = () => ref.current;
    const getKeyframesAndOptions = (
      name: ID
    ): [TypedKeyframe | TypedKeyframe[], (AnimationOptions | undefined)?] => {
      return definitionsRef.current[name] || [[], undefined];
    };

    let cache:
      | [HTMLElement, Animation, TypedKeyframe[], AnimationOptions | undefined]
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

    const externalHandle: WithRef<AnimationsHandle<ID>> = {
      play: (name) => {
        const [kf, opts] = getKeyframesAndOptions(name);
        handle._play(kf, opts);
        return externalHandle;
      },
      replay: (name) => {
        const [kf, opts] = getKeyframesAndOptions(name);
        handle._replay(kf, opts);
        return externalHandle;
      },
      reverse: (name) => {
        const [kf, opts] = getKeyframesAndOptions(name);
        handle._reverse(kf, opts);
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
  })[0];

  useLayoutEffect(() => {
    definitionsRef.current = definitions;
  });

  useEffect(() => cleanup, []);

  return animation;
};
