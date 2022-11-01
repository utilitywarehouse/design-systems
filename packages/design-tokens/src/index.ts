export { colors, Colors } from "./colors";

export const fonts = {
  primary: "Aeonik, Arial, sans-serif",
  secondary: "Work Sans, Arial, sans-serif",
};
export const fontWeights = {
  primary: 700,
  secondary: {
    semibold: 600,
    regular: 400,
  },
};
export type Fonts = typeof fonts;
export type FontWeights = typeof fontWeights;

export const breakpoints = { mobile: 0, tablet: 768, desktop: 1366 };
export type Breakpoints = typeof breakpoints;

export const transitions = { duration: 120, easingFunction: "ease-out" };
export type Transitions = typeof transitions;

export const borderRadius = {
  xsmall: "4px",
  small: "8px",
  medium: "16px",
  large: "32px",
};
export type BorderRadius = typeof borderRadius;

export const spacingBase = 8;
