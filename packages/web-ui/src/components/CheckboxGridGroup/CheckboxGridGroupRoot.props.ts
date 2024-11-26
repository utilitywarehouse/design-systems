import { CheckboxGroupRootProps } from '../CheckboxGroup/CheckboxGroupRoot.props';
import { StackProps } from '../Stack';

export interface CheckboxGridGroupRootProps extends Omit<CheckboxGroupRootProps, 'direction'> {
  /** Sets the number of columns to display the contents in. */
  columns?: StackProps['spacing'];
}
