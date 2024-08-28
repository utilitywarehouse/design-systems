import type { ViewProps, ViewStyle } from 'react-native';

interface BoxProps extends ViewStyle, ViewProps {
  bg?: ViewStyle['backgroundColor'];
  bgColor?: ViewStyle['backgroundColor'];
  h?: ViewStyle['height'];
  w?: ViewStyle['width'];
  p?: ViewStyle['padding'];
  px?: ViewStyle['paddingHorizontal'];
  py?: ViewStyle['paddingVertical'];
  pt?: ViewStyle['paddingTop'];
  pb?: ViewStyle['paddingBottom'];
  pr?: ViewStyle['paddingRight'];
  pl?: ViewStyle['paddingLeft'];
  m?: ViewStyle['margin'];
  mx?: ViewStyle['marginHorizontal'];
  my?: ViewStyle['marginVertical'];
  mt?: ViewStyle['marginTop'];
  mb?: ViewStyle['marginBottom'];
  mr?: ViewStyle['marginRight'];
  ml?: ViewStyle['marginLeft'];
  rounded?: ViewStyle['borderRadius'];
}

export default BoxProps;
