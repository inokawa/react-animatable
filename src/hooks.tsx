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
  replay: () => Promise<AnimationHandle>;
  reverse: () => Promise<AnimationHandle>;
  cancel: () => void;
  finish: () => void;
  pause: () => void;
  setTime: (time: number) => void;
  setPlaybackRate: (rate: number | ((prevRate: number) => number)) => void;
};

export type AnimationsHandle<ID extends string> = {
  play: (name: ID) => Promise<AnimationsHandle<ID>>;
  replay: (name: ID) => Promise<AnimationsHandle<ID>>;
  reverse: (name: ID) => Promise<AnimationsHandle<ID>>;
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

type AnimatableProps<P extends object> = P;
type AnimatableElement<P extends object> = (
  props: AnimatableProps<P>
) => React.ReactElement | null;

const createComponent = <T extends Elements>(
  Element: T,
  targets: Set<HTMLElement>
) => {
  type P = AnimatableProps<React.ComponentProps<T>>;

  return forwardRef<HTMLElement, P>((props, propRef) => {
    const ref = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      targets.add(el);
      return () => {
        targets.delete(el);
      };
    }, []);

    return (
      <Element
        ref={useMemo(() => mergeRefs([ref, propRef]), [ref, propRef])}
        {...(props as any)}
      />
    );
  });
};

export type WithElements<T> = {
  [K in keyof JSX.IntrinsicElements]: AnimatableElement<
    React.ComponentProps<K>
  >;
} &
  T;

const isSameObject = (target: object = {}, prev: object = {}): boolean => {
  const keys = Object.keys(target);
  if (keys.length !== Object.keys(prev).length) return false;
  return keys.every((k) => (target as any)[k] === (prev as any)[k]);
};

const isSameObjectArray = (target: object[], prev: object[]): boolean => {
  if (target.length !== prev.length) return false;
  return target.every((t, i) => isSameObject(t, prev[i]));
};

const buildAnimationInitializer = (
  getTargets: () => HTMLElement[]
): ((
  keyframes: TypedKeyframe[],
  options: AnimationOptions | undefined
) => Animation[]) => {
  const cache = new WeakMap<
    HTMLElement,
    [Animation, TypedKeyframe[], AnimationOptions | undefined]
  >();

  return (keyframes, options) => {
    return getTargets().map((el) => {
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
};

const createHandle = (
  initAnimations: (
    keyframes: TypedKeyframe[],
    options: AnimationOptions | undefined
  ) => Animation[]
) => {
  let animations: Animation[] = [];

  const handle = {
    play: (
      keyframes: TypedKeyframe[],
      options: AnimationOptions | undefined
    ) => {
      animations = initAnimations(keyframes, options);
      animations.forEach((a) => a.play());
      return Promise.all(animations.map((a) => a.finished));
    },
    replay: (
      keyframes: TypedKeyframe[],
      options: AnimationOptions | undefined
    ) => {
      animations = initAnimations(keyframes, options);
      animations.forEach((a) => {
        a.currentTime = 0;
        a.play();
      });
      return Promise.all(animations.map((a) => a.finished));
    },
    reverse: (
      keyframes: TypedKeyframe[],
      options: AnimationOptions | undefined
    ) => {
      animations = initAnimations(keyframes, options);
      animations.forEach((a) => a.reverse());
      return Promise.all(animations.map((a) => a.finished));
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
    setTime: (time: number) => {
      animations.forEach((a) => {
        a.currentTime = time;
      });
    },
    setPlaybackRate: (arg: number | ((prevRate: number) => number)) => {
      animations.forEach((a) => {
        a.updatePlaybackRate(
          typeof arg === "function" ? arg(a.playbackRate) : arg
        );
      });
    },
  };
  return handle;
};

const createProxy = <T extends object>(
  obj: T,
  targets: Set<HTMLElement>
): WithElements<T> => {
  const elementCache = new Map<Elements, any>();

  return new Proxy(obj, {
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
  }) as WithElements<T>;
};

export const useAnimation = (
  keyframe: TypedKeyframe | TypedKeyframe[],
  options?: AnimationOptions
): WithElements<AnimationHandle> => {
  const keyframeRef = useRef(keyframe);
  const optionsRef = useRef(options);

  const [animation, cleanup] = useState<
    [WithElements<AnimationHandle>, () => void]
  >(() => {
    const targets = new Set<HTMLElement>();
    const getKeyframes = () => {
      const kf = keyframeRef.current || [];
      return Array.isArray(kf) ? kf : [kf];
    };
    const getOptions = () => optionsRef.current;

    const handle = createHandle(
      buildAnimationInitializer(() => Array.from(targets))
    );
    const externalHandle: AnimationHandle = {
      play: () => {
        return handle
          .play(getKeyframes(), getOptions())
          .then(() => externalHandle);
      },
      replay: () => {
        return handle
          .replay(getKeyframes(), getOptions())
          .then(() => externalHandle);
      },
      reverse: () => {
        return handle
          .reverse(getKeyframes(), getOptions())
          .then(() => externalHandle);
      },
      cancel: handle.cancel,
      finish: handle.finish,
      pause: handle.pause,
      setTime: handle.setTime,
      setPlaybackRate: handle.setPlaybackRate,
    };
    return [
      createProxy(externalHandle, targets),
      () => {
        targets.clear();
      },
    ];
  })[0];

  useLayoutEffect(() => {
    keyframeRef.current = keyframe;
    optionsRef.current = options;
  });

  useEffect(() => cleanup, []);

  return animation;
};

export const useAnimations = <ID extends string>(
  definitions: {
    [key in ID]: [TypedKeyframe | TypedKeyframe[], AnimationOptions?];
  }
): WithElements<AnimationsHandle<ID>> => {
  const definitionsRef = useRef(definitions);

  const [animation, cleanup] = useState<
    [WithElements<AnimationsHandle<ID>>, () => void]
  >(() => {
    const targets = new Set<HTMLElement>();

    const getKeyframesAndOptions = (
      name: ID
    ): [TypedKeyframe[], AnimationOptions | undefined] => {
      const [kf, opts] = definitionsRef.current[name] || [];
      return [Array.isArray(kf) ? kf : [kf], opts];
    };

    const handle = createHandle(
      buildAnimationInitializer(() => Array.from(targets))
    );
    const externalHandle: AnimationsHandle<ID> = {
      play: (name) => {
        const [kf, opts] = getKeyframesAndOptions(name);
        return handle.play(kf, opts).then(() => externalHandle);
      },
      replay: (name) => {
        const [kf, opts] = getKeyframesAndOptions(name);
        return handle.replay(kf, opts).then(() => externalHandle);
      },
      reverse: (name) => {
        const [kf, opts] = getKeyframesAndOptions(name);
        return handle.reverse(kf, opts).then(() => externalHandle);
      },
      cancel: handle.cancel,
      finish: handle.finish,
      pause: handle.pause,
      setTime: handle.setTime,
      setPlaybackRate: handle.setPlaybackRate,
    };
    return [
      createProxy(externalHandle, targets),
      () => {
        targets.clear();
      },
    ];
  })[0];

  useLayoutEffect(() => {
    definitionsRef.current = definitions;
  });

  useEffect(() => cleanup, []);

  return animation;
};
