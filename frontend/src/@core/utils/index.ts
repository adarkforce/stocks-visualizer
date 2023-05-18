// 👉 IsEmpty
export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined || value === "") return true;

  return !!(Array.isArray(value) && value.length === 0);
};

// 👉 IsNullOrUndefined
export const isNullOrUndefined = (
  value: unknown
): value is undefined | null => {
  return value === null || value === undefined;
};

// 👉 IsEmptyArray
export const isEmptyArray = (arr: unknown): boolean => {
  return Array.isArray(arr) && arr.length === 0;
};

// 👉 IsObject
export const isObject = (obj: unknown): obj is Record<string, unknown> =>
  obj !== null && !!obj && typeof obj === "object" && !Array.isArray(obj);

export class LRU<K, V> {
  private capacity: number;
  private cache: Map<K, V>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key: K): V | undefined {
    const value = this.cache.get(key);
    if (value === undefined) return undefined;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key: K, value: V) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}

export const randomHexColor = (min: number, max: number = 255) => {
  // Generate random RGB values within the range of min-max

  const red = Math.floor(Math.random() * (max - min)) + min;
  const green = Math.floor(Math.random() * (max - min)) + min;
  const blue = Math.floor(Math.random() * (max - min)) + min;

  // Convert the RGB values to a hex color
  const hexColor = `#${((1 << 24) | (red << 16) | (green << 8) | blue)
    .toString(16)
    .slice(1)}`;

  return hexColor;
};

/**
 * Convert Hex color to rgb
 * @param hex
 */

export const hexToRgb = (hex: string) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  hex = hex.replace(
    shorthandRegex,
    (m: string, r: string, g: string, b: string) => {
      return r + r + g + g + b + b;
    }
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16
      )}`
    : null;
};
