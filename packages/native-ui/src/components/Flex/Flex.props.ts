import type { FlexAlignType, ViewProps, ViewStyle } from 'react-native';
import { SpacingValues } from '../../types';

interface FlexProps extends ViewProps {
  direction?: ViewStyle['flexDirection'];
  align?: FlexAlignType;
  justify?: ViewStyle['justifyContent'];
  wrap?: ViewStyle['flexWrap'];
  space?: SpacingValues;
}

export default FlexProps;
