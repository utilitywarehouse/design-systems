/* eslint-disable  @typescript-eslint/no-unsafe-assignment */
import React, { forwardRef, PropsWithChildren, useMemo } from 'react';
import type { IconButtonProps } from './IconButton.props';
import { Pressable, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { IconButtonContext } from './IconButton.context';
import { PressableRef } from '../../types';

const IconButtonRoot = forwardRef<
  PressableRef,
  PropsWithChildren<IconButtonProps & { states?: { active?: boolean; disabled?: boolean } }>
>(
  (
    {
      children,
      colorScheme = 'cyan',
      variant = 'solid',
      size = 'medium',
      inverted = false,
      states,
      ...props
    },
    ref
  ) => {
    const { active, disabled } = states || {};
    styles.useVariants({ colorScheme, variant, size, inverted, disabled, active });
    const value = useMemo(
      () => ({ colorScheme, variant, size, inverted, disabled, active }),
      [colorScheme, variant, size, inverted, disabled, active]
    );
    return (
      <IconButtonContext.Provider value={value}>
        <Pressable ref={ref} {...props} style={[styles.container, props.style as ViewStyle]}>
          {children}
        </Pressable>
      </IconButtonContext.Provider>
    );
  }
);

IconButtonRoot.displayName = 'IconButtonRoot';

const styles = StyleSheet.create(theme => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radii.full,
    variants: {
      colorScheme: {
        cyan: {},
        grey: {},
        red: {},
        green: {},
        gold: {},
      },
      disabled: {
        true: {},
      },
      inverted: {
        true: {},
      },
      active: {
        true: {},
      },
      variant: {
        solid: {},
        outline: {
          backgroundColor: 'transparent',
          borderWidth: 2,
        },
        ghost: {
          backgroundColor: 'transparent',
          borderWidth: 0,
        },
      },
      size: {
        'x-small': {
          width: 24,
          height: 24,
        },
        small: {
          width: 32,
          height: 32,
        },
        medium: {
          width: 48,
          height: 48,
        },
        large: {
          height: 56,
          width: 56,
        },
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        size: 'small',
        styles: {
          paddingVertical: theme.space[1],
        },
      },
      {
        vaiant: 'outline',
        size: 'medium',
        styles: {
          paddingVertical: theme.space[3],
        },
      },
      {
        variant: 'outline',
        size: 'large',
        styles: {
          paddingVertical: theme.space[4],
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'solid',
        styles: {
          backgroundColor: theme.isLight ? theme.colors.cyan400 : theme.colors.cyan700,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'solid',
        active: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.cyan500 : theme.colors.cyan800,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'solid',
        disabled: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.cyan100 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'solid',
        disabled: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.cyan300 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'outline',
        styles: {
          borderColor: theme.isLight ? theme.colors.cyan400 : theme.colors.cyan700,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'outline',
        inverted: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.cyan400 : theme.colors.cyan700,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'outline',
        active: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.cyan50 : theme.colors.cyan75,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'outline',
        active: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.cyan900 : theme.colors.cyan75,
          borderColor: theme.isLight ? theme.colors.cyan400 : theme.colors.cyan75,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'outline',
        disabled: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.cyan300 : theme.colors.grey175,
          backgroundColor: 'transparent',
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'outline',
        disabled: true,
        inverted: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.cyan600 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'ghost',
        active: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.cyan100 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'ghost',
        active: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.grey900 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'cyan',
        variant: 'ghost',
        disabled: true,
        styles: {
          backgroundColor: 'transparent',
        },
      },
      {
        colorScheme: 'red',
        variant: 'solid',
        styles: {
          backgroundColor: theme.isLight ? theme.colors.red500 : theme.colors.red700,
        },
      },
      {
        colorScheme: 'red',
        variant: 'solid',
        active: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.red600 : theme.colors.red800,
        },
      },
      {
        colorScheme: 'red',
        variant: 'solid',
        disabled: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.red100 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'red',
        variant: 'solid',
        disabled: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.red300 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'red',
        variant: 'outline',
        styles: {
          borderColor: theme.isLight ? theme.colors.red400 : theme.colors.red700,
        },
      },
      {
        colorScheme: 'red',
        variant: 'outline',
        inverted: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.red400 : theme.colors.red700,
        },
      },
      {
        colorScheme: 'red',
        variant: 'outline',
        active: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.red50 : theme.colors.red50,
        },
      },
      {
        colorScheme: 'red',
        variant: 'outline',
        active: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.red900 : theme.colors.red50,
          borderColor: theme.isLight ? theme.colors.red500 : theme.colors.red50,
        },
      },
      {
        colorScheme: 'red',
        variant: 'outline',
        disabled: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.red300 : theme.colors.grey175,
          backgroundColor: 'transparent',
        },
      },
      {
        colorScheme: 'red',
        variant: 'outline',
        disabled: true,
        inverted: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.red600 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'red',
        variant: 'ghost',
        active: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.red100 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'red',
        variant: 'ghost',
        active: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.grey900 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'red',
        variant: 'ghost',
        disabled: true,
        styles: {
          backgroundColor: 'transparent',
        },
      },
      {
        colorScheme: 'green',
        variant: 'solid',
        styles: {
          backgroundColor: theme.isLight ? theme.colors.green500 : theme.colors.green700,
        },
      },
      {
        colorScheme: 'green',
        variant: 'solid',
        active: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.green600 : theme.colors.green800,
        },
      },
      {
        colorScheme: 'green',
        variant: 'solid',
        disabled: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.green100 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'green',
        variant: 'solid',
        disabled: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.green300 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'green',
        variant: 'outline',
        styles: {
          borderColor: theme.isLight ? theme.colors.green400 : theme.colors.green700,
        },
      },
      {
        colorScheme: 'green',
        variant: 'outline',
        inverted: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.green400 : theme.colors.green700,
        },
      },
      {
        colorScheme: 'green',
        variant: 'outline',
        active: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.green50 : theme.colors.green50,
        },
      },
      {
        colorScheme: 'green',
        variant: 'outline',
        active: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.green900 : theme.colors.green50,
          borderColor: theme.isLight ? theme.colors.green500 : theme.colors.green50,
        },
      },
      {
        colorScheme: 'green',
        variant: 'outline',
        disabled: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.green300 : theme.colors.grey175,
          backgroundColor: 'transparent',
        },
      },
      {
        colorScheme: 'green',
        variant: 'outline',
        disabled: true,
        inverted: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.green600 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'green',
        variant: 'ghost',
        active: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.green100 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'green',
        variant: 'ghost',
        active: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.grey900 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'green',
        variant: 'ghost',
        disabled: true,
        styles: {
          backgroundColor: 'transparent',
        },
      },
      {
        colorScheme: 'gold',
        variant: 'solid',
        styles: {
          backgroundColor: theme.isLight ? theme.colors.gold500 : theme.colors.gold700,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'solid',
        active: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.gold600 : theme.colors.gold800,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'solid',
        disabled: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.gold100 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'solid',
        disabled: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.gold300 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'outline',
        styles: {
          borderColor: theme.isLight ? theme.colors.gold400 : theme.colors.gold700,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'outline',
        inverted: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.gold400 : theme.colors.gold700,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'outline',
        active: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.gold50 : theme.colors.gold50,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'outline',
        active: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.gold900 : theme.colors.gold50,
          borderColor: theme.isLight ? theme.colors.gold500 : theme.colors.gold50,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'outline',
        disabled: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.gold300 : theme.colors.grey175,
          backgroundColor: 'transparent',
        },
      },
      {
        colorScheme: 'gold',
        variant: 'outline',
        disabled: true,
        inverted: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.gold600 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'ghost',
        active: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.gold100 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'ghost',
        active: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.grey900 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'gold',
        variant: 'ghost',
        disabled: true,
        styles: {
          backgroundColor: 'transparent',
        },
      },
      {
        colorScheme: 'grey',
        variant: 'solid',
        styles: {
          backgroundColor: theme.isLight ? theme.colors.grey500 : theme.colors.grey700,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'solid',
        active: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.grey600 : theme.colors.grey800,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'solid',
        disabled: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.grey100 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'solid',
        disabled: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.grey300 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'outline',
        styles: {
          borderColor: theme.isLight ? theme.colors.grey400 : theme.colors.grey700,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'outline',
        inverted: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.grey400 : theme.colors.grey700,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'outline',
        active: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.grey100 : theme.colors.grey50,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'outline',
        active: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.grey900 : theme.colors.grey50,
          borderColor: theme.isLight ? theme.colors.grey500 : theme.colors.grey50,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'outline',
        disabled: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.grey300 : theme.colors.grey175,
          backgroundColor: 'transparent',
        },
      },
      {
        colorScheme: 'grey',
        variant: 'outline',
        disabled: true,
        inverted: true,
        styles: {
          borderColor: theme.isLight ? theme.colors.grey600 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'ghost',
        active: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.grey100 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'ghost',
        active: true,
        inverted: true,
        styles: {
          backgroundColor: theme.isLight ? theme.colors.grey900 : theme.colors.grey175,
        },
      },
      {
        colorScheme: 'grey',
        variant: 'ghost',
        disabled: true,
        styles: {
          backgroundColor: 'transparent',
        },
      },
    ],
  },
}));

export default IconButtonRoot;
