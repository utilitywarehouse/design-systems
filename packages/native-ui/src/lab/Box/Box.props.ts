import type { ViewProps, ViewStyle } from 'react-native';
import type {
  BordeWidthValue,
  ColorValue,
  OpacityValue,
  RadiiValue,
  SpaceValue,
} from '../../types';

type OmittedStyles = Omit<
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
  | 'height'
  | 'width'
  | 'maxWidth'
  | 'maxHeight'
  | 'minWidth'
  | 'minHeight'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'start'
  | 'end'
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

interface BoxProps extends OmittedStyles, ViewProps {
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
  // Theme Mapping
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

export default BoxProps;
