import type { PressableProps } from 'react-native';

interface RadioBaseProps extends Omit<PressableProps, 'children'> {
  value: string;
  onChange?: (isSelected: boolean) => void;
  disabled?: boolean;
}

interface RadioWithChildrenProps extends RadioBaseProps {
  children: React.ReactNode;
  label?: never;
}

interface RadioWithoutChildrenProps extends RadioBaseProps {
  children?: never;
  label?: string;
}

type RadioProps = RadioWithChildrenProps | RadioWithoutChildrenProps;

export default RadioProps;
