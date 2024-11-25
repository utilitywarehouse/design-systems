import React, { forwardRef } from 'react';
import { Text } from '../Text';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text as RNText } from 'react-native';
import TextProps from '../Text/Text.props';
import { useHelperContext } from './HelperContext';

const HelperText = forwardRef<RNText, TextProps>(({ children, style, ...props }, ref) => {
  const { validationStatus, disabled } = useHelperContext();
  const { styles } = useStyles(stylesheet, { validationStatus, disabled });

  return (
    <Text ref={ref} style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
});

HelperText.displayName = 'HelperText';

const stylesheet = createStyleSheet(({ colors }) => ({
  text: {
    color: colors.grey800,
    variants: {
      validationStatus: {
        valid: {
          color: colors.green600,
        },
        invalid: {
          color: colors.red600,
        },
        initial: {},
      },
      disabled: {
        true: {
          color: colors.grey400,
        },
      },
    },
  },
}));

export default HelperText;
