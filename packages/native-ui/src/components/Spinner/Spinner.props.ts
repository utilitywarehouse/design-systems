import type { ViewProps } from 'react-native';

interface SpinnerProps extends ViewProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: string;
}

export default SpinnerProps;
