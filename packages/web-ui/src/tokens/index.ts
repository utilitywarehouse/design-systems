export const fonts = {
  primary: 'Aeonik, Arial, sans-serif',
  secondary: 'Work Sans, Arial, sans-serif',
};
export type Fonts = typeof fonts;

export const fontWeights = {
  primary: 700,
  secondary: {
    semibold: 600,
    regular: 400,
  },
};

export type FontWeights = typeof fontWeights;

export const breakpoints = {
  // px
  mobile: 0,
  tablet: 740,
  desktop: 992,
  wide: 1200,
};
export type Breakpoints = typeof breakpoints;

export const transitions = { duration: 120, easingFunction: 'ease-out' };
export type Transitions = typeof transitions;

export const spacingBase = 8;
