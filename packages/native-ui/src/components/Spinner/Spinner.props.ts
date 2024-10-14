import { RefAttributes } from 'react';
import { View, type ViewProps } from 'react-native';

interface SpinnerProps extends ViewProps, RefAttributes<View> {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: string;
}

export default SpinnerProps;
