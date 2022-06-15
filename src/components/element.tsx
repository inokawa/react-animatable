import { forwardRef, useLayoutEffect, useMemo, useRef } from "react";
import mergeRefs from "react-merge-refs";

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

export const createProxy = <T extends object>(
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
