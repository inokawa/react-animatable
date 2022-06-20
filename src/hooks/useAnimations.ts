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
  cancel: (name: ID) => void;
  finish: (name: ID) => void;
  pause: (name: ID) => void;
  commit: (name: ID) => void;
  setTime: (name: ID, time: number) => void;
  setPlaybackRate: (
    name: ID,
    rate: number | ((prevRate: number) => number)
  ) => void;
  end: (name: ID) => Promise<void>;
  cancelAll: () => void;
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
      [Animation, HTMLElement, TypedKeyframe[], AnimationOptions | undefined]
    >();
    const initAnimation = (name: ID): Animation => {
      const el = getTarget()!;
      const [kf, options] = getKeyframesAndOptions(name);
      const keyframes = Array.isArray(kf) ? kf : [kf];
      if (cache.has(name)) {
        const [prevAnimation, prevEl, prevKeyframes, prevOptions] =
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
      cache.set(name, [animation, el, keyframes, options]);
      return animation;
    };
    const getAnimation = (name: ID) => cache.get(name)?.[0];
    const handle = createHandle();

    const externalHandle: WithRef<AnimationsHandle<ID>> = {
      play: (name) => {
        handle._play(initAnimation(name));
        return externalHandle;
      },
      replay: (name) => {
        handle._replay(initAnimation(name));
        return externalHandle;
      },
      reverse: (name) => {
        handle._reverse(initAnimation(name));
        return externalHandle;
      },
      cancel: (name) => handle._cancel(getAnimation(name)),
      finish: (name) => handle._finish(getAnimation(name)),
      pause: (name) => handle._pause(getAnimation(name)),
      commit: (name) => handle._commit(getAnimation(name)),
      setTime: (name, time) => handle._setTime(getAnimation(name), time),
      setPlaybackRate: (name, rate) =>
        handle._setRate(getAnimation(name), rate),
      end: (name) => handle._end(getAnimation(name)),
      cancelAll: () => {
        cache.forEach(([a]) => {
          handle._cancel(a);
        });
      },
      ref,
    };
    return [
      externalHandle,
      () => {
        externalHandle.cancelAll();
      },
    ];
  })[0];

  useLayoutEffect(() => {
    definitionsRef.current = definitions;
  });

  useEffect(() => cleanup, []);

  return animation;
};
