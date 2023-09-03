import {
  GetKeyframeFunction,
  TypedKeyframe,
  TypedKeyframeEffectOptions,
} from "../../core";

export interface AnimationOptions extends TypedKeyframeEffectOptions {}

export type AnimationDefinition<Args> = [
  keyframe: TypedKeyframe | TypedKeyframe[] | GetKeyframeFunction<Args>,
  options?: AnimationOptions
];
