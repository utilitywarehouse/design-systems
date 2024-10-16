import { type RadioGroupProps as RadixRadioGroupProps } from '@radix-ui/react-radio-group';

import { BoxProps } from '../Box';
import { StackProps } from '../Stack';

export interface RadioGridGroupRootProps extends Omit<RadixRadioGroupProps, 'dir' | 'orientation'> {
  /** Sets the number of columns to display the contents in. */
  columns?: StackProps['spacing']; // TODO: use responsive CSS classes to implement this
  width?: BoxProps['width'];
}
