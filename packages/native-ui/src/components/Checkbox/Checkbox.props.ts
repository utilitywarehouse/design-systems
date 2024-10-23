import type { ComponentType } from 'react';
import type { PressableProps } from 'react-native';

interface CheckboxBaseProps extends Omit<PressableProps, 'children'> {
  value: string;
  onChange?: (isSelected: boolean) => void;
  disabled?: boolean;
  checked?: boolean;
  validationStatus?: 'valid' | 'invalid' | 'initial';
}

interface CheckboxWithChildrenProps extends CheckboxBaseProps {
  children: React.ReactNode;
  label?: never;
  helperText?: never;
  helperIcon?: never;
  invalidText?: never;
  validText?: never;
  showValidationIcon?: never;
}

interface CheckboxWithoutChildrenProps extends CheckboxBaseProps {
  children?: never;
  label?: string;
  helperText?: string;
  helperIcon?: ComponentType;
  invalidText?: string;
  validText?: string;
  showValidationIcon?: boolean;
}

type CheckboxProps = CheckboxWithChildrenProps | CheckboxWithoutChildrenProps;

export default CheckboxProps;
