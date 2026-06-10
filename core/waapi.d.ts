import { CSSProperties } from '../../node_modules/react';
export type AnimatableCSSProperties = Omit<CSSProperties, "offset" | "float"> & {
    cssOffset?: CSSProperties["offset"];
    cssFloat?: CSSProperties["float"];
    d?: string;
};
/**
 * Strictly typed [Keyframe](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)
 */
export type TypedKeyframe = Pick<Keyframe, "composite" | "easing" | "offset"> & {
    [key: `--${string}`]: string | number;
} & AnimatableCSSProperties;
export type TypedEasing = Exclude<CSSProperties["animationTimingFunction"], CSSProperties["all"] | undefined>;
/**
 * A function to define keyframe dynamically
 * - `prev`: current style
 * - `args`: any argument passed from play
 */
export type GetKeyframeFunction<Args = void> = Args extends void ? (prev: CSSStyleDeclaration) => TypedKeyframe[] : (prev: CSSStyleDeclaration, args: Args) => TypedKeyframe[];
/**
 * Extended [options of KeyframeEffect](https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect)
 */
export interface TypedKeyframeEffectOptions extends Omit<KeyframeEffectOptions, "easing"> {
    easing?: TypedEasing;
}
export type PlayOptions = {
    /**
     * If true, plays from the start. It's similar to GSAP's `restart()`.
     */
    restart?: boolean;
};
export type WaitingAnimationEventName = "finish" | "reverseFinish";
