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

    const cache = new Map<
      string,
      [HTMLElement, Animation, TypedKeyframe[], AnimationOptions | undefined]
    >();

    const handle = createHandle<ID, null>((name) => {
      const el = getTarget();
      if (!el) return;
      const [kf, options] = getKeyframesAndOptions(name);
      const keyframes = Array.isArray(kf) ? kf : [kf];
      if (cache.has(name)) {
        const [prevEl, prevAnimation, prevKeyframes, prevOptions] =
          cache.get(name)!;
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
      cache.set(name, [el, animation, keyframes, options]);
      return animation;
    });

    const externalHandle: WithRef<AnimationsHandle<ID>> = {
      play: (name) => {
        handle._play(name, null);
        return externalHandle;
      },
      replay: (name) => {
        handle._replay(name, null);
        return externalHandle;
      },
      reverse: (name) => {
        handle._reverse(name, null);
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
        cache.forEach(([, a]) => {
          a.cancel();
        });
      },
    ];
  })[0];

  useLayoutEffect(() => {
    definitionsRef.current = definitions;
  });

  useEffect(() => cleanup, []);

  return animation;
};
