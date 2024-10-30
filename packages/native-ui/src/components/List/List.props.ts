import type { ViewProps } from 'react-native';
import type { ColorValue } from '../../types';

interface ListProps extends ViewProps {
  container?: 'full' | 'card';
  headingText?: string;
  headingSupportingText?: string;
  disabled?: boolean;
  loading?: boolean;
  divider?: boolean;
  dividerColor?: ColorValue;
}

export default ListProps;
