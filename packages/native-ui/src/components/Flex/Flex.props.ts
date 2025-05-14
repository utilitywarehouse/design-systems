import type { ViewProps, ViewStyle, FlexAlignType } from 'react-native';

interface FlexProps extends ViewProps {
  direction?: ViewStyle['flexDirection'];
  align?: FlexAlignType;
  justify?: ViewStyle['justifyContent'];
  wrap?: ViewStyle['flexWrap'];
  space?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export default FlexProps;
