import type { ReactNode, ComponentType, ReactElement } from 'react';
import type { PressableProps } from 'react-native';

export interface BaseButtonProps extends Omit<PressableProps, 'children'> {
  /*
   * If `true`, the button will be disabled.
   * @default  false
   */
  disabled?: boolean;
  /*
   * @deprecated Use `disabled` instead.
   */
  isDisabled?: boolean;
  colorScheme?: 'cyan' | 'red' | 'green' | 'grey' | 'gold';
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
  variant?: 'solid' | 'outline' | 'ghost';
  pressed?: boolean;
}

export interface ButtonWithoutChildrenProps extends BaseButtonProps {
  children?: never;
  text?: string;
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
  text?: never;
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
  text?: never;
}

export type ButtonProps =
  | ButtonWithStringChildrenProps
  | ButtonWithOtherChildernProps
  | ButtonWithoutChildrenProps;
