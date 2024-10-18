import { FormField } from './FormField';
export { FormFieldProvider as FormField, useFormFieldContext } from './FormField';
export { default as FormFieldValid } from './FormFieldValid';
export { default as FormFieldInvalid } from './FormFieldInvalid';
export {
  HelperIcon as FormFieldHelperIcon,
  ValidIcon as FormFieldValidIcon,
  ValidText as FormFieldValidText,
  InvalidIcon as FormFieldInvalidIcon,
  InvalidText as FormFieldInvalidText,
} from './styled-components';

export const FormFieldError = FormField.Error;
export const FormFieldErrorText = FormField.Error.Text;
export const FormFieldErrorIcon = FormField.Error.Icon;
export const FormFieldLabel = FormField.Label;
export const FormFieldLabelText = FormField.Label.Text;
export const FormFieldHelper = FormField.Helper;
export const FormFieldHelperText = FormField.Helper.Text;
