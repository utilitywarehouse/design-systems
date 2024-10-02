import type { ViewProps } from 'react-native';

interface ListHeadingBaseProps extends Omit<ViewProps, 'children'> {}

export interface ListHeadingWithChildren extends ListHeadingBaseProps {
  children: ViewProps['children'];
  text?: never;
  supportingText?: never;
}

export interface ListHeadingWithoutChildren extends ListHeadingBaseProps {
  children?: never;
  text: string;
  supportingText?: string;
}

type ListHeadingProps = ListHeadingWithChildren | ListHeadingWithoutChildren;

export default ListHeadingProps;
