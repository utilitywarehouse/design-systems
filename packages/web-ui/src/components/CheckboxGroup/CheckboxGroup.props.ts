import { CheckboxGroupRootProps } from './CheckboxGroupRoot.props';

import { CheckboxGroupBaseProps } from '../CheckboxGroupBase';
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
    CheckboxGroupBaseProps,
    FormFieldGroupOwnProps {
  /**
   * Set the container width of the RadioGroup children, independent to the width of the
   * parent RadioGroup.
   */
  contentWidth?: CheckboxGroupRootProps['width'];
}
