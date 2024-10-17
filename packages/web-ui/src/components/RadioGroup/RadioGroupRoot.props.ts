import { type RadioGroupProps as RadixRadioGroupProps } from '@radix-ui/react-radio-group';

import { BoxProps } from '../Box';

export interface RadioGroupRootProps extends Omit<RadixRadioGroupProps, 'dir' | 'orientation'> {
  /** The direction of the radios, will also set the aria-orientation value. */
  direction?: 'column' | 'row';
  /**
   * Set the width of the RadioGroup children, separate to the width of the
   * entire RadioGroup.
   */
  width?: BoxProps['width'];
}
