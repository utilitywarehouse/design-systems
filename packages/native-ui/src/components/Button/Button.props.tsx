import type { Button } from '@gluestack-ui/themed';
import type { ComponentProps, ReactNode, ComponentType, ReactElement } from 'react';

interface BaseButtonProps extends Omit<ComponentProps<typeof Button>, 'children'> {
  /*
   * If `true`, the button will be disabled.
   * @default  false
   */
  disabled?: boolean;
}

export interface ButtonWithStringChildrenProps extends BaseButtonProps {
  /*
   * The content of the button.
   */
  children: string | number | null | undefined;
  /*
   * The icon to display on the button.
   * @default undefined
   */
  icon?: ComponentType;
  /*
   * The position of the icon.
   * @default  'left'
   */
  iconPosition?: 'left' | 'right';
  /*
   * If `true`, the button will show a spinner.
   * @default  false
   */
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
