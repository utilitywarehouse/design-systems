import { ViewProps } from 'react-native';

interface RadioGroupProps extends ViewProps {
  disabled?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export default RadioGroupProps;
