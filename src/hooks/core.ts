export type AnimatableCSSProperties<
  P = Omit<React.CSSProperties, "offset" | "float"> & {
    cssOffset?: React.CSSProperties["offset"];
    cssFloat?: React.CSSProperties["float"];
    // CSS Motion Path for SVG
    d?: string;
  }
> = {
  [K in keyof P]: Exclude<P[K], number>;
};

export type TypedKeyframe = Pick<Keyframe, "composite" | "easing" | "offset"> &
  AnimatableCSSProperties;

export interface AnimationOptions
  extends Omit<KeyframeEffectOptions, "easing"> {
  easing?:
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | `cubic-bezier(${string})`;
}

export const isSameObject = (
  target: object = {},
  prev: object = {}
): boolean => {
  const keys = Object.keys(target);
  if (keys.length !== Object.keys(prev).length) return false;
  return keys.every((k) => (target as any)[k] === (prev as any)[k]);
};

const isSameObjectArray = (target: object[], prev: object[]): boolean => {
  if (target.length !== prev.length) return false;
  return target.every((t, i) => isSameObject(t, prev[i]));
};

export const createAnimation = (
  el: HTMLElement | null,
  keyframes: Keyframe[] | null,
  options: AnimationOptions | undefined
): Animation => {
  const effect = new KeyframeEffect(el, keyframes, {
    fill: "forwards",
    ...options,
  });
  return new Animation(effect);
};

export const buildAnimationInitializer = (
  getTarget: () => HTMLElement | null
): ((
  keyframes: TypedKeyframe | TypedKeyframe[],
  options: AnimationOptions | undefined
) => Animation | undefined) => {
  let cache:
    | [HTMLElement, Animation, TypedKeyframe[], AnimationOptions | undefined]
    | undefined;

  return (kf, options) => {
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
  };
};

export const createHandle = (
  initAnimations: (
    keyframes: TypedKeyframe | TypedKeyframe[],
    options: AnimationOptions | undefined
  ) => Animation | undefined
) => {
  let animation: Animation | undefined;

  const handle = {
    _play: (
      keyframes: TypedKeyframe | TypedKeyframe[],
      options: AnimationOptions | undefined
    ) => {
      animation = initAnimations(keyframes, options);
      if (!animation) return Promise.resolve();
      animation.play();
      return animation.finished;
    },
    _replay: (
      keyframes: TypedKeyframe | TypedKeyframe[],
      options: AnimationOptions | undefined
    ) => {
      animation = initAnimations(keyframes, options);
      if (!animation) return Promise.resolve();
      animation.currentTime = 0;
      animation.play();
      return animation.finished;
    },
    _reverse: (
      keyframes: TypedKeyframe | TypedKeyframe[],
      options: AnimationOptions | undefined
    ) => {
      animation = initAnimations(keyframes, options);
      if (!animation) return Promise.resolve();
      animation.reverse();
      return animation.finished;
    },
    _cancel: () => {
      if (!animation) return;
      animation.cancel();
    },
    _finish: () => {
      if (!animation) return;
      animation.finish();
    },
    _pause: () => {
      if (!animation) return;
      animation.pause();
    },
    _setTime: (time: number) => {
      if (!animation) return;
      animation.currentTime = time;
    },
    _setRate: (arg: number | ((prevRate: number) => number)) => {
      if (!animation) return;
      animation.updatePlaybackRate(
        typeof arg === "function" ? arg(animation.playbackRate) : arg
      );
    },
  };
  return handle;
};
