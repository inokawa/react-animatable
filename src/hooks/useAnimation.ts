import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createProxy, WithElements } from "../components/element";
import {
  AnimationOptions,
  buildAnimationInitializer,
  createHandle,
  TypedKeyframe,
} from "./core";

export type AnimationHandle = {
  play: () => Promise<AnimationHandle>;
  replay: () => Promise<AnimationHandle>;
  reverse: () => Promise<AnimationHandle>;
  cancel: () => void;
  finish: () => void;
  pause: () => void;
  setTime: (time: number) => void;
  setPlaybackRate: (rate: number | ((prevRate: number) => number)) => void;
};

export const useAnimation = (
  keyframe: TypedKeyframe | TypedKeyframe[],
  options?: AnimationOptions
): WithElements<AnimationHandle> => {
  const keyframeRef = useRef(keyframe);
  const optionsRef = useRef(options);

  const [animation, cleanup] = useState<
    [WithElements<AnimationHandle>, () => void]
  >(() => {
    const targets = new Set<HTMLElement>();
    const getKeyframes = () => keyframeRef.current;
    const getOptions = () => optionsRef.current;

    const handle = createHandle(
      buildAnimationInitializer(() => Array.from(targets))
    );
    const externalHandle: AnimationHandle = {
      play: () => {
        return handle
          .play(getKeyframes(), getOptions())
          .then(() => externalHandle);
      },
      replay: () => {
        return handle
          .replay(getKeyframes(), getOptions())
          .then(() => externalHandle);
      },
      reverse: () => {
        return handle
          .reverse(getKeyframes(), getOptions())
          .then(() => externalHandle);
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
    keyframeRef.current = keyframe;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return animation;
};
