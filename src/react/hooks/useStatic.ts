import { useRef } from "react";

/**
 * @internal
 */
export const useStatic = <T>(init: () => T): T => {
  const ref = useRef<T>();
  return ref.current || (ref.current = init());
};
