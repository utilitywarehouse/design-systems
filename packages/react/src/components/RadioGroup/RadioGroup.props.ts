import type { RadioGroupProps as RadixRadioGroupProps } from '@radix-ui/react-radio-group';
import type { FormFieldGroupProps } from '../FormFieldGroup/FormFieldGroup.props';
import { BoxProps } from '../Box/Box.props';

export interface RadioGroupRootProps extends Omit<RadixRadioGroupProps, 'dir' | 'orientation'> {
  /** The direction of the radios, will also set the aria-orientation value. */
  direction?: 'column' | 'row';
  /**
   * Set the width of the RadioGroup.
   */
  width?: BoxProps['width'];
}

export interface RadioGroupProps
  extends Omit<RadioGroupRootProps, 'width' | keyof FormFieldGroupProps>,
    FormFieldGroupProps,
    Pick<RadioGroupRootProps, 'defaultValue'> {
  /**
   * Set the container width of the RadioGroup children, independent to the width of the
   * parent RadioGroup.
   */
  contentWidth?: RadioGroupRootProps['width'];
}
