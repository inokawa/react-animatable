import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export type AnimationHandle = {
  play: () => Promise<AnimationHandle>;
  reverse: () => Promise<AnimationHandle>;
  cancel: () => void;
  finish: () => void;
  pause: () => void;
  setCurrentTime: (arg: number) => void;
  setPlaybackRate: (arg: number | ((prev: number) => number)) => void;
};

export type TypedKeyframe = Pick<Keyframe, "composite" | "easing" | "offset"> &
  React.CSSProperties;

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
  targets: TargetCache
) => {
  type P = AnimatableProps<React.ComponentProps<T>>;

  type Target = P["ref"];
  return forwardRef<Target, P>(({ findId, ...props }, propRef) => {
    const ref = useRef<Target>(null);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      targets.set(el, findId);
      return () => {
        targets.delete(el);
      };
    }, [findId]);

    return <Element ref={ref} {...props} />;
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
    keyframes: TypedKeyframe | TypedKeyframe[] | ((time: number) => void),
    options?: AnimationOptions
  ): AnimationHandle;
  findById: (findId: string) => AnimationSelection;
  findByElement: (element: keyof JSX.IntrinsicElements) => AnimationSelection;
};

type TargetCache = Map<
  HTMLElement,
  { el: keyof JSX.IntrinsicElements; id: FindId | undefined }
>;

const animate = (
  targets: TargetCache,
  keyframesOrFunction:
    | TypedKeyframe
    | TypedKeyframe[]
    | ((time: number) => void),
  options?: AnimationOptions
): AnimationHandle => {
  const initAnimations = (): Animation[] => {
    if (typeof keyframesOrFunction === "function") {
      const effect = new KeyframeEffect(null, null, options);
      const animation = new Animation(effect);
      const update = () => {
        const progress = animation.effect!.getComputedTiming().progress;
        if (progress != null) {
          keyframesOrFunction(progress);
        }
        if (animation.playState == "running") {
          requestAnimationFrame(update);
        }
      };
      animation.ready.then(update);
      return [animation];
    } else {
      const keyframes = (
        Array.isArray(keyframesOrFunction)
          ? keyframesOrFunction
          : [keyframesOrFunction]
      ) as Keyframe[];

      const anims: Animation[] = [];
      targets.forEach((v, el) => {
        const effect = new KeyframeEffect(el, keyframes, options);
        const animation = new Animation(effect);
        anims.push(animation);
      });
      return anims;
    }
  };

  let animations: Animation[] = [];

  const handle: AnimationHandle = {
    play: () => {
      animations = initAnimations();
      animations.forEach((a) => a.play());
      return Promise.all(animations.map((a) => a.finished)).then(() => handle);
    },
    reverse: () => {
      animations = initAnimations();
      animations.forEach((a) => a.reverse());
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
    setCurrentTime: (arg: number) => {
      animations.forEach((a) => (a.currentTime = arg));
    },
    setPlaybackRate: (arg: number | ((prev: number) => number)) => {
      animations.forEach((a) => {
        if (typeof arg === "function") {
          a.updatePlaybackRate(arg(a.playbackRate));
        } else {
          a.updatePlaybackRate(arg);
        }
      });
    },
  };
  return handle;
};

const createSelection = (targets: TargetCache): AnimationSelection => {
  const fn: AnimationSelection = (...args) => {
    return animate(targets, ...args);
  };
  fn.findById = (target) => {
    return createSelection(
      new Map(Array.from(targets).filter(([, { id }]) => id === target))
    );
  };
  fn.findByElement = (target) => {
    return createSelection(
      new Map(Array.from(targets).filter(([, { el }]) => el === target))
    );
  };
  return fn;
};

const createHandle = (targets: TargetCache): AnimationAllSelection => {
  const cache = new Map<Elements, any>();

  const handle = new Proxy(createSelection(targets), {
    get(target, prop: keyof JSX.IntrinsicElements) {
      if ((target as any)[prop]) {
        return (target as any)[prop];
      }
      if (cache.has(prop)) {
        return cache.get(prop);
      }
      const component = createComponent(prop, targets);
      cache.set(prop, component);
      return component;
    },
  }) as AnimationAllSelection;
  return handle;
};

const createMap = () => new Map();

export const useAnimation = (): AnimationAllSelection => {
  const targets = useState<TargetCache>(createMap)[0];

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
