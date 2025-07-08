import type { DimensionValue, ViewProps } from 'react-native';
import type { ColorValue, RadiiValue } from '../../types';

interface SkeletonProps extends Omit<ViewProps, 'children'> {
  width: DimensionValue;
  height: DimensionValue;
  backgroundColor?: ColorValue;
  borderRadius?: RadiiValue;
}

export default SkeletonProps;
