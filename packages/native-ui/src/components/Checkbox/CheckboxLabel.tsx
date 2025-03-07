import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from 'react-native';
import { useCheckboxContext } from './Checkbox.context';
import { Label } from '../Label';
import LabelProps from '../Label/Label.props';
import { useFormFieldContext } from '../FormField';

const CheckboxLabel = forwardRef<Text, LabelProps>(({ children, style, ...props }, ref) => {
  const { checked, disabled } = useCheckboxContext();
  styles.useVariants({
    checked,
    disabled,
  });
  const { validationStatus } = useFormFieldContext();
  const isNested = !!validationStatus;
  return (
    <Label ref={ref} nested={isNested} {...props} style={[styles.text, style]}>
      {children}
    </Label>
  );
});

CheckboxLabel.displayName = 'CheckboxLabel';

const styles = StyleSheet.create(theme => ({
  text: {
    variants: {
      checked: {
        true: {
          color: theme.colors.grey1000,
        },
      },
      disabled: {
        true: {
          color: theme.colors.grey400,
        },
      },
    },
  },
}));

export default CheckboxLabel;
