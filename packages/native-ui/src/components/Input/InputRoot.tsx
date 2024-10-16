import React, { forwardRef, useMemo } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { View } from 'react-native';
import InputProps from './Input.props';
import { InputContext } from './Input.context';

const InputRoot = forwardRef<
  View,
  InputProps & { states: { focus?: boolean; disabled?: boolean; readonly?: boolean } }
>(({ children, style, states, validationStatus, showValidationIcon, ...props }, ref) => {
  const { focus = false, disabled = false, readonly = false } = states || {};
  const { styles } = useStyles(stylesheet, {
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
    <InputContext.Provider value={value}>
      <View
        ref={ref}
        {...props}
        style={[
          styles.container,
          styles.extraStyles(validationStatus, focus, disabled, readonly),
          style,
        ]}
      >
        {children}
      </View>
    </InputContext.Provider>
  );
});

InputRoot.displayName = 'InputRoot';

const stylesheet = createStyleSheet(({ space, colors, radii, colorMode, borderWidths }) => ({
  container: {
    borderWidth: borderWidths[2],
    borderTopColor: colors.grey500,
    borderLeftColor: colors.grey500,
    borderRightColor: colors.grey500,
    borderBottomColor: colors.grey900,
    height: space['14'],
    borderTopLeftRadius: radii['2xl'],
    borderTopRightRadius: radii['2xl'],
    borderBottomLeftRadius: radii.none,
    borderBottomRightRadius: radii.none,
    flexDirection: 'row',
    overflow: 'hidden',
    alignContent: 'center',
    paddingHorizontal: space['4'],
    backgroundColor: colorMode === 'light' ? colors.white : colors.grey25,
    gap: space['2'],
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
        },
      },
    },
  },
  extraStyles: (
    validationStatus: InputProps['validationStatus'],
    focus: boolean,
    disabled: boolean,
    readonly: boolean
  ) => {
    if (disabled || readonly) {
      return {};
    }
    if (validationStatus === 'invalid' && focus) {
      return {
        borderTopColor: colorMode === 'light' ? colors.red500 : colors.red700,
        borderLeftColor: colorMode === 'light' ? colors.red500 : colors.red700,
        borderRightColor: colorMode === 'light' ? colors.red500 : colors.red700,
        borderBottomColor: colorMode === 'light' ? colors.red500 : colors.red700,
      };
    }
    if (validationStatus === 'valid' && focus) {
      return {
        borderTopColor: colorMode === 'light' ? colors.green500 : colors.green700,
        borderLeftColor: colorMode === 'light' ? colors.green500 : colors.green700,
        borderRightColor: colorMode === 'light' ? colors.green500 : colors.green700,
        borderBottomColor: colorMode === 'light' ? colors.green500 : colors.green700,
      };
    }
    return {};
  },
}));

export default InputRoot;
