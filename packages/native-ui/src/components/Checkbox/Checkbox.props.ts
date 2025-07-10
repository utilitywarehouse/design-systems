import type { ComponentType } from 'react';
import type { PressableProps, ViewProps } from 'react-native';

type CheckboxBaseProps = {
  onChange?: (isSelected: boolean) => void;
  disabled?: boolean;
  validationStatus?: 'valid' | 'invalid' | 'initial';
} & (
  | {
      value?: string | number | boolean;
      checked: boolean;
    }
  | {
      value: string | number | boolean;
      checked?: boolean;
    }
) &
  Omit<PressableProps, 'children'>;

type CheckboxWithChildrenProps = {
  children: ViewProps['children'];
  label?: never;
  helperText?: never;
  helperIcon?: never;
  invalidText?: never;
  validText?: never;
  showValidationIcon?: never;
} & CheckboxBaseProps;

type CheckboxWithoutChildrenProps = {
  children?: never;
  label?: string;
  helperText?: string;
  helperIcon?: ComponentType;
  invalidText?: string;
  validText?: string;
  showValidationIcon?: boolean;
} & CheckboxBaseProps;

type CheckboxProps = CheckboxWithChildrenProps | CheckboxWithoutChildrenProps;

export default CheckboxProps;
