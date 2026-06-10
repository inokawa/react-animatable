import { GetKeyframeFunction, TypedKeyframe, TypedKeyframeEffectOptions } from '../../core/index.js';
export interface AnimationOptions extends TypedKeyframeEffectOptions {
    timeline?: TimelineDefinition;
}
export type AnimationDefinition<Args> = [
    keyframe: TypedKeyframe | TypedKeyframe[] | GetKeyframeFunction<Args>,
    options?: AnimationOptions
];
export interface TimelineDefinition {
    (el: Element | null): void;
}
export type ScrollTimelineAxis = "block" | "inline" | "y" | "x";
export type ViewTimelineInset = "auto" | (string & {});
