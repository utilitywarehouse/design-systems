import type { PressableProps } from 'react-native';
import type { ColorValue } from '../../../types';

interface ListItemBaseProps extends Omit<PressableProps, 'children'> {
  divider?: boolean;
  dividerColor?: ColorValue;
  loading?: boolean;
  disabled?: boolean;
}

export interface ListItemWithChildren extends ListItemBaseProps {
  children: PressableProps['children'];
  text?: never;
  supportingText?: never;
  leadingContent?: never;
  trailingContent?: never;
}

export interface ListItemWithoutChildren extends ListItemBaseProps {
  children?: never;
  text: string;
  supportingText?: string;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
}

type ListItemProps = ListItemWithChildren | ListItemWithoutChildren;

export default ListItemProps;
