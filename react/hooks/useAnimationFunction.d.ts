import { TypedKeyframeEffectOptions } from '../../core/waapi.js';
import { BaseAnimationHandle } from './useAnimation.js';
/**
 * Handle of {@link useAnimationFunction}.
 * @typeParam Args - argument type
 */
export interface AnimationFunctionHandle<Args = void> extends BaseAnimationHandle<Args> {
}
export interface AnimationFunctionOptions extends TypedKeyframeEffectOptions {
}
/**
 * Non nullable [ComputedEffectTiming](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming)
 */
export type ComputedTimingContext = Required<{
    [key in keyof ComputedEffectTiming]: NonNullable<ComputedEffectTiming[key]>;
}>;
/**
 * An argument of {@link useAnimationFunction}.
 * In this callback you can update any state or ref in JS.
 * - `ctx`: current animation state
 * - `args`: any argument passed from play
 */
export type AnimationFunction<Args = void> = Args extends void ? (ctx: ComputedTimingContext) => void : (ctx: ComputedTimingContext, args: Args) => void;
/**
 * Same as {@link useAnimation}, but it drives function not React element. See {@link AnimationFunctionHandle}.
 * @typeParam Args - argument type
 */
export declare const useAnimationFunction: <Args = void>(onUpdate: AnimationFunction<Args>, options?: AnimationFunctionOptions) => AnimationFunctionHandle<Args>;
