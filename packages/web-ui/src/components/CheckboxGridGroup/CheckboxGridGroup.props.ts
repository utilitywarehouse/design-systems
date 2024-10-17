import { BaseCheckboxGroupProps } from '../BaseCheckboxGroup';
import type { StackProps } from '../Stack';

export interface CheckboxGridGroupProps extends Omit<BaseCheckboxGroupProps, 'direction'> {
  /** Sets the number of columns to display the contents in. */
  columns?: StackProps['spacing'];
}
