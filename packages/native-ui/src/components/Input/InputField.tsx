import React, { ElementRef, forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { TextInputProps, TextInput, Platform } from 'react-native';
import { useInputContext } from './Input.context';

const InputField = forwardRef<ElementRef<typeof TextInput>, TextInputProps>(
  ({ style, ...props }, ref) => {
    const { disabled, focused = false } = useInputContext();
    const {
      styles,
      theme: { colors },
    } = useStyles(stylesheet, { focused, disabled });

    return (
      <TextInput
        ref={ref}
        placeholderTextColor={disabled ? colors.grey200 : colors.grey600}
        selectionColor={colors.cyan500}
        cursorColor={colors.cyan500}
        aria-disabled={disabled}
        {...props}
        style={[styles.input, style]}
      />
    );
  }
);

InputField.displayName = 'InputField';

const stylesheet = createStyleSheet(({ radii, fontSizes, colors, fontWeights, fonts }) => ({
  input: {
    flex: 1,
    width: Platform.OS === 'web' ? '100%' : 'auto',
    borderTopLeftRadius: radii['2xl'],
    borderTopRightRadius: radii['2xl'],
    borderBottomLeftRadius: radii.none,
    borderBottomRightRadius: radii.none,
    color: colors.grey1000,
    fontSize: fontSizes.lg,
    fontFamily: fonts.body,
    fontWeight: fontWeights.normal,
    variants: {
      focused: {
        true: {
          borderWidth: 0,
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

export default InputField;
