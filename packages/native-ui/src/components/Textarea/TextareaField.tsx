import React, { ElementRef, forwardRef } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { TextInputProps, TextInput, Platform } from 'react-native';
import { useTextareaContext } from './Textarea.context';
import { useTheme } from '../../hooks';

const TextareaField = forwardRef<ElementRef<typeof TextInput>, TextInputProps>(
  ({ style, numberOfLines = 4, ...props }, ref) => {
    const { disabled, focused = false } = useTextareaContext();
    const { colors } = useTheme();
    styles.useVariants({ focused, disabled });

    return (
      <TextInput
        ref={ref}
        placeholderTextColor={disabled ? colors.grey200 : colors.grey600}
        selectionColor={colors.cyan500}
        cursorColor={colors.cyan500}
        aria-disabled={disabled}
        numberOfLines={numberOfLines}
        {...props}
        style={[styles.input, style]}
      />
    );
  }
);

TextareaField.displayName = 'TextareaField';

const styles = StyleSheet.create(({ borderRadius, fontSize, colors, fontWeight, fontFamily }) => ({
  input: {
    textAlignVertical: 'top',
    flex: 1,
    width: Platform.OS === 'web' ? '100%' : 'auto',
    borderRadius: borderRadius.none,
    color: colors.grey1000,
    fontSize: fontSize['150'],
    fontFamily: fontFamily.body,
    fontWeight: fontWeight.regular,
    marginTop: Platform.OS === 'ios' ? -4 : 0,
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

export default TextareaField;
