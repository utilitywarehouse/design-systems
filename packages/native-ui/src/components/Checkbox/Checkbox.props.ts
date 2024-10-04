import type { PressableProps } from 'react-native';

interface CheckboxBaseProps extends Omit<PressableProps, 'children'> {
  value: string;
  onChange?: (isSelected: boolean) => void;
  disabled?: boolean;
  checked?: boolean;
}

interface CheckboxWithChildrenProps extends CheckboxBaseProps {
  children: React.ReactNode;
  label?: never;
}

interface CheckboxWithoutChildrenProps extends CheckboxBaseProps {
  children?: never;
  label?: string;
}

type CheckboxProps = CheckboxWithChildrenProps | CheckboxWithoutChildrenProps;

export default CheckboxProps;
