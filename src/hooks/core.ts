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

export const isSameObject = (target: object = {}, prev: object = {}): boolean => {
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
  getTargets: () => HTMLElement[]
): ((
  keyframes: TypedKeyframe | TypedKeyframe[],
  options: AnimationOptions | undefined
) => Animation[]) => {
  const cache = new WeakMap<
    HTMLElement,
    [Animation, TypedKeyframe[], AnimationOptions | undefined]
  >();

  return (kf, options) => {
    const keyframes = Array.isArray(kf) ? kf : [kf];
    return getTargets().map((el) => {
      if (cache.has(el)) {
        const [prevAnimation, prevKeyframes, prevOptions] = cache.get(el)!;
        if (
          isSameObjectArray(keyframes, prevKeyframes) &&
          isSameObject(options, prevOptions)
        ) {
          return prevAnimation;
        }
        prevAnimation.cancel();
      }
      const animation = createAnimation(el, keyframes as Keyframe[], options);
      cache.set(el, [animation, keyframes, options]);
      return animation;
    });
  };
};

export const createHandle = (
  initAnimations: (
    keyframes: TypedKeyframe | TypedKeyframe[],
    options: AnimationOptions | undefined
  ) => Animation[]
) => {
  let animations: Animation[] = [];

  const handle = {
    play: (
      keyframes: TypedKeyframe | TypedKeyframe[],
      options: AnimationOptions | undefined
    ) => {
      animations = initAnimations(keyframes, options);
      animations.forEach((a) => a.play());
      return Promise.all(animations.map((a) => a.finished));
    },
    replay: (
      keyframes: TypedKeyframe | TypedKeyframe[],
      options: AnimationOptions | undefined
    ) => {
      animations = initAnimations(keyframes, options);
      animations.forEach((a) => {
        a.currentTime = 0;
        a.play();
      });
      return Promise.all(animations.map((a) => a.finished));
    },
    reverse: (
      keyframes: TypedKeyframe | TypedKeyframe[],
      options: AnimationOptions | undefined
    ) => {
      animations = initAnimations(keyframes, options);
      animations.forEach((a) => a.reverse());
      return Promise.all(animations.map((a) => a.finished));
    },
    cancel: () => {
      animations.forEach((a) => a.cancel());
    },
    finish: () => {
      animations.forEach((a) => a.finish());
    },
    pause: () => {
      animations.forEach((a) => a.pause());
    },
    setTime: (time: number) => {
      animations.forEach((a) => {
        a.currentTime = time;
      });
    },
    setPlaybackRate: (arg: number | ((prevRate: number) => number)) => {
      animations.forEach((a) => {
        a.updatePlaybackRate(
          typeof arg === "function" ? arg(a.playbackRate) : arg
        );
      });
    },
  };
  return handle;
};
