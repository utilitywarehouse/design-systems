/* eslint-disable  @typescript-eslint/no-unsafe-assignment */
import React, { forwardRef, PropsWithChildren, useMemo } from 'react';
import type { BaseButtonProps, ButtonProps } from './Button.props';
import { Pressable, ViewStyle } from 'react-native';
import { createStyleSheet, UnistylesValues, useStyles } from 'react-native-unistyles';
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
    const { styles } = useStyles(stylesheet, { variant, size });
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

const stylesheet = createStyleSheet(({ colorMode, colors, radii, space }) => ({
  container: {
    borderRadius: radii.full,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: space[2],
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
          paddingVertical: space[2],
          paddingHorizontal: space[3],
          minHeight: 32,
        },
        medium: {
          paddingVertical: space[4],
          paddingHorizontal: space[6],
          minHeight: 48,
        },
        large: {
          paddingVertical: space[5],
          paddingHorizontal: space[6],
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
    const extraStyles: UnistylesValues = {};
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

export default ButtonRoot;
