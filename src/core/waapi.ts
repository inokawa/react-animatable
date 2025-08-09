import type { CSSProperties } from "react";
import { getKeys, uniq } from "./utils";

export type AnimatableCSSProperties = Omit<
  CSSProperties,
  "offset" | "float"
> & {
  cssOffset?: CSSProperties["offset"];
  cssFloat?: CSSProperties["float"];
  // CSS Motion Path for SVG
  d?: string;
};

/**
 * Strictly typed [Keyframe](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)
 */
export type TypedKeyframe = Pick<
  Keyframe,
  "composite" | "easing" | "offset"
> & { [key: `--${string}`]: string | number } & AnimatableCSSProperties;

export type TypedEasing = Exclude<
  CSSProperties["animationTimingFunction"],
  CSSProperties["all"] | undefined
>;

/**
 * A function to define keyframe dynamically
 * - `prev`: current style
 * - `args`: any argument passed from play
 */
export type GetKeyframeFunction<Args = void> = Args extends void
  ? (prev: CSSStyleDeclaration) => TypedKeyframe[]
  : (prev: CSSStyleDeclaration, args: Args) => TypedKeyframe[];

/**
 * Extended [options of KeyframeEffect](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect)
 */
export interface TypedKeyframeEffectOptions
  extends Omit<KeyframeEffectOptions, "easing"> {
  easing?: TypedEasing;
}

/**
 * @internal
 */
export const getKeyframeKeys = (keyframes: TypedKeyframe[]): string[] =>
  uniq(keyframes.flatMap(getKeys)).reduce((acc, k) => {
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

/**
 * @internal
 */
export const createAnimation = (
  el: Element | null,
  keyframes: Keyframe[] | null,
  options: KeyframeEffectOptions | undefined,
  timeline?: AnimationTimeline
): Animation => {
  const modifiedOptions: KeyframeEffectOptions = {
    fill: "both",
    ...options,
  };
  try {
    return new Animation(
      new KeyframeEffect(el, keyframes, modifiedOptions),
      timeline
    );
  } catch (e) {
    // Fallback to Element.animate()
    return el!.animate(keyframes, modifiedOptions);
  }
};

export type PlayOptions = {
  /**
   * If true, plays from the start. It's similar to GSAP's `restart()`.
   */
  restart?: boolean;
};

/**
 * @internal
 */
export const _play = (animation: Animation, opts: PlayOptions = {}) => {
  // Reset reversed playback direction if completed
  if (animation.playbackRate < 0 && animation.playState === "finished") {
    _setRate(animation, (p) => -p);
  }
  if (opts.restart) {
    _setTime(animation, 0);
  }
  animation.play();
};

/**
 * @internal
 */
export const _reverse = (animation: Animation) => {
  animation.reverse();
};

/**
 * @internal
 */
export const _cancel = (animation: Animation) => {
  animation.cancel();
};

/**
 * @internal
 */
export const _finish = (animation: Animation) => {
  animation.finish();
};

/**
 * @internal
 */
export const _pause = (animation: Animation) => {
  animation.pause();
};
// /**
//  * @internal
//  */
// export const _persist = (
//   animation: Animation | undefined,
//   el: Element,
//   keyframes: TypedKeyframe[]
// ) => {
//   if (!animation) return;
//   // https://www.w3.org/TR/web-animations-1/#fill-behavior
//   if (animation.commitStyles) {
//     animation.commitStyles();
//   } else {
//     // Fallback for commitStyles
//     const computedStyle = getStyle(el);
//     getKeyframeKeys(keyframes).forEach((k) => {
//       ((el as HTMLElement).style as any)[k] = (computedStyle as any)[k];
//     });
//   }
//   animation.cancel();
// };
/**
 * @internal
 */
export const _setTime = (
  animation: Animation,
  arg: number | ((endTime: number) => number)
) => {
  animation.currentTime =
    typeof arg === "function"
      ? arg(animation.effect!.getComputedTiming().endTime! as number)
      : arg;
};

/**
 * @internal
 */
export const _setRate = (
  animation: Animation,
  arg: number | ((prevRate: number) => number)
) => {
  animation.updatePlaybackRate(
    typeof arg === "function" ? arg(animation.playbackRate) : arg
  );
};

export type WaitingAnimationEventName = "finish" | "reverseFinish";

/**
 * @internal
 */
export const _waitFor = (
  animation: Animation | undefined,
  name: WaitingAnimationEventName
): Promise<void> => {
  if (!animation) return Promise.resolve();

  return new Promise<void>((resolve) => {
    animation.onfinish = () => {
      if (
        (name === "finish" && animation.playbackRate > 0) ||
        (name === "reverseFinish" && animation.playbackRate < 0)
      ) {
        resolve();
      }
    };
  });
};
