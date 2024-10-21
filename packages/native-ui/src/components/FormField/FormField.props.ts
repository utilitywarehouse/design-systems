import { ViewProps } from 'react-native';

export interface FormFieldBaseProps {
  validationStatus?: 'valid' | 'invalid' | 'initial';
  disabled?: boolean;
  readonly?: boolean;
  showValidationIcon?: boolean;
}

interface FormFieldProps extends FormFieldBaseProps, ViewProps {}

export default FormFieldProps;
