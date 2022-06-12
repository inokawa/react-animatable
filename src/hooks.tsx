import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import mergeRefs from "react-merge-refs";

export type AnimationHandle = {
  play: () => Promise<AnimationHandle>;
  reverse: () => Promise<AnimationHandle>;
  cancel: () => void;
  finish: () => void;
  pause: () => void;
  setTime: (time: number) => void;
  setPlaybackRate: (rate: number | ((prevRate: number) => number)) => void;
};

type WithoutNumber<P extends object> = {
  [K in keyof P]: Exclude<P[K], number>;
};

export type TypedKeyframe = Pick<Keyframe, "composite" | "easing" | "offset"> &
  WithoutNumber<React.CSSProperties> & { d?: string };

export interface AnimationOptions
  extends Omit<KeyframeEffectOptions, "easing"> {
  easing?:
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | `cubic-bezier(${string})`;
}

type Elements = keyof JSX.IntrinsicElements | React.ComponentType<any>;

type FindId = string | number;

type AnimatableProps<P extends object> = P & {
  findId?: FindId;
};
type AnimatableElement<P extends object> = (
  props: AnimatableProps<P>
) => React.ReactElement | null;

const createComponent = <T extends Elements>(
  Element: T,
  targets: Map<HTMLElement, AnimationTarget>
) => {
  type P = AnimatableProps<React.ComponentProps<T>>;

  return forwardRef<HTMLElement, P>(({ findId, ...props }, propRef) => {
    const ref = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      targets.set(el, findId);
      return () => {
        targets.delete(el);
      };
    }, [findId]);

    return (
      <Element
        ref={useMemo(() => mergeRefs([ref, propRef]), [ref, propRef])}
        {...(props as any)}
      />
    );
  });
};

export type AnimationHandleWithElements = {
  [K in keyof JSX.IntrinsicElements]: AnimatableElement<
    React.ComponentProps<K>
  >;
} &
  AnimationHandle;

type AnimationTarget = {
  el: keyof JSX.IntrinsicElements;
  id: FindId | undefined;
};

const isSameObject = (target: object = {}, prev: object = {}): boolean => {
  const keys = Object.keys(target);
  if (keys.length !== Object.keys(prev).length) return false;
  return keys.every((k) => (target as any)[k] === (prev as any)[k]);
};

const isSameObjectArray = (target: object[], prev: object[]): boolean => {
  if (target.length !== prev.length) return false;
  return target.every((t, i) => isSameObject(t, prev[i]));
};

const createHandle = (
  getTargets: () => HTMLElement[],
  getKeyframes: () => TypedKeyframe[],
  getOptions: () => AnimationOptions | undefined
): AnimationHandle => {
  const cache = new WeakMap<
    HTMLElement,
    [Animation, TypedKeyframe[], AnimationOptions | undefined]
  >();

  const initAnimations = (): Animation[] => {
    return getTargets().map((el) => {
      const keyframes = getKeyframes();
      const options = getOptions();
      if (cache.has(el)) {
        const [prevAnimation, prevKeyframes, prevOptions] = cache.get(el)!;
        if (
          isSameObjectArray(keyframes, prevKeyframes) &&
          isSameObject(options, prevOptions)
        ) {
          return prevAnimation;
        }
        prevAnimation.cancel();
      }
      const effect = new KeyframeEffect(el, keyframes as Keyframe[], {
        fill: "forwards",
        ...options,
      });
      const animation = new Animation(effect);
      cache.set(el, [animation, keyframes, options]);
      return animation;
    });
  };

  let animations: Animation[] = [];

  const handle: AnimationHandle = {
    play: () => {
      (animations = initAnimations()).forEach((a) => a.play());
      return Promise.all(animations.map((a) => a.finished)).then(() => handle);
    },
    reverse: () => {
      (animations = initAnimations()).forEach((a) => a.reverse());
      return Promise.all(animations.map((a) => a.finished)).then(() => handle);
    },
    cancel: () => {
      animations.forEach((a) => a.cancel());
    },
    finish: () => {
      animations.forEach((a) => a.finish());
    },
    pause: () => {
      animations.forEach((a) => a.pause());
    },
    setTime: (arg) => {
      animations.forEach((a) => {
        a.currentTime = arg;
      });
    },
    setPlaybackRate: (arg) => {
      animations.forEach((a) => {
        a.updatePlaybackRate(
          typeof arg === "function" ? arg(a.playbackRate) : arg
        );
      });
    },
  };
  return handle;
};



const createProxy = (
  animationHandle: AnimationHandle,
  targets: Map<HTMLElement, AnimationTarget>
): AnimationHandleWithElements => {
  const elementCache = new Map<Elements, any>();

  return new Proxy(animationHandle, {
    get(target, prop: keyof JSX.IntrinsicElements) {
      if ((target as any)[prop]) {
        return (target as any)[prop];
      }
      if (elementCache.has(prop)) {
        return elementCache.get(prop);
      }
      const component = createComponent(prop, targets);
      elementCache.set(prop, component);
      return component;
    },
  }) as AnimationHandleWithElements;
};

export const useAnimation = (
  keyframe: TypedKeyframe | TypedKeyframe[],
  options?: AnimationOptions
): AnimationHandleWithElements => {
  const keyframeRef = useRef(keyframe);
  const optionsRef = useRef(options);

  const [animation, cleanup] = useState(() => {
    const targets = new Map<HTMLElement, AnimationTarget>();

    const handle = createHandle(
      () => Array.from(targets).map(([el]) => el),
      () => {
        const kf = keyframeRef.current || [];
        return Array.isArray(kf) ? kf : [kf];
      },
      () => optionsRef.current
    );
    const proxy = createProxy(handle, targets);
    const cleanup = () => {
      targets.clear();
    };
    return [proxy, cleanup] as [typeof proxy, typeof cleanup];
  })[0];

  useLayoutEffect(() => {
    keyframeRef.current = keyframe;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return animation;
};
