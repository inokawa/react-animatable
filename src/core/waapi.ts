import type { CSSProperties } from "react";
import { getKeys, getStyle, noop, uniqBy } from "./utils";

export type AnimatableCSSProperties = Omit<
  CSSProperties,
  "offset" | "float"
> & {
  cssOffset?: CSSProperties["offset"];
  cssFloat?: CSSProperties["float"];
  // CSS Motion Path for SVG
  d?: string;
};

export type TypedKeyframe = Pick<Keyframe, "composite" | "easing" | "offset"> &
  AnimatableCSSProperties;

export type TypedEasing = NonNullable<
  Exclude<CSSProperties["animationTimingFunction"], CSSProperties["all"]>
>;

export interface AnimationOptions
  extends Omit<KeyframeEffectOptions, "easing"> {
  easing?: TypedEasing;
}

export const getKeyframeKeys = (keyframes: TypedKeyframe[]): string[] =>
  uniqBy(keyframes.flatMap(getKeys)).reduce((acc, k) => {
    if (["offset", "easing", "composite"].includes(k)) {
      // Ignore
    } else if (k === "cssFloat") {
      acc.push("float");
    } else if (k === "cssOffset") {
      acc.push("offset");
    } else {
      acc.push(k);
    }
    return acc;
  }, [] as string[]);

export const createAnimation = (
  el: Element | null,
  keyframes: Keyframe[] | null,
  options: AnimationOptions | undefined
): Animation => {
  const modifiedOptions: AnimationOptions = {
    fill: "both",
    ...options,
  };
  try {
    return new Animation(new KeyframeEffect(el, keyframes, modifiedOptions));
  } catch (e) {
    // Fallback to Element.animate()
    return el!.animate(keyframes, modifiedOptions);
  }
};

export type PlayOptions = { reset?: boolean };

export const _play = (animation: Animation, opts: PlayOptions = {}) => {
  if (opts.reset) {
    animation.currentTime = 0;
  }
  animation.play();
};
export const _reverse = (animation: Animation) => {
  animation.reverse();
};
export const _cancel = (animation: Animation | undefined) => {
  if (!animation) return;
  animation.cancel();
};
export const _finish = (animation: Animation | undefined) => {
  if (!animation) return;
  animation.finish();
};
export const _pause = (animation: Animation | undefined) => {
  if (!animation) return;
  animation.pause();
};
export const _persist = (
  animation: Animation | undefined,
  el: Element,
  keyframes: TypedKeyframe[]
) => {
  if (!animation) return;
  // https://www.w3.org/TR/web-animations-1/#fill-behavior
  if (animation.commitStyles) {
    animation.commitStyles();
  } else {
    // Fallback for commitStyles
    const computedStyle = getStyle(el);
    getKeyframeKeys(keyframes).forEach((k) => {
      ((el as HTMLElement).style as any)[k] = (computedStyle as any)[k];
    });
  }
  animation.cancel();
};
export const _setTime = (animation: Animation | undefined, time: number) => {
  if (!animation) return;
  animation.currentTime = time;
};
export const _setRate = (
  animation: Animation | undefined,
  arg: number | ((prevRate: number) => number)
) => {
  if (!animation) return;
  animation.updatePlaybackRate(
    typeof arg === "function" ? arg(animation.playbackRate) : arg
  );
};
export const _end = (animation: Animation | undefined) => {
  if (!animation) return Promise.resolve();
  return animation.finished.then(noop);
};
