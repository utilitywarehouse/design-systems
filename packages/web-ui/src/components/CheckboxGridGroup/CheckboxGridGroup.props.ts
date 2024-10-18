import { CheckboxGridGroupRootProps } from './CheckboxGridGroupRoot.props';

import { CheckboxGroupBaseProps } from '../CheckboxGroupBase';
import { FormFieldGroupOwnProps } from '../FormFieldGroup/FormFieldGroup.props';
import type { StackProps } from '../Stack';

export interface CheckboxGridGroupProps
  extends Pick<
      CheckboxGridGroupRootProps,
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
  /** Sets the number of columns to display the contents in. */
  columns?: StackProps['spacing'];
  /**
   * Set the container width of the RadioGroup children, independent to the width of the
   * parent RadioGroup.
   */
  contentWidth?: CheckboxGridGroupRootProps['width'];
}
