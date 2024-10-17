import { BaseRadioGroupProps } from '../BaseRadioGroup';
import { StackProps } from '../Stack';

export interface RadioGridGroupProps extends Omit<BaseRadioGroupProps, 'direction'> {
  /** Sets the number of columns to display the contents in. */
  columns?: StackProps['spacing'];
}
