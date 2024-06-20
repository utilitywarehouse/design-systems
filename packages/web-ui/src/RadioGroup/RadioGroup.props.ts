import { BaseRadioGroupProps } from '../BaseRadioGroup';
import { BoxProps } from '../Box';

export interface RadioGroupProps extends Omit<BaseRadioGroupProps, 'orientation'> {
  /** The direction of the radios, will also set the aria-orientation value. */
  direction?: 'column' | 'row';
  /**
   * Set the width of the RadioGroup children, separate to the width of the
   * entire RadioGroup.
   */
  contentWidth?: BoxProps['width'];
}
