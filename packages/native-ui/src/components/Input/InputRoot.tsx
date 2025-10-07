import { useMemo } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { InputContext } from './Input.context';
import InputProps from './Input.props';

const InputRoot = ({
  children,
  style,
  states,
  validationStatus,
  showValidationIcon,
  ...props
}: InputProps & { states?: { focus?: boolean; disabled?: boolean; readonly?: boolean } }) => {
  const { focus = false, disabled = false, readonly = false } = states || {};
  styles.useVariants({ validationStatus, focus, disabled, readonly });

  const value = useMemo(
    () => ({ focused: focus, disabled, readonly, validationStatus, showValidationIcon }),
    [focus, disabled, readonly, validationStatus, showValidationIcon]
  );

  return (
    <InputContext.Provider value={value}>
      <View {...props} style={[styles.container, style]}>
        {children}
      </View>
    </InputContext.Provider>
  );
};

InputRoot.displayName = 'InputRoot';

const styles = StyleSheet.create(theme => ({
  container: {
    borderWidth: theme.borderWidth[2],
    borderTopColor: theme.colors.grey500,
    borderLeftColor: theme.colors.grey500,
    borderRightColor: theme.colors.grey500,
    borderBottomColor: theme.colors.grey900,
    height: theme.space['700'],
    borderTopLeftRadius: theme.borderRadius.xl,
    borderTopRightRadius: theme.borderRadius.xl,
    borderBottomLeftRadius: theme.borderRadius.none,
    borderBottomRightRadius: theme.borderRadius.none,
    flexDirection: 'row',
    overflow: 'hidden',
    alignContent: 'center',
    paddingHorizontal: theme.space['200'],
    backgroundColor: theme.colorMode === 'light' ? theme.colors.white : theme.colors.grey100,
    gap: theme.space['100'],
    variants: {
      focus: {
        true: {
          borderTopColor: theme.colorMode === 'light' ? theme.colors.cyan500 : theme.colors.cyan700,
          borderLeftColor:
            theme.colorMode === 'light' ? theme.colors.cyan500 : theme.colors.cyan700,
          borderRightColor:
            theme.colorMode === 'light' ? theme.colors.cyan500 : theme.colors.cyan700,
          borderBottomColor:
            theme.colorMode === 'light' ? theme.colors.cyan500 : theme.colors.cyan700,
        },
      },
      validationStatus: {
        invalid: {
          borderBottomColor:
            theme.colorMode === 'light' ? theme.colors.red500 : theme.colors.red700,
        },
        valid: {
          borderBottomColor:
            theme.colorMode === 'light' ? theme.colors.green500 : theme.colors.green700,
        },
        initial: {},
      },
      disabled: {
        true: {
          borderTopColor: theme.colors.grey400,
          borderLeftColor: theme.colors.grey400,
          borderRightColor: theme.colors.grey400,
          borderBottomColor: theme.colors.grey600,
          backgroundColor: theme.colors.grey50,
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
        validationStatus: 'invalid',
        focus: true,
        styles: {
          borderTopColor: theme.colorMode === 'light' ? theme.colors.red500 : theme.colors.red700,
          borderLeftColor: theme.colorMode === 'light' ? theme.colors.red500 : theme.colors.red700,
          borderRightColor: theme.colorMode === 'light' ? theme.colors.red500 : theme.colors.red700,
          borderBottomColor:
            theme.colorMode === 'light' ? theme.colors.red500 : theme.colors.red700,
        },
      },
      {
        validationStatus: 'valid',
        focus: true,
        styles: {
          borderTopColor:
            theme.colorMode === 'light' ? theme.colors.green500 : theme.colors.green700,
          borderLeftColor:
            theme.colorMode === 'light' ? theme.colors.green500 : theme.colors.green700,
          borderRightColor:
            theme.colorMode === 'light' ? theme.colors.green500 : theme.colors.green700,
          borderBottomColor:
            theme.colorMode === 'light' ? theme.colors.green500 : theme.colors.green700,
        },
      },
    ],
  },
}));

export default InputRoot;
