import { RadioGroupRootProps } from './RadioGroupRoot.props';

import { FormFieldGroupProps } from '../FormFieldGroup/FormFieldGroup.props';

export interface RadioGroupProps
  extends Omit<RadioGroupRootProps, 'width' | keyof FormFieldGroupProps>,
    Pick<RadioGroupRootProps, 'defaultValue'>,
    Omit<FormFieldGroupProps, 'defaultValue'> {
  /**
   * Set the container width of the RadioGroup children, independent to the width of the
   * parent RadioGroup.
   */
  contentWidth?: RadioGroupRootProps['width'];
}
