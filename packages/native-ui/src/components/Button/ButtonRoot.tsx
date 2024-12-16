/* eslint-disable  @typescript-eslint/no-unsafe-assignment */
import React, { forwardRef, PropsWithChildren, useMemo } from 'react';
import type { BaseButtonProps, ButtonProps } from './Button.props';
import { DimensionValue, Pressable, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ButtonContext } from './Button.context';
import { PressableRef } from '../../types';

const ButtonRoot = forwardRef<
  PressableRef,
  PropsWithChildren<BaseButtonProps & { states?: { active?: boolean; disabled?: boolean } }>
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
    styles.useVariants({ variant, size });
    const value = useMemo(
      () => ({ colorScheme, variant, size, inverted, disabled, active }),
      [colorScheme, variant, size, inverted, disabled, active]
    );
    return (
      <ButtonContext.Provider value={value}>
        <Pressable
          ref={ref}
          {...props}
          style={[
            styles.container,
            styles.extraStyles(colorScheme, variant, size, inverted, disabled, active) as ViewStyle,
            props.style as ViewStyle,
          ]}
        >
          {children}
        </Pressable>
      </ButtonContext.Provider>
    );
  }
);

ButtonRoot.displayName = 'ButtonRoot';

const styles = StyleSheet.create(theme => ({
  container: {
    borderRadius: theme.radii.full,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.space[2],
    paddingHorizontal: theme.space[6],
    variants: {
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
        small: {
          paddingVertical: theme.space[2],
          minHeight: 32,
        },
        medium: {
          paddingVertical: theme.space[4],
          minHeight: 48,
        },
        large: {
          paddingVertical: theme.space[5],
          minHeight: 56,
        },
      },
    },
  },
  extraStyles: (
    colorScheme: BaseButtonProps['colorScheme'],
    variant: BaseButtonProps['variant'],
    size: ButtonProps['size'],
    inverted: ButtonProps['inverted'],
    disabled: BaseButtonProps['disabled'],
    active?: boolean
  ) => {
    const extraStyles: {
      borderColor?: string;
      backgroundColor?: string;
      paddingVertical?: DimensionValue;
    } = {};
    const light = theme.isLight;

    if (!colorScheme) return extraStyles;
    const baseColor = light
      ? theme.colors[`${colorScheme}${colorScheme === 'cyan' ? '400' : '500'}`]
      : theme.colors[`${colorScheme}700`];
    if (variant === 'solid') {
      extraStyles.backgroundColor = baseColor;
      if (active) {
        extraStyles.backgroundColor = light
          ? theme.colors[`${colorScheme}${colorScheme === 'cyan' ? '500' : '600'}`]
          : theme.colors[`${colorScheme}800`];
      }
      if (disabled) {
        extraStyles.backgroundColor = light
          ? theme.colors[`${colorScheme}100`]
          : theme.colors.grey175;
      }
      if (disabled && inverted && light) {
        extraStyles.backgroundColor = theme.colors[`${colorScheme}300`];
      }
    }
    if (variant === 'outline') {
      extraStyles.borderColor = baseColor;
      if (size === 'small') {
        extraStyles.paddingVertical = theme.space[1];
      }
      if (size === 'medium') {
        extraStyles.paddingVertical = theme.space[3];
      }
      if (size === 'large') {
        extraStyles.paddingVertical = theme.space[4];
      }
      if (inverted && light) {
        extraStyles.borderColor = theme.colors[`${colorScheme}400`];
      }
      if (active) {
        extraStyles.backgroundColor = light
          ? theme.colors[`${colorScheme}${colorScheme === 'grey' ? '100' : '50'}`]
          : // @ts-expect-error - Cyan value exists
            colors[`${colorScheme}${colorScheme === 'cyan' ? '75' : '50'}`];
      }
      if (inverted && light && active) {
        extraStyles.backgroundColor = theme.colors[`${colorScheme}900`];
        extraStyles.borderColor =
          theme.colors[`${colorScheme}${colorScheme === 'cyan' ? '400' : '500'}`];
      }
      if (disabled) {
        extraStyles.borderColor = light ? theme.colors[`${colorScheme}300`] : theme.colors.grey175;
        extraStyles.backgroundColor = 'transparent';
      }
      if (disabled && inverted && light) {
        extraStyles.borderColor = theme.colors[`${colorScheme}600`];
      }
    }

    if (variant === 'ghost') {
      if (active) {
        extraStyles.backgroundColor = light ? theme.colors.grey100 : theme.colors.grey175;
      }
      if (active && inverted && light) {
        extraStyles.backgroundColor = theme.colors.grey900;
      }
      if (disabled) {
        extraStyles.backgroundColor = 'transparent';
      }
    }

    return extraStyles;
  },
}));

export default ButtonRoot;
