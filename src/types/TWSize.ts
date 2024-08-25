export const twSize = {
  BASE: "base",
  LARGE: "large",
} as const;

export type TWSizeKey = keyof typeof twSize;

export type TWSize = (typeof twSize)[TWSizeKey];
