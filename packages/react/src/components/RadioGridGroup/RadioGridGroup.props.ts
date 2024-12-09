import { PropDef } from '../../props/prop-def';
import { Responsive } from '../../types/responsive';
import { FormFieldGroupProps } from '../FormFieldGroup/FormFieldGroup.props';
import { RadioGroupProps, RadioGroupRootProps } from '../RadioGroup/RadioGroup.props';

export const radioGridGroupPropDefs = {
  columns: { className: 'columns', responsive: true },
} satisfies {
  columns: PropDef<number>;
};

export interface RadioGridGroupRootProps extends RadioGroupRootProps {
  /** Sets the number of columns to display the contents in. */
  columns?: Responsive<number>;
}

export interface RadioGridGroupProps
  extends Omit<RadioGridGroupRootProps, 'width' | 'direction' | keyof FormFieldGroupProps>,
    Pick<RadioGroupProps, 'defaultValue' | 'contentWidth'>,
    FormFieldGroupProps {}
