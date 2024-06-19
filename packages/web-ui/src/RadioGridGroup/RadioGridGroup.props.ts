import { StackProps } from '../Stack';
import { BaseRadioGroupProps } from '../BaseRadioGroup';

export interface RadioGridGroupProps extends Omit<BaseRadioGroupProps, 'direction'> {
  /** Sets the number of columns to display the contents in. */
  columns?: StackProps['spacing'];
}
