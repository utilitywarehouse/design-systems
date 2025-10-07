/**
 * Do not edit directly, this file was auto-generated.
 */

export const mobile = {
  md: {
    blur: 0,
    spread: 0,
    x: 4,
    y: 4,
  },
  sm: {
    blur: 0,
    spread: 0,
    x: 4,
    y: 4,
  },
} as const;

export const tablet = {
  md: {
    blur: 0,
    spread: 0,
    x: 6,
    y: 6,
  },
  sm: {
    blur: 0,
    spread: 0,
    x: 4,
    y: 4,
  },
} as const;

export const desktop = {
  md: {
    blur: 0,
    spread: 0,
    x: 6,
    y: 6,
  },
  sm: {
    blur: 0,
    spread: 0,
    x: 4,
    y: 4,
  },
} as const;

const shadow = { mobile, tablet, desktop } as const;

export default shadow;
