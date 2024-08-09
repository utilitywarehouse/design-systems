import type { ComponentProps } from 'react';
import type { Root } from './styled-components';

interface ListProps extends ComponentProps<typeof Root> {
  container?: 'full' | 'card';
  headingText?: string;
  headingSupportingText?: string;
  disabled?: boolean;
  loading?: boolean;
  divider?: boolean;
}

export default ListProps;
