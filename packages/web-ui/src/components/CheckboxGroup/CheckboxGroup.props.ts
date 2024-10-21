import { CheckboxGroupRootOwnProps } from './CheckboxGroupRoot.props';

import { CheckboxGroupBaseProps } from '../CheckboxGroupBase';
import { FormFieldGroupProps } from '../FormFieldGroup/FormFieldGroup.props';

export interface CheckboxGroupProps
  extends Omit<CheckboxGroupRootOwnProps, 'width'>,
    CheckboxGroupBaseProps,
    Omit<FormFieldGroupProps, keyof CheckboxGroupRootOwnProps> {
  /**
   * Set the container width of the RadioGroup children, independent to the width of the
   * parent RadioGroup.
   */
  contentWidth?: CheckboxGroupRootOwnProps['width'];
}
