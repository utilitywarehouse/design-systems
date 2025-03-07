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
import FormFieldValid from './FormFieldValid';
import { StyleSheet } from 'react-native-unistyles';

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
export const FormFieldHelperIcon = HelperIcon;
export const FormFieldValidText = HelperText;
export const FormFieldInvalidText = HelperText;

const FormField: FC<FormFieldProps> = ({
  children,
  disabled,
  validationStatus = 'initial',
  readonly,
  showValidationIcon = false,
  label,
  helperText,
  helperIcon,
  helperPosition,
  validText,
  invalidText,
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
        {(!!label || !!helperText) && (
          <View style={styles.labelWrapper}>
            {!!label && <FormFieldLabelText>{label}</FormFieldLabelText>}
            {!!helperText && helperPosition === 'top' && (
              <FormFieldHelper text={helperText} icon={helperIcon} showIcon={!!helperIcon} />
            )}
          </View>
        )}
        {children}
        {!!helperText && helperPosition === 'bottom' && (
          <FormFieldHelper text={helperText} icon={helperIcon} />
        )}
        {!!validText && <FormFieldValid text={validText} showIcon={showValidationIcon} />}
        {!!invalidText && (
          <FormFieldInvalidComponent text={invalidText} showIcon={showValidationIcon} />
        )}
      </FormFieldComponent>
    </FormFieldContext.Provider>
  );
};

const styles = StyleSheet.create(theme => ({
  labelWrapper: {
    gap: theme.space['1'],
  },
}));

export default FormField;
