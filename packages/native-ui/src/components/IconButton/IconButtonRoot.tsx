/* eslint-disable  @typescript-eslint/no-unsafe-assignment */
import React, { forwardRef, PropsWithChildren, useMemo } from 'react';
import type { IconButtonProps } from './IconButton.props';
import { DimensionValue, Pressable, ViewStyle } from 'react-native';
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
    styles.useVariants({ variant, size });
    const value = useMemo(
      () => ({ colorScheme, variant, size, inverted, disabled, active }),
      [colorScheme, variant, size, inverted, disabled, active]
    );
    return (
      <IconButtonContext.Provider value={value}>
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
      </IconButtonContext.Provider>
    );
  }
);

IconButtonRoot.displayName = 'IconButtonRoot';

const styles = StyleSheet.create(({ colorMode, colors, radii, space }) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.full,
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
  },
  extraStyles: (
    colorScheme: IconButtonProps['colorScheme'],
    variant: IconButtonProps['variant'],
    size: IconButtonProps['size'],
    inverted: IconButtonProps['inverted'],
    disabled: IconButtonProps['disabled'],
    active?: boolean
  ) => {
    const extraStyles: {
      backgroundColor?: string;
      borderColor?: string;
      paddingVertical?: DimensionValue;
    } = {};
    const light = colorMode === 'light';

    if (!colorScheme) return extraStyles;
    const baseColor = light
      ? colors[`${colorScheme}${colorScheme === 'cyan' ? '400' : '500'}`]
      : colors[`${colorScheme}700`];
    if (variant === 'solid') {
      extraStyles.backgroundColor = baseColor;
      if (active) {
        extraStyles.backgroundColor = light
          ? colors[`${colorScheme}${colorScheme === 'cyan' ? '500' : '600'}`]
          : colors[`${colorScheme}800`];
      }
      if (disabled) {
        extraStyles.backgroundColor = light ? colors[`${colorScheme}100`] : colors.grey175;
      }
      if (disabled && inverted && light) {
        extraStyles.backgroundColor = colors[`${colorScheme}300`];
      }
    }
    if (variant === 'outline') {
      extraStyles.borderColor = baseColor;
      if (size === 'small') {
        extraStyles.paddingVertical = space[1];
      }
      if (size === 'medium') {
        extraStyles.paddingVertical = space[3];
      }
      if (size === 'large') {
        extraStyles.paddingVertical = space[4];
      }
      if (inverted && light) {
        extraStyles.borderColor = colors[`${colorScheme}400`];
      }
      if (active) {
        extraStyles.backgroundColor = light
          ? colors[`${colorScheme}${colorScheme === 'grey' ? '100' : '50'}`]
          : // @ts-expect-error - Cyan value exists
            colors[`${colorScheme}${colorScheme === 'cyan' ? '75' : '50'}`];
      }
      if (inverted && light && active) {
        extraStyles.backgroundColor = colors[`${colorScheme}900`];
        extraStyles.borderColor = colors[`${colorScheme}${colorScheme === 'cyan' ? '400' : '500'}`];
      }
      if (disabled) {
        extraStyles.borderColor = light ? colors[`${colorScheme}300`] : colors.grey175;
        extraStyles.backgroundColor = 'transparent';
      }
      if (disabled && inverted && light) {
        extraStyles.borderColor = colors[`${colorScheme}600`];
      }
    }

    if (variant === 'ghost') {
      if (active) {
        extraStyles.backgroundColor = light ? colors.grey100 : colors.grey175;
      }
      if (active && inverted && light) {
        extraStyles.backgroundColor = colors.grey900;
      }
      if (disabled) {
        extraStyles.backgroundColor = 'transparent';
      }
    }

    return extraStyles;
  },
}));

export default IconButtonRoot;
