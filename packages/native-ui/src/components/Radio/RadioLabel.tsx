import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from 'react-native';

import { useRadioContext } from './Radio.context';
import { Label } from '../Label';
import LabelProps from '../Label/Label.props';
import { useFormFieldContext } from '../FormField';

const RadioLabel = forwardRef<Text, LabelProps>(({ children, style, ...props }, ref) => {
  const { checked, disabled } = useRadioContext();
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

RadioLabel.displayName = 'RadioLabel';

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

export default RadioLabel;
