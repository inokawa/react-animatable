import { isSameObject, isSameObjectArray } from "../../core/utils";
import { createAnimation } from "../../core/waapi";

export interface AnimationObject {
  readonly _keyframes: Keyframe[];
  readonly _options: KeyframeEffectOptions | undefined;
  readonly _timeline: AnimationTimeline | undefined;
}

const animations = new WeakMap<AnimationObject, Animation>();

export const getAnimation = (target: AnimationObject) => animations.get(target);
export const deleteAnimation = (target: AnimationObject) => {
  getAnimation(target)?.cancel();
  animations.delete(target);
};

const isEqual = (a: AnimationObject, b: AnimationObject): boolean => {
  return (
    isSameObjectArray(a._keyframes, b._keyframes) &&
    isSameObject(a._options, b._options)
  );
};

export const initAnimation = (
  el: Element,
  target: AnimationObject,
  prevTarget: AnimationObject | undefined
): Animation => {
  const prevAnimation = prevTarget && getAnimation(prevTarget);

  if (prevAnimation) {
    animations.delete(prevTarget);

    // Reuse animation if possible
    if (isEqual(target, prevTarget)) {
      animations.set(target, prevAnimation);
      return prevAnimation;
    }
    prevAnimation.cancel();
  }

  const animation = createAnimation(
    el,
    target._keyframes,
    target._options,
    target._timeline
  );
  animations.set(target, animation);
  return animation;
};
