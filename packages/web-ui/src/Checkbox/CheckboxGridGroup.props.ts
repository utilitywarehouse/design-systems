import { StackProps } from '../Stack';
import { BaseCheckboxGroupProps } from './BaseCheckboxGroup.props';

export interface CheckboxGridGroupProps extends Omit<BaseCheckboxGroupProps, 'direction'> {
  /** Sets the number of columns to display the contents in. */
  columns?: StackProps['spacing'];
}
