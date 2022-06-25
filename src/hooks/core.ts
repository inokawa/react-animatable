import { getKeys, noop, uniqBy } from "../utils";

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

export const getKeyframeKeys = (keyframes: TypedKeyframe[]): string[] =>
  uniqBy(keyframes.flatMap((k) => getKeys(k)));

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

export const createHandle = () => {
  const handle = {
    _play: (animation: Animation) => {
      animation.play();
    },
    _replay: (animation: Animation) => {
      animation.currentTime = 0;
      animation.play();
    },
    _reverse: (animation: Animation) => {
      animation.reverse();
    },
    _cancel: (animation: Animation | undefined) => {
      if (!animation) return;
      animation.cancel();
    },
    _finish: (animation: Animation | undefined) => {
      if (!animation) return;
      animation.finish();
    },
    _pause: (animation: Animation | undefined) => {
      if (!animation) return;
      animation.pause();
    },
    _commit: (
      animation: Animation | undefined,
      el: HTMLElement,
      keyframes: TypedKeyframe[]
    ) => {
      if (!animation) return;
      if (animation.commitStyles) {
        animation.commitStyles();
        return;
      }
      // Fallback for commitStyles
      const computedStyle = getComputedStyle(el);
      getKeyframeKeys(keyframes).forEach((k) => {
        (el.style as any)[k] = (computedStyle as any)[k];
      });
    },
    _setTime: (animation: Animation | undefined, time: number) => {
      if (!animation) return;
      animation.currentTime = time;
    },
    _setRate: (
      animation: Animation | undefined,
      arg: number | ((prevRate: number) => number)
    ) => {
      if (!animation) return;
      animation.updatePlaybackRate(
        typeof arg === "function" ? arg(animation.playbackRate) : arg
      );
    },
    _end: (animation: Animation | undefined) => {
      if (!animation) return Promise.resolve();
      return animation.finished.then(noop);
    },
  };
  return handle;
};
