import { AnimatableNumericValue, DimensionValue } from 'react-native';
import { lightTheme } from '../core/themes';

export type addPrefixToObject<T, P extends string> = {
  [K in keyof T as K extends string | number ? `${P}${K}` : never]: T[K];
};

export type SpaceValue =
  | keyof addPrefixToObject<
      Omit<
        (typeof lightTheme)['space'],
        | '0.5'
        | '1'
        | '1.5'
        | '2'
        | '2.5'
        | '3'
        | '3.5'
        | '4'
        | '4.5'
        | '5'
        | '6'
        | '7'
        | '8'
        | '9'
        | '10'
        | '11'
        | '12'
        | '14'
        | '16'
        | '20'
        | '24'
        | '32'
        | '40'
        | '48'
        | '56'
        | '64'
        | '72'
        | '80'
      >,
      ''
    >
  | keyof addPrefixToObject<
      Omit<
        (typeof lightTheme)['space'],
        '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'
      >,
      '$'
    >
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
  | keyof addPrefixToObject<(typeof lightTheme)['borderRadius'], ''>
  | keyof addPrefixToObject<(typeof lightTheme)['radii'], '$'>
  | AnimatableNumericValue
  | undefined;

export type BordeWidthValue =
  | keyof addPrefixToObject<(typeof lightTheme)['borderWidth'], ''>
  | keyof addPrefixToObject<(typeof lightTheme)['borderWidths'], '$'>
  | number
  | undefined;

export type OpacityValue =
  | keyof addPrefixToObject<(typeof lightTheme)['opacity'], '$'>
  | AnimatableNumericValue
  | undefined;
