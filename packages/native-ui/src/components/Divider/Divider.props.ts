import type { ViewProps } from 'react-native';
import type { ColorValue } from '../../types';

interface DividerProps extends ViewProps {
  color?: ColorValue;
  space?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export default DividerProps;
