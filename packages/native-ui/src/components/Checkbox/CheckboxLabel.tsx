import React, { forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text } from 'react-native';

import { useCheckboxContext } from './Checkbox.context';
import { Label } from '../Label';
import LabelProps from '../Label/Label.props';

const CheckboxLabel = forwardRef<Text, LabelProps>(({ children, style, ...props }, ref) => {
  const { checked, disabled } = useCheckboxContext();
  const { styles } = useStyles(stylesheet, {
    checked,
    disabled,
  });
  return (
    <Label ref={ref} {...props} style={[styles.text, style]}>
      {children}
    </Label>
  );
});

CheckboxLabel.displayName = 'CheckboxLabel';

const stylesheet = createStyleSheet(({ colors }) => ({
  text: {
    variants: {
      checked: {
        true: {
          color: colors.grey1000,
        },
      },
      disabled: {
        true: {
          color: colors.grey400,
        },
      },
    },
  },
}));

export default CheckboxLabel;
