import { StackProps } from '../Stack';
import { RadioGroupProps } from '../RadioGroup';

export interface RadioGridGroupProps extends Omit<RadioGroupProps, 'direction'> {
  /** Sets the number of columns to display the contents in. */
  columns?: StackProps['spacing'];
}
