import { PressableProps, ViewProps } from 'react-native';

export interface ToggleButtonProps extends Omit<PressableProps, 'children'> {
  children: ViewProps['children'];
  /**
   * The value associated with this button
   */
  value: string | number | boolean;
  disabled?: boolean;
}
