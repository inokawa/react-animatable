import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  getKeys,
  isArray,
  isSameObject,
  isSameObjectArray,
  uniqBy,
} from "../utils";
import {
  AnimationOptions,
  createAnimation,
  createHandle,
  TypedKeyframe,
} from "./core";
import type { WithRef } from "./useAnimation";

export type AnimationsHandle<ID extends string> = {
  play: (name: ID) => AnimationsHandle<ID>;
  replay: (name: ID) => AnimationsHandle<ID>;
  reverse: (name: ID) => AnimationsHandle<ID>;
  cancel: (name: ID) => AnimationsHandle<ID>;
  finish: (name: ID) => AnimationsHandle<ID>;
  pause: (name: ID) => AnimationsHandle<ID>;
  commit: (name: ID) => AnimationsHandle<ID>;
  setTime: (name: ID, time: number) => AnimationsHandle<ID>;
  setPlaybackRate: (
    name: ID,
    rate: number | ((prevRate: number) => number)
  ) => AnimationsHandle<ID>;
  cancelAll: () => AnimationsHandle<ID>;
  end: (name: ID) => Promise<void>;
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
      const keyframes = isArray(kf) ? kf : [kf];
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
      cancel: (name) => {
        handle._cancel(getAnimation(name));
        return externalHandle;
      },
      finish: (name) => {
        handle._finish(getAnimation(name));
        return externalHandle;
      },
      pause: (name) => {
        handle._pause(getAnimation(name));
        return externalHandle;
      },
      commit: (name) => {
        handle._commit(
          getAnimation(name),
          getTarget()!,
          uniqBy(getKeys(getKeyframesAndOptions(name)[0]))
        );
        return externalHandle;
      },
      setTime: (name, time) => {
        handle._setTime(getAnimation(name), time);
        return externalHandle;
      },
      setPlaybackRate: (name, rate) => {
        handle._setRate(getAnimation(name), rate);
        return externalHandle;
      },
      cancelAll: () => {
        cache.forEach(([a]) => {
          handle._cancel(a);
        });
        return externalHandle;
      },
      end: (name) => handle._end(getAnimation(name)),
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
