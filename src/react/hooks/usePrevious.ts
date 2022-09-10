import { useEffect, useRef } from "react";

export const usePrevious = <T>(value: T) => {
  const prev = useRef(value);
  useEffect(() => {
    prev.current = value;
  }, [value]);
  return prev.current;
};
