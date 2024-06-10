import { createFormControl } from '@gluestack-ui/form-control';
import {
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
} from './styled-components';

export const FormField = createFormControl({
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
});

export const FormFieldError = FormField.Error;
export const FormFieldErrorText = FormField.Error.Text;
export const FormFieldErrorIcon = FormField.Error.Icon;
export const FormFieldLabel = FormField.Label;
export const FormFieldLabelText = FormField.Label.Text;
export const FormFieldHelper = FormField.Helper;
export const FormFieldHelperText = FormField.Helper.Text;
