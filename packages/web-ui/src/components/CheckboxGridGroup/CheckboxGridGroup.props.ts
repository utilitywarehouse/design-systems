import { CheckboxGridGroupRootProps } from './CheckboxGridGroupRoot.props';

import { BaseCheckboxGroupProps } from '../BaseCheckboxGroup';
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
    BaseCheckboxGroupProps,
    FormFieldGroupOwnProps {
  /** Sets the number of columns to display the contents in. */
  columns?: StackProps['spacing'];
  /**
   * Set the container width of the RadioGroup children, independent to the width of the
   * parent RadioGroup.
   */
  contentWidth?: CheckboxGridGroupRootProps['width'];
}
