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

export type TypedKeyframe = Pick<Keyframe, "composite" | "easing" | "offset"> &
  React.CSSProperties & { d?: string };

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

export type AnimationAllSelection = {
  [K in keyof JSX.IntrinsicElements]: AnimatableElement<
    React.ComponentProps<K>
  >;
} &
  AnimationSelection;

export type AnimationSelection = {
  (
    keyframes: TypedKeyframe | TypedKeyframe[],
    options?: AnimationOptions
  ): AnimationHandle;
  findById: (findId: string) => AnimationSelection;
  findByElement: (element: keyof JSX.IntrinsicElements) => AnimationSelection;
};

type AnimationTarget = {
  el: keyof JSX.IntrinsicElements;
  id: FindId | undefined;
};

const animate = (
  getTargets: () => HTMLElement[],
  keyframes: Keyframe[],
  options?: AnimationOptions
): AnimationHandle => {
  const cache = new WeakMap<HTMLElement, Animation>();

  const initAnimations = (): Animation[] => {
    return getTargets().map((el) => {
      if (cache.has(el)) {
        return cache.get(el)!;
      }
      const effect = new KeyframeEffect(el, keyframes, {
        fill: "forwards",
        ...options,
      });
      const animation = new Animation(effect);
      cache.set(el, animation);
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
      animations.forEach((a) => (a.currentTime = arg));
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

const stringifyObject = (o: object): string => {
  return JSON.stringify(
    Object.keys(o)
      .sort()
      .reduce((acc, k) => {
        (acc as any)[k] = (o as any)[k];
        return acc;
      }, {})
  );
};

const createSelection = (
  getTargets: () => [HTMLElement, AnimationTarget][],
  animationCache: Map<string, AnimationHandle>
): AnimationSelection => {
  const fn: AnimationSelection = (kf, opts) => {
    const keyframes = (Array.isArray(kf) ? kf : [kf]) as Keyframe[];
    let key = keyframes.map((o) => stringifyObject(o)).join("-");
    if (opts) {
      key += "_" + stringifyObject(opts);
    }
    if (animationCache.has(key)) {
      return animationCache.get(key)!;
    }
    const handle = animate(
      () => getTargets().map(([el]) => el),
      keyframes,
      opts
    );
    animationCache.set(key, handle);
    return handle;
  };
  fn.findById = (target) => {
    return createSelection(
      () => getTargets().filter(([, { id }]) => id === target),
      animationCache
    );
  };
  fn.findByElement = (target) => {
    return createSelection(
      () => getTargets().filter(([, { el }]) => el === target),
      animationCache
    );
  };
  return fn;
};

const createHandle = (
  targets: Map<HTMLElement, AnimationTarget>
): AnimationAllSelection => {
  const elementCache = new Map<Elements, any>();
  const animationCache = new Map<string, AnimationHandle>();

  const handle = new Proxy(
    createSelection(() => Array.from(targets), animationCache),
    {
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
    }
  ) as AnimationAllSelection;
  return handle;
};

const createMap = () => new Map();

export const useAnimation = (): AnimationAllSelection => {
  const targets = useState<Map<HTMLElement, AnimationTarget>>(createMap)[0];

  const animation = useState(() => {
    return createHandle(targets);
  })[0];

  useEffect(() => {
    return () => {
      targets.clear();
    };
  }, []);

  return animation;
};
