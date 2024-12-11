import { ColumnsProps } from '../../props/columns.props';
import { SizeProps } from '../../props/size.props';
import { CheckboxGroupRootProps } from '../CheckboxGroup/CheckboxGroup.props';
import { CheckboxGroupBaseProps } from '../CheckboxGroupBase/CheckboxGroupBase.props';
import { FormFieldGroupProps } from '../FormFieldGroup/FormFieldGroup.props';

export interface CheckboxGridGroupRootProps
  extends Omit<CheckboxGroupRootProps, 'direction'>,
    ColumnsProps {}

export interface CheckboxGridGroupProps
  extends Omit<CheckboxGridGroupRootProps, 'width' | keyof FormFieldGroupProps>,
    CheckboxGroupBaseProps,
    FormFieldGroupProps {
  /**
   * Set the container width of the CheckboxGridGroup children, independent to the width of the
   * parent RadioGroup.
   */
  contentWidth?: SizeProps['width'];
}
