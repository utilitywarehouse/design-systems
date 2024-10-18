import { CheckboxGroupRootProps } from './CheckboxGroupRoot.props';

import { BaseCheckboxGroupProps } from '../BaseCheckboxGroup';
import { FormFieldGroupOwnProps } from '../FormFieldGroup/FormFieldGroup.props';

export interface CheckboxGroupProps
  extends Pick<
      CheckboxGroupRootProps,
      | 'className'
      | 'disabled'
      | 'direction'
      | 'defaultValue'
      | 'value'
      | 'onValueChange'
      | 'required'
    >,
    BaseCheckboxGroupProps,
    FormFieldGroupOwnProps {
  /**
   * Set the container width of the RadioGroup children, independent to the width of the
   * parent RadioGroup.
   */
  contentWidth?: CheckboxGroupRootProps['width'];
}
