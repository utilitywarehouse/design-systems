import { FormFieldGroupProps } from './FormFieldGroup.props';
import { RadioGroupRootProps } from './RadioGroupRoot.props';

export interface RadioGroupProps
  extends Pick<
      RadioGroupRootProps,
      'direction' | 'loop' | 'defaultValue' | 'value' | 'onValueChange' | 'required'
    >,
    Pick<
      FormFieldGroupProps,
      | 'className'
      | 'name'
      | 'disabled'
      | 'label'
      | 'helperText'
      | 'helperTextPosition'
      | 'showHelperTextIcon'
      | 'error'
      | 'errorMessage'
      | 'showErrorMessageIcon'
    > {
  /**
   * Set the container width of the RadioGroup children, independent to the width of the
   * parent RadioGroup.
   */
  contentWidth?: RadioGroupRootProps['width'];
}
