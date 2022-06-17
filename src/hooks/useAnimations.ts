import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createProxy, WithElements } from "../components/element";
import {
  AnimationOptions,
  buildAnimationInitializer,
  createHandle,
  TypedKeyframe,
} from "./core";

export type AnimationsHandle<ID extends string> = {
  play: (name: ID) => Promise<AnimationsHandle<ID>>;
  replay: (name: ID) => Promise<AnimationsHandle<ID>>;
  reverse: (name: ID) => Promise<AnimationsHandle<ID>>;
  cancel: () => void;
  finish: () => void;
  pause: () => void;
  setTime: (time: number) => void;
  setPlaybackRate: (rate: number | ((prevRate: number) => number)) => void;
};

export const useAnimations = <ID extends string>(
  definitions: {
    [key in ID]: [TypedKeyframe | TypedKeyframe[], AnimationOptions?];
  }
): WithElements<AnimationsHandle<ID>> => {
  const definitionsRef = useRef(definitions);

  const [animation, cleanup] = useState<
    [WithElements<AnimationsHandle<ID>>, () => void]
  >(() => {
    const targets = new Set<HTMLElement>();

    const getKeyframesAndOptions = (
      name: ID
    ): [TypedKeyframe | TypedKeyframe[], (AnimationOptions | undefined)?] => {
      return definitionsRef.current[name] || [[], undefined];
    };

    const handle = createHandle(
      buildAnimationInitializer(() => Array.from(targets))
    );
    const externalHandle: AnimationsHandle<ID> = {
      play: (name) => {
        const [kf, opts] = getKeyframesAndOptions(name);
        return handle.play(kf, opts).then(() => externalHandle);
      },
      replay: (name) => {
        const [kf, opts] = getKeyframesAndOptions(name);
        return handle.replay(kf, opts).then(() => externalHandle);
      },
      reverse: (name) => {
        const [kf, opts] = getKeyframesAndOptions(name);
        return handle.reverse(kf, opts).then(() => externalHandle);
      },
      cancel: handle.cancel,
      finish: handle.finish,
      pause: handle.pause,
      setTime: handle.setTime,
      setPlaybackRate: handle.setRate,
    };
    return [
      createProxy(externalHandle, targets),
      () => {
        handle.cancel();
        targets.clear();
      },
    ];
  })[0];

  useLayoutEffect(() => {
    definitionsRef.current = definitions;
  });

  useEffect(() => cleanup, []);

  return animation;
};
