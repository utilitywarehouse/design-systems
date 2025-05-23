/* eslint-disable  @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { forwardRef } from 'react';
import { Text, type TextProps } from 'react-native';
import { useToggleButtonContext } from './ToggleButton.context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useToggleButtonGroupContext } from './ToggleButtonGroup.context';

const ToggleButtonText = forwardRef<Text, TextProps>(({ children, ...props }, ref) => {
  const { value: contextVal, disabled: contextDisabled, size } = useToggleButtonGroupContext();
  const { value, disabled } = useToggleButtonContext();
  const isDisabled = disabled || contextDisabled;
  const isActive = value === contextVal;
  const { styles } = useStyles(stylesheet, { disabled: isDisabled, active: isActive, size });
  return (
    <Text
      ref={ref}
      {...props}
      style={[styles.text, styles.extraStyles(isDisabled, isActive), props.style]}
    >
      {children}
    </Text>
  );
});

ToggleButtonText.displayName = 'ToggleButtonText';

const stylesheet = createStyleSheet(({ isLight, colors, fontWeights, fonts, fontSizes }) => ({
  text: {
    fontWeight: fontWeights.medium,
    fontFamily: fonts.body,
    textAlign: 'center',
    color: isLight ? colors.grey1000 : colors.grey800,
    variants: {
      disabled: {
        true: {
          color: colors.grey400,
        },
      },
      size: {
        small: {
          fontSize: fontSizes.sm,
        },
        base: {
          fontSize: fontSizes.md,
        },
      },
      active: {
        true: {
          color: isLight ? colors.grey1000 : colors.grey25,
        },
      },
    },
  },
  extraStyles: (disabled, active) =>
    disabled && active
      ? {
          color: isLight ? colors.cyan300 : colors.grey400,
        }
      : {},
}));

export default ToggleButtonText;
