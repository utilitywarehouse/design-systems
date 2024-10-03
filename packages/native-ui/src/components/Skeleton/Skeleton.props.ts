import type { DimensionValue, ViewProps } from 'react-native';
import type { ColorValue } from '../../types';

interface SkeletonProps extends ViewProps {
  width: DimensionValue;
  height: DimensionValue;
  backgroundColor?: ColorValue;
}

export default SkeletonProps;
