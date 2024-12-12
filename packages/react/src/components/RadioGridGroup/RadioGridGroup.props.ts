import { ColumnsProps } from '../../props/columns.props';
import { SizeProps } from '../../props/size.props';
import { FormFieldGroupProps } from '../FormFieldGroup/FormFieldGroup.props';
import { RadioGroupProps, RadioGroupRootProps } from '../RadioGroup/RadioGroup.props';

export interface RadioGridGroupRootProps
  extends Omit<RadioGroupRootProps, 'direction'>,
    ColumnsProps {}

export interface RadioGridGroupProps
  extends Omit<RadioGridGroupRootProps, 'width' | keyof FormFieldGroupProps>,
    Pick<RadioGroupProps, 'defaultValue'>,
    FormFieldGroupProps {
  /**
   * Set the container width of the RadioGroup children, independent to the width of the
   * parent RadioGridGroup.
   */
  contentWidth?: SizeProps['width'];
}
