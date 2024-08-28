import type { ComponentProps } from 'react';
import type { Root } from './styled-components';

interface ListItemProps extends ComponentProps<typeof Root> {
  text: string;
  supportingText?: string;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  divider?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

export default ListItemProps;
