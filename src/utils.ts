export const noop = () => {};
export const getKeys = Object.keys;
export const isArray = Array.isArray;
export const getStyle = getComputedStyle;

export const isSameObject = (
  target: object = {},
  prev: object = {}
): boolean => {
  const keys = getKeys(target);
  if (keys.length !== getKeys(prev).length) return false;
  return keys.every((k) => (target as any)[k] === (prev as any)[k]);
};

export const isSameObjectArray = (
  target: object[],
  prev: object[]
): boolean => {
  if (target.length !== prev.length) return false;
  return target.every((t, i) => isSameObject(t, prev[i]));
};

export const toArray = <T>(items: T | T[]): T[] =>
  isArray(items) ? items : [items];

export const uniqBy = <T extends string | number>(items: T[]): T[] => {
  return Array.from(new Set(items));
};
