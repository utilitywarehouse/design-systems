/**
 * Do not edit directly, this file was auto-generated.
 */

export const mobile = {
  breakpoints: {
    maxWidth: 740,
    minWidth: 320,
  },
  container: {
    paddingBottom: 32,
    paddingHorizontal: 16,
    paddingTop: 24,
    width: 360,
  },
  grid: {
    columnNumber: 4,
    columnWidth: 64,
    gridSize: 8,
    gutter: 16,
    margin: 16,
  },
  spacing: {
    lg: 20,
    md: 16,
    sm: 12,
    xl: 28,
    xs: 8,
  },
} as const;

export const tablet = {
  breakpoints: {
    maxWidth: 992,
    minWidth: 740,
  },
  container: {
    paddingBottom: 32,
    paddingHorizontal: 32,
    paddingTop: 24,
    width: 744,
  },
  grid: {
    columnNumber: 8,
    columnWidth: 64,
    gridSize: 8,
    gutter: 24,
    margin: 32,
  },
  spacing: {
    lg: 24,
    md: 16,
    sm: 12,
    xl: 28,
    xs: 8,
  },
} as const;

export const desktop = {
  breakpoints: {
    maxWidth: 3840,
    minWidth: 992,
  },
  container: {
    paddingBottom: 48,
    paddingHorizontal: 32,
    paddingTop: 32,
    width: 1096,
  },
  grid: {
    columnNumber: 12,
    columnWidth: 64,
    gridSize: 8,
    gutter: 24,
    margin: 32,
  },
  spacing: {
    lg: 24,
    md: 16,
    sm: 12,
    xl: 40,
    xs: 8,
  },
} as const;

const layout = { mobile, tablet, desktop } as const;

export default layout;
