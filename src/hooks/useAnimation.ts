import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
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

      const getKeyframes = () => keyframeRef.current;
      const getOptions = () => optionsRef.current;

      const handle = createHandle(buildAnimationInitializer(() => ref.current));
      const externalHandle: WithRef<AnimationHandle> = {
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
        ref,
      };
      return [
        externalHandle,
        () => {
          handle.cancel();
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
