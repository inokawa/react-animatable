import {
  GetKeyframeFunction,
  TypedKeyframe,
  TypedKeyframeEffectOptions,
} from "../../core";
import { SCROLL_TIMELINE, VIEW_TIMELINE } from "./internal";

export interface AnimationOptions extends TypedKeyframeEffectOptions {
  timeline?: TimelineDefinition;
}

export type AnimationDefinition<Args> = [
  keyframe: TypedKeyframe | TypedKeyframe[] | GetKeyframeFunction<Args>,
  options?: AnimationOptions
];

export interface TimelineDefinition {
  (el: Element | null): void;
  /**
   * @private
   */
  _type: typeof SCROLL_TIMELINE | typeof VIEW_TIMELINE;
  /**
   * @private
   */
  _get: () => AnimationTimeline;
}

export type ScrollTimelineAxis = "block" | "inline" | "y" | "x";

export type ViewTimelineInset = "auto" | (string & {});
