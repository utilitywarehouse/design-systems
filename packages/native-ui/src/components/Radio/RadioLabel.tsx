import React, { forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text } from 'react-native';

import { useRadioContext } from './Radio.context';
import { Label } from '../Label';
import LabelProps from '../Label/Label.props';

const RadioLabel = forwardRef<Text, LabelProps>(({ children, style, ...props }, ref) => {
  const { checked, disabled } = useRadioContext();
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

RadioLabel.displayName = 'RadioLabel';

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

export default RadioLabel;
