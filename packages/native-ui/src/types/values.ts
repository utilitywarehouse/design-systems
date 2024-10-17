import { AnimatableNumericValue, DimensionValue } from 'react-native';
import { lightTheme } from '../core/themes';

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
