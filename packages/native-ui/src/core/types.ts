import { breakpoints } from './breakpoints';
import { darkTheme, lightTheme } from './themes';
import type { DimensionValue, AnimatableNumericValue } from 'react-native';

export type AppBreakpoints = typeof breakpoints;

export type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

export type addPrefixToObject<T, P extends string> = {
  [K in keyof T as K extends string | number ? `${P}${K}` : never]: T[K];
};

export type SpaceValue =
  | keyof addPrefixToObject<(typeof lightTheme)['space'], '$'>
  | DimensionValue
  | undefined;

export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;
export type HSLA = `hsla(${string})`;
export type HSL = `hsl(${string})`;

export type ColorValue =
  | 'currentColor'
  | 'transparent'
  | keyof addPrefixToObject<(typeof lightTheme)['colors'], '$'>
  | HSLA
  | HSL
  | RGB
  | RGBA
  | HEX
  | undefined;

export type RadiiValue =
  | keyof addPrefixToObject<(typeof lightTheme)['radii'], '$'>
  | AnimatableNumericValue
  | undefined;

export type BordeWidthValue =
  | keyof addPrefixToObject<(typeof lightTheme)['borderWidths'], '$'>
  | number
  | undefined;

export type OpacityValue =
  | keyof addPrefixToObject<(typeof lightTheme)['opacity'], '$'>
  | AnimatableNumericValue
  | undefined;
