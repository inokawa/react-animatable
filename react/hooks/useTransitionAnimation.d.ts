import { TypedKeyframeEffectOptions, GetKeyframeFunction, TypedKeyframe } from '../../core/index.js';
export interface TransitionAnimationHandle {
    (ref: Element | null): void;
}
export interface TransitionAnimationOptions extends TypedKeyframeEffectOptions {
}
export type TransitionAnimationDefinition = [
    keyframe: TypedKeyframe | TypedKeyframe[] | GetKeyframeFunction,
    options?: TransitionAnimationOptions
];
/**
 *
 * A hook to compose multiple {@link useAnimation} and plays them when element enter/update/exits.
 * This hook must be used under {@link TransitionGroup} component.
 */
export declare const useTransitionAnimation: (keyframes: {
    enter?: TransitionAnimationDefinition;
    update?: TransitionAnimationDefinition;
    exit?: TransitionAnimationDefinition;
}) => TransitionAnimationHandle;
