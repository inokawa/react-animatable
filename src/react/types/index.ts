import {
  GetKeyframeFunction,
  TypedKeyframe,
  TypedKeyframeEffectOptions,
} from "../../core";

export interface AnimationOptions extends TypedKeyframeEffectOptions {
  /**
   * If true, run animation automatically when keyframe or options changes.
   */
  autoPlay?: boolean;
}

export type AnimationDefinition<Args> = [
  keyframe: TypedKeyframe | TypedKeyframe[] | GetKeyframeFunction<Args>,
  options?: AnimationOptions
];
