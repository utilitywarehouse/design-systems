import type { DimensionValue, ViewProps, ViewStyle, AnimatableNumericValue } from 'react-native';
import { lightTheme } from '../../core/themes';

type addPrefixToObject<T, P extends string> = {
  [K in keyof T as K extends string | number ? `${P}${K}` : never]: T[K];
};

export type SpaceValue =
  | keyof addPrefixToObject<(typeof lightTheme)['space'], '$'>
  | DimensionValue
  | undefined;

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type HSLA = `hsla(${string})`;
type HSL = `hsl(${string})`;

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

interface BoxProps
  extends Omit<
      ViewStyle,
      | 'padding'
      | 'paddingHorizontal'
      | 'paddingVertical'
      | 'paddingTop'
      | 'paddingBottom'
      | 'paddingLeft'
      | 'paddingRight'
      | 'paddingEnd'
      | 'paddingStart'
      | 'margin'
      | 'marginHorizontal'
      | 'marginVertical'
      | 'marginTop'
      | 'marginBottom'
      | 'marginLeft'
      | 'marginRight'
      | 'marginEnd'
      | 'marginStart'
      | 'columnGap'
      | 'gap'
      | 'rowGap'
      | 'backgroundColor'
      | 'borderColor'
      | 'borderBottomColor'
      | 'borderLeftColor'
      | 'borderRightColor'
      | 'borderTopColor'
      | 'borderBlockColor'
      | 'borderBlockEndColor'
      | 'borderBlockStartColor'
      | 'borderEndColor'
      | 'borderStartColor'
      | 'shadowColor'
      | 'borderRadius'
      | 'rounded'
      | 'borderBottomEndRadius'
      | 'borderBottomLeftRadius'
      | 'borderBottomRightRadius'
      | 'borderBottomStartRadius'
      | 'borderTopEndRadius'
      | 'borderTopLeftRadius'
      | 'borderTopRightRadius'
      | 'borderTopStartRadius'
      | 'borderEndEndRadius'
      | 'borderEndStartRadius'
      | 'borderStartEndRadius'
      | 'borderStartStartRadius'
      | 'opacity'
      | 'borderBottomWidth'
      | 'borderEndWidth'
      | 'borderLeftWidth'
      | 'borderRightWidth'
      | 'borderStartWidth'
      | 'borderTopWidth'
      | 'borderWidth'
    >,
    ViewProps {
  bg?: ColorValue;
  bgColor?: ColorValue;
  h?: DimensionValue;
  w?: DimensionValue;
  p?: SpaceValue;
  px?: SpaceValue;
  py?: SpaceValue;
  pt?: SpaceValue;
  pb?: SpaceValue;
  pr?: SpaceValue;
  pl?: SpaceValue;
  m?: SpaceValue;
  mx?: SpaceValue;
  my?: SpaceValue;
  mt?: SpaceValue;
  mb?: SpaceValue;
  mr?: SpaceValue;
  ml?: SpaceValue;
  rounded?: RadiiValue;
  padding?: SpaceValue;
  paddingHorizontal?: SpaceValue;
  paddingVertical?: SpaceValue;
  paddingTop?: SpaceValue;
  paddingBottom?: SpaceValue;
  paddingLeft?: SpaceValue;
  paddingRight?: SpaceValue;
  paddingEnd?: SpaceValue;
  paddingStart?: SpaceValue;
  margin?: SpaceValue;
  marginHorizontal?: SpaceValue;
  marginVertical?: SpaceValue;
  marginTop?: SpaceValue;
  marginBottom?: SpaceValue;
  marginLeft?: SpaceValue;
  marginRight?: SpaceValue;
  marginEnd?: SpaceValue;
  marginStart?: SpaceValue;
  columnGap?: SpaceValue;
  gap?: SpaceValue;
  rowGap?: SpaceValue;
  backgroundColor?: ColorValue;
  borderColor?: ColorValue;
  borderBottomColor?: ColorValue;
  borderLeftColor?: ColorValue;
  borderRightColor?: ColorValue;
  borderTopColor?: ColorValue;
  borderBlockColor?: ColorValue;
  borderBlockEndColor?: ColorValue;
  borderBlockStartColor?: ColorValue;
  borderEndColor?: ColorValue;
  borderStartColor?: ColorValue;
  shadowColor?: ColorValue;
  borderRadius?: RadiiValue;
  borderBottomEndRadius?: RadiiValue;
  borderBottomLeftRadius?: RadiiValue;
  borderBottomRightRadius?: RadiiValue;
  borderBottomStartRadius?: RadiiValue;
  borderTopEndRadius?: RadiiValue;
  borderTopLeftRadius?: RadiiValue;
  borderTopRightRadius?: RadiiValue;
  borderTopStartRadius?: RadiiValue;
  borderEndEndRadius?: RadiiValue;
  borderEndStartRadius?: RadiiValue;
  borderStartEndRadius?: RadiiValue;
  borderStartStartRadius?: RadiiValue;
  opacity?: OpacityValue;
  borderBottomWidth?: BordeWidthValue;
  borderEndWidth?: BordeWidthValue;
  borderLeftWidth?: BordeWidthValue;
  borderRightWidth?: BordeWidthValue;
  borderStartWidth?: BordeWidthValue;
  borderTopWidth?: BordeWidthValue;
  borderWidth?: BordeWidthValue;
}

export default BoxProps;
