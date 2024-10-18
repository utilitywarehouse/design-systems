import { RadioGroupRootProps } from './RadioGroupRoot.props';

import { FormFieldGroupOwnProps } from '../FormFieldGroup/FormFieldGroup.props';

export interface RadioGroupProps
  extends Pick<
      RadioGroupRootProps,
      | 'className'
      | 'name'
      | 'direction'
      | 'loop'
      | 'defaultValue'
      | 'value'
      | 'onValueChange'
      | 'required'
      | 'disabled'
    >,
    FormFieldGroupOwnProps {
  /**
   * Set the container width of the RadioGroup children, independent to the width of the
   * parent RadioGroup.
   */
  contentWidth?: RadioGroupRootProps['width'];
}
