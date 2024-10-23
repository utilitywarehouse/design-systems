import type { ComponentType } from 'react';
import type { PressableProps } from 'react-native';

interface RadioBaseProps extends Omit<PressableProps, 'children'> {
  value: string;
  onChange?: (isSelected: boolean) => void;
  disabled?: boolean;
  validationStatus?: 'valid' | 'invalid' | 'initial';
}

interface RadioWithChildrenProps extends RadioBaseProps {
  children: React.ReactNode;
  label?: never;
  helperText?: never;
  helperIcon?: never;
  invalidText?: never;
  validText?: never;
  showValidationIcon?: never;
}

interface RadioWithoutChildrenProps extends RadioBaseProps {
  children?: never;
  label?: string;
  helperText?: string;
  helperIcon?: ComponentType;
  invalidText?: string;
  validText?: string;
  showValidationIcon?: boolean;
}

type RadioProps = RadioWithChildrenProps | RadioWithoutChildrenProps;

export default RadioProps;
