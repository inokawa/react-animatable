import { AnimationOptions } from "../..";
import { isSameObject, isSameObjectArray } from "../../core/utils";
import { createAnimation } from "../../core/waapi";

export interface AnimationObject {
  readonly _keyframes: Keyframe[];
  readonly _options: KeyframeEffectOptions | undefined;
}

const animations = new WeakMap<AnimationObject, Animation>();

export const getAnimation = (target: AnimationObject) => animations.get(target);
export const deleteAnimation = (target: AnimationObject) => {
  getAnimation(target)?.cancel();
  animations.delete(target);
};

export const isEqual = (
  targetKeyframes: Keyframe[],
  targetOptions: AnimationOptions | undefined,
  keyframes: Keyframe[],
  options: AnimationOptions | undefined
): boolean => {
  return (
    isSameObjectArray(keyframes, targetKeyframes) &&
    isSameObject(options, targetOptions)
  );
};

export const initAnimation = (
  el: Element,
  target: AnimationObject,
  prevTarget: AnimationObject | undefined
) => {
  const animation = prevTarget && getAnimation(prevTarget);

  if (animation) {
    animations.delete(prevTarget);

    // Reuse animation if possible
    if (
      isEqual(
        target._keyframes,
        target._options,
        prevTarget._keyframes,
        prevTarget._options
      )
    ) {
      animations.set(target, animation);
      return animation;
    }
    animation.cancel();
  }
  const newAnimation = createAnimation(el, target._keyframes, target._options);
  animations.set(target, newAnimation);
  return newAnimation;
};
