import type { ComponentType } from 'react';
import type { PressableProps } from 'react-native';

export interface IconButtonProps extends Omit<PressableProps, 'children'> {
  /*
   * If `true`, the button will be disabled.
   * @default  false
   */
  disabled?: boolean;
  colorScheme?: 'cyan' | 'red' | 'green' | 'grey' | 'gold';
  size?: 'x-small' | 'small' | 'medium' | 'large';
  inverted?: boolean;
  variant?: 'solid' | 'outline' | 'ghost';
  pressed?: boolean;
  /*
   * The icon to display on the button.
   * @default undefined
   */
  icon?: ComponentType;
  /*
   * If `true`, the button will show a spinner.
   * @default  false
   */
  loading?: boolean;
}
