import type { ViewStyle, StyleProp, View } from 'react-native';
import type {
  BordeWidthValue,
  ColorValue,
  OpacityValue,
  RadiiValue,
  SpaceValue,
} from '../../types';
import React from 'react';

type ComponentPropsWithRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>;

export type OmittedStyles = Omit<
  ViewStyle,
  // List of styles to omit (same as your original list)
  | 'backgroundColor'
  | 'borderBlockColor'
  | 'borderBlockEndColor'
  | 'borderBlockStartColor'
  | 'borderBottomColor'
  | 'borderBottomEndRadius'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderBottomStartRadius'
  | 'borderBottomWidth'
  | 'borderColor'
  | 'borderEndColor'
  | 'borderEndEndRadius'
  | 'borderEndStartRadius'
  | 'borderEndWidth'
  | 'borderLeftColor'
  | 'borderLeftWidth'
  | 'borderRadius'
  | 'borderRightColor'
  | 'borderRightWidth'
  | 'borderStartColor'
  | 'borderStartEndRadius'
  | 'borderStartStartRadius'
  | 'borderStartWidth'
  | 'borderTopColor'
  | 'borderTopEndRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderTopStartRadius'
  | 'borderTopWidth'
  | 'borderWidth'
  | 'bottom'
  | 'columnGap'
  | 'end'
  | 'gap'
  | 'height'
  | 'left'
  | 'margin'
  | 'marginBottom'
  | 'marginEnd'
  | 'marginHorizontal'
  | 'marginLeft'
  | 'marginRight'
  | 'marginStart'
  | 'marginTop'
  | 'marginVertical'
  | 'maxHeight'
  | 'maxWidth'
  | 'minHeight'
  | 'minWidth'
  | 'opacity'
  | 'padding'
  | 'paddingBottom'
  | 'paddingEnd'
  | 'paddingHorizontal'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingStart'
  | 'paddingTop'
  | 'paddingVertical'
  | 'right'
  | 'rowGap'
  | 'shadowColor'
  | 'start'
  | 'top'
  | 'width'
  // deprecated
  | 'rotation'
  | 'scaleX'
  | 'scaleY'
  | 'transformMatrix'
  | 'translateX'
  | 'translateY'
>;

export type OtherBoxViewStyles = Pick<
  OmittedStyles,
  // List of other styles to include
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
  | 'aspectRatio'
  | 'backfaceVisibility'
  | 'borderCurve'
  | 'borderStyle'
  | 'cursor'
  | 'direction'
  | 'display'
  | 'elevation'
  | 'flex'
  | 'flexBasis'
  | 'flexDirection'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexWrap'
  | 'justifyContent'
  | 'overflow'
  | 'pointerEvents'
  | 'position'
  | 'shadowOffset'
  | 'shadowOpacity'
  | 'shadowRadius'
  | 'transform'
  | 'transformOrigin'
  | 'zIndex'
>;

export interface BoxStyleMappingValues {
  // Style Mapping
  // - Colors
  bg?: ColorValue;
  bgColor?: ColorValue;
  // - Space
  h?: SpaceValue;
  w?: SpaceValue;
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
  // - Radii
  rounded?: RadiiValue;
}

export interface ThemedBoxViewStyleProps {
  // - Space
  top?: SpaceValue;
  bottom?: SpaceValue;
  left?: SpaceValue;
  right?: SpaceValue;
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
  height?: SpaceValue;
  width?: SpaceValue;
  minHeight?: SpaceValue;
  minWidth?: SpaceValue;
  maxWidth?: SpaceValue;
  maxHeight?: SpaceValue;
  start?: SpaceValue;
  end?: SpaceValue;
  // - Colors
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
  // - Radii
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
  // - Opacity
  opacity?: OpacityValue;
  // - Border Width
  borderBottomWidth?: BordeWidthValue;
  borderEndWidth?: BordeWidthValue;
  borderLeftWidth?: BordeWidthValue;
  borderRightWidth?: BordeWidthValue;
  borderStartWidth?: BordeWidthValue;
  borderTopWidth?: BordeWidthValue;
  borderWidth?: BordeWidthValue;
}

export interface BoxOwnProps
  extends BoxStyleMappingValues,
    ThemedBoxViewStyleProps,
    OtherBoxViewStyles {
  as?: React.ElementType;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export type BoxProps<T extends React.ElementType = typeof View> = BoxOwnProps &
  Omit<ComponentPropsWithRef<T>, keyof BoxOwnProps>;

export default BoxProps;
