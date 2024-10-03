import type { ViewProps } from 'react-native';

interface ListProps extends ViewProps {
  container?: 'full' | 'card';
  headingText?: string;
  headingSupportingText?: string;
  disabled?: boolean;
  loading?: boolean;
  divider?: boolean;
}

export default ListProps;
