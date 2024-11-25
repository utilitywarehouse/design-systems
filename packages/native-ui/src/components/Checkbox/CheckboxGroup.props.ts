import { ViewProps } from 'react-native';

interface CheckboxGroupProps extends ViewProps {
  disabled?: boolean;
  value?: Array<string>;
  onChange?: (value: Array<string>) => void;
  readonly?: boolean;
  validationStatus?: 'valid' | 'invalid' | 'initial';
}

export default CheckboxGroupProps;
