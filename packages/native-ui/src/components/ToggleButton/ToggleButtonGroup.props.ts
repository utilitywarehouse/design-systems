import { ViewProps } from 'react-native';

export interface ToggleButtonGroupProps<T = string | number | boolean>
  extends Omit<ViewProps, 'onChange'> {
  /**
   * The currently selected value
   */
  value: T;

  /**
   * Callback fired when the value changes
   */
  onChange?: (value: T) => void;
  disabled?: boolean;
}
