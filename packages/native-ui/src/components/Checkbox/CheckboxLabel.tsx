import React, { forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text, TextProps } from 'react-native';

import { useCheckboxContext } from './Checkbox.context';

const CheckboxLabel = forwardRef<Text, TextProps>(({ children, style, ...props }, ref) => {
  const { checked, disabled } = useCheckboxContext();
  const { styles } = useStyles(stylesheet, {
    checked,
    disabled,
  });
  return (
    <Text ref={ref} {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
});

CheckboxLabel.displayName = 'CheckboxLabel';

const stylesheet = createStyleSheet(({ lineHeights, fontSizes, fonts, fontWeights, colors }) => ({
  text: {
    color: colors.grey1000,
    lineHeight: lineHeights.lg,
    fontSize: fontSizes.md,
    fontFamily: fonts.body,
    fontWeight: fontWeights.normal,
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
