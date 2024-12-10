import { CheckboxGroupBaseProps } from '../CheckboxGroupBase/CheckboxGroupBase.props';
import { FormFieldGroupProps } from '../FormFieldGroup/FormFieldGroup.props';
import { CheckboxGroupRootOwnProps } from './CheckboxGroupRoot.props';

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
