import React, { forwardRef, useMemo } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { View } from 'react-native';
import TextareaProps from './Textarea.props';
import { TextareaContext } from './Textarea.context';

const TextareaRoot = forwardRef<
  View,
  TextareaProps & { states?: { focus?: boolean; disabled?: boolean; readonly?: boolean } }
>(({ children, style, states, validationStatus, showValidationIcon, ...props }, ref) => {
  const { focus = false, disabled = false, readonly = false } = states || {};
  styles.useVariants({
    focus,
    disabled,
    readonly,
    validationStatus,
  });

  const value = useMemo(
    () => ({ focused: focus, disabled, readonly, validationStatus, showValidationIcon }),
    [focus, disabled, readonly, validationStatus, showValidationIcon]
  );

  return (
    <TextareaContext.Provider value={value}>
      <View ref={ref} {...props} style={[styles.container, style]}>
        {children}
      </View>
    </TextareaContext.Provider>
  );
});

TextareaRoot.displayName = 'TextareaRoot';

const styles = StyleSheet.create(({ space, colors, borderRadius, colorMode, borderWidth }) => ({
  container: {
    borderWidth: borderWidth[2],
    borderTopColor: colors.grey500,
    borderLeftColor: colors.grey500,
    borderRightColor: colors.grey500,
    borderBottomColor: colors.grey900,
    borderTopLeftRadius: borderRadius['xl'],
    borderTopRightRadius: borderRadius['xl'],
    borderBottomLeftRadius: borderRadius.none,
    borderBottomRightRadius: borderRadius.none,
    flexDirection: 'row',
    overflow: 'hidden',
    alignContent: 'flex-start',
    padding: space['200'],
    backgroundColor: colorMode === 'light' ? colors.white : colors.grey100,
    gap: space['100'],
    variants: {
      focus: {
        true: {
          borderTopColor: colorMode === 'light' ? colors.cyan500 : colors.cyan700,
          borderLeftColor: colorMode === 'light' ? colors.cyan500 : colors.cyan700,
          borderRightColor: colorMode === 'light' ? colors.cyan500 : colors.cyan700,
          borderBottomColor: colorMode === 'light' ? colors.cyan500 : colors.cyan700,
        },
      },
      validationStatus: {
        invalid: {
          borderBottomColor: colorMode === 'light' ? colors.red500 : colors.red700,
        },
        valid: {
          borderBottomColor: colorMode === 'light' ? colors.green500 : colors.green700,
        },
        initial: {},
      },
      disabled: {
        true: {
          borderTopColor: colors.grey400,
          borderLeftColor: colors.grey400,
          borderRightColor: colors.grey400,
          borderBottomColor: colors.grey600,
          backgroundColor: colors.grey50,
        },
      },
      readonly: {
        true: {
          borderTopColor: 'transparent',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent',
          paddingHorizontal: 0,
          backgroundColor: 'transparent',
        },
      },
    },
    compoundVariants: [
      {
        focus: true,
        validationStatus: 'invalid',
        styles: {
          borderTopColor: colorMode === 'light' ? colors.red500 : colors.red700,
          borderLeftColor: colorMode === 'light' ? colors.red500 : colors.red700,
          borderRightColor: colorMode === 'light' ? colors.red500 : colors.red700,
          borderBottomColor: colorMode === 'light' ? colors.red500 : colors.red700,
        },
      },
      {
        focus: true,
        validationStatus: 'valid',
        styles: {
          borderTopColor: colorMode === 'light' ? colors.green500 : colors.green700,
          borderLeftColor: colorMode === 'light' ? colors.green500 : colors.green700,
          borderRightColor: colorMode === 'light' ? colors.green500 : colors.green700,
          borderBottomColor: colorMode === 'light' ? colors.green500 : colors.green700,
        },
      },
    ],
  },
}));

export default TextareaRoot;
