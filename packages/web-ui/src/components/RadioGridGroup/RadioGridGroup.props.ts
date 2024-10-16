import { RadioGridGroupRootProps } from './RadioGridGroupRoot.props';

import { FormFieldGroupProps } from '../FormFieldGroup';

export interface RadioGridGroupProps
  extends Pick<
      RadioGridGroupRootProps,
      'columns' | 'loop' | 'defaultValue' | 'value' | 'onValueChange' | 'required'
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
  contentWidth?: RadioGridGroupRootProps['width'];
}
