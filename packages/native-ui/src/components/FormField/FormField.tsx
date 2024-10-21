import React, { FC, useMemo } from 'react';
import { createFormControl } from '@gluestack-ui/form-control';
import { FormFieldContext } from './FormField.context';
import FormFieldProps from './FormField.props';
import FormFieldRoot from './FormFieldRoot';
import FormFieldInvalidComponent from './FormFieldInvalid';
import FormFieldHelperComponent from './FormFieldHelper';
import FormFieldLabelComponent from './FormFieldLabel';
import { HelperIcon, HelperText } from '../Helper';
import { View } from 'react-native';

export const FormFieldComponent = createFormControl({
  Root: FormFieldRoot,
  Error: FormFieldInvalidComponent,
  ErrorText: HelperText,
  ErrorIcon: HelperIcon,
  Label: View,
  LabelText: FormFieldLabelComponent,
  LabelAstrick: View,
  Helper: FormFieldHelperComponent,
  HelperText: HelperText,
});

export const FormFieldLabel = FormFieldComponent.Label;
export const FormFieldLabelText = FormFieldComponent.Label.Text;
export const FormFieldHelper = FormFieldComponent.Helper;
export const FormFieldHelperText = FormFieldComponent.Helper.Text;

const FormField: FC<FormFieldProps> = ({
  children,
  disabled,
  validationStatus = 'initial',
  readonly,
  showValidationIcon = false,
  ...props
}) => {
  const value = useMemo(
    () => ({
      validationStatus,
      disabled,
      readonly,
      showValidationIcon,
    }),
    [validationStatus, disabled, readonly, showValidationIcon]
  );

  return (
    <FormFieldContext.Provider value={value}>
      <FormFieldComponent {...props} isDisabled={disabled} isReadOnly={readonly}>
        {children}
      </FormFieldComponent>
    </FormFieldContext.Provider>
  );
};

export default FormField;
