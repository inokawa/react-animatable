import {
  GetKeyframeFunction,
  TypedKeyframe,
  TypedKeyframeEffectOptions,
} from "../../core/index.js";
import { SCROLL_TIMELINE, VIEW_TIMELINE } from "./internal.js";

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
   * @internal
   */
  _type: typeof SCROLL_TIMELINE | typeof VIEW_TIMELINE;
  /**
   * @internal
   */
  _get: () => AnimationTimeline;
}

export type ScrollTimelineAxis = "block" | "inline" | "y" | "x";

export type ViewTimelineInset = "auto" | (string & {});
