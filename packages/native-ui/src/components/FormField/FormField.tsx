import { createFormControl } from '@gluestack-ui/form-control';
import { FC, useMemo } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { HelperIcon, HelperText } from '../Helper';
import { FormFieldContext } from './FormField.context';
import FormFieldProps from './FormField.props';
import FormFieldHelperComponent from './FormFieldHelper';
import FormFieldInvalidComponent from './FormFieldInvalid';
import FormFieldLabelComponent from './FormFieldLabel';
import FormFieldRoot from './FormFieldRoot';
import FormFieldValid from './FormFieldValid';

export const FormFieldComponent = createFormControl({
  Root: FormFieldRoot,
  Error: FormFieldInvalidComponent,
  ErrorText: HelperText,
  ErrorIcon: HelperIcon,
  Label: () => null,
  LabelText: FormFieldLabelComponent,
  LabelAstrick: () => null,
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
