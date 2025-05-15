import type { ViewProps, ViewStyle, FlexAlignType } from 'react-native';

interface FlexProps extends ViewProps {
  direction?: ViewStyle['flexDirection'];
  align?: FlexAlignType;
  justify?: ViewStyle['justifyContent'];
  wrap?: ViewStyle['flexWrap'];
  space?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default FlexProps;
