import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export const useLatestRef = <T>(value: T) => {
  const ref = useRef<T>(value);

  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
};
