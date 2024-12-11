import { SizeProps } from '../../props/size.props';
import { ComponentPropsWithout, RemovedProps } from '../../types/component-props';
import { CheckboxGroupBaseProps } from '../CheckboxGroupBase/CheckboxGroupBase.props';
import { FormFieldGroupProps } from '../FormFieldGroup/FormFieldGroup.props';

export interface CheckboxGroupRootOwnProps {
  name?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: Array<string>;
  value?: Array<string>;
  onValueChange?: (value: Array<string>) => void;
  /** The direction of the checkboxes, will also set the aria-orientation value. */
  direction?: 'column' | 'row'; // TODO: make this responsive?
  /**
   * Set the width of the RadioGroup.
   */
  width?: SizeProps['width'];
}

export interface CheckboxGroupRootProps
  extends CheckboxGroupRootOwnProps,
    ComponentPropsWithout<'div', keyof CheckboxGroupRootOwnProps | RemovedProps> {}

export interface CheckboxGroupProps
  extends Omit<CheckboxGroupRootOwnProps, 'width'>,
    CheckboxGroupBaseProps,
    Omit<FormFieldGroupProps, keyof CheckboxGroupRootOwnProps> {
  /**
   * Set the container width of the RadioGroup children, independent to the width of the
   * parent RadioGroup.
   */
  contentWidth?: SizeProps['width'];
}
