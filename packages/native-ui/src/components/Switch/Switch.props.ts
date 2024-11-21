import type { AccessibilityProps, PressableProps } from 'react-native';

interface SwitchProps extends PressableProps, AccessibilityProps {
  value: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium';
}

export default SwitchProps;
