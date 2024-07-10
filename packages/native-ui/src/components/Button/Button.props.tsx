import type { Button } from '@gluestack-ui/themed';
import type { ComponentProps, ReactNode, ComponentType, ReactElement } from 'react';

interface BaseButtonProps extends Omit<ComponentProps<typeof Button>, 'children'> {
  disabled?: boolean;
}

export interface ButtonWithStringChildrenProps extends BaseButtonProps {
  children: string | number | null | undefined;
  icon?: ComponentType;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

type ReactNodeWithoutStringOrNumber = Exclude<ReactNode, string | number | Iterable<ReactNode>>;

interface ButtonWithOtherChildernProps extends BaseButtonProps {
  children:
    | ReactNodeWithoutStringOrNumber
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | ReactElement<any, React.JSXElementConstructor<any>>
    | Iterable<ReactNodeWithoutStringOrNumber>;
  icon?: never;
  iconPosition?: never;
  loading?: never;
}

export type ButtonProps = ButtonWithStringChildrenProps | ButtonWithOtherChildernProps;
