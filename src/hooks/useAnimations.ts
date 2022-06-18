import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimationOptions,
  buildAnimationInitializer,
  createHandle,
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

    const getKeyframesAndOptions = (
      name: ID
    ): [TypedKeyframe | TypedKeyframe[], (AnimationOptions | undefined)?] => {
      return definitionsRef.current[name] || [[], undefined];
    };

    const handle = createHandle(buildAnimationInitializer(() => ref.current));
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
