export type AnimatableCSSProperties = Omit<
  React.CSSProperties,
  "offset" | "float"
> & {
  cssOffset?: React.CSSProperties["offset"];
  cssFloat?: React.CSSProperties["float"];
  // CSS Motion Path for SVG
  d?: string;
};

export type TypedKeyframe = Pick<Keyframe, "composite" | "easing" | "offset"> &
  AnimatableCSSProperties;

export type TypedEasing = NonNullable<
  Exclude<
    React.CSSProperties["animationTimingFunction"],
    React.CSSProperties["all"]
  >
>;

export interface AnimationOptions
  extends Omit<KeyframeEffectOptions, "easing"> {
  easing?: TypedEasing;
}

export const isSameObject = (
  target: object = {},
  prev: object = {}
): boolean => {
  const keys = Object.keys(target);
  if (keys.length !== Object.keys(prev).length) return false;
  return keys.every((k) => (target as any)[k] === (prev as any)[k]);
};

export const isSameObjectArray = (
  target: object[],
  prev: object[]
): boolean => {
  if (target.length !== prev.length) return false;
  return target.every((t, i) => isSameObject(t, prev[i]));
};

export const createAnimation = (
  el: HTMLElement | null,
  keyframes: Keyframe[] | null,
  options: AnimationOptions | undefined
): Animation => {
  const modifiedOptions: AnimationOptions = {
    fill: "forwards",
    ...options,
  };
  let effect: KeyframeEffect;
  try {
    effect = new KeyframeEffect(el, keyframes, modifiedOptions);
  } catch (e) {
    // Fallback to Element.animate()
    return el!.animate(keyframes, modifiedOptions);
  }
  return new Animation(effect);
};

export const createHandle = <T = never, U = never>(
  initAnimations: (arg0: T, arg1: U) => Animation | undefined
) => {
  let animation: Animation | undefined;

  const handle = {
    _play: (arg0: T, arg1: U) => {
      animation = initAnimations(arg0, arg1);
      if (!animation) return;
      animation.play();
    },
    _replay: (arg0: T, arg1: U) => {
      animation = initAnimations(arg0, arg1);
      if (!animation) return;
      animation.currentTime = 0;
      animation.play();
    },
    _reverse: (arg0: T, arg1: U) => {
      animation = initAnimations(arg0, arg1);
      if (!animation) return;
      animation.reverse();
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
    _commit: () => {
      if (!animation) return;
      animation.commitStyles?.();
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
    _end: () => {
      if (!animation) return Promise.resolve();
      return animation.finished.then(() => {});
    },
  };
  return handle;
};
