import { ViewProps } from 'react-native';

interface CheckboxGroupProps extends ViewProps {
  disabled?: boolean;
  value?: string[];
  onChange?: (value: string[]) => void;
  readonly?: boolean;
}

export default CheckboxGroupProps;
