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
            ._play(getKeyframes(), getOptions())
            .then(() => externalHandle);
        },
        replay: () => {
          return handle
            ._replay(getKeyframes(), getOptions())
            .then(() => externalHandle);
        },
        reverse: () => {
          return handle
            ._reverse(getKeyframes(), getOptions())
            .then(() => externalHandle);
        },
        cancel: handle._cancel,
        finish: handle._finish,
        pause: handle._pause,
        setTime: handle._setTime,
        setPlaybackRate: handle._setRate,
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
