import React, { FC, PropsWithChildren, useMemo } from 'react';
import type { BaseButtonProps, ButtonProps } from './Button.props';
import { Pressable, ViewStyle } from 'react-native';
import { createStyleSheet, UnistylesValues, useStyles } from 'react-native-unistyles';
import { ButtonContext } from './Button.context';

const ButtonRoot: FC<
  PropsWithChildren<BaseButtonProps & { states?: { active?: boolean; disabled?: boolean } }>
> = ({
  children,
  colorScheme = 'cyan',
  variant = 'solid',
  size = 'medium',
  inverted = false,
  states,
  ...props
}) => {
  const { active, disabled } = states || {};
  const { styles } = useStyles(stylesheet, { colorScheme, variant, size, active, disabled });
  const value = useMemo(
    () => ({ colorScheme, variant, size, inverted, disabled, active }),
    [colorScheme, variant, size, inverted, disabled, active]
  );
  return (
    <ButtonContext.Provider value={value}>
      <Pressable
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
};

const stylesheet = createStyleSheet(({ colorMode, colors, radii, space }) => ({
  container: {
    borderRadius: radii.full,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: space[2],
    variants: {
      colorScheme: {
        cyan: {
          backgroundColor: colorMode === 'light' ? colors.cyan400 : colors.cyan700,
          borderColor: colorMode === 'light' ? colors.cyan500 : colors.cyan700,
        },
        red: {
          backgroundColor: colorMode === 'light' ? colors.red500 : colors.red700,
          borderColor: colorMode === 'light' ? colors.red500 : colors.red700,
        },
        green: {
          backgroundColor: colorMode === 'light' ? colors.green500 : colors.green700,
          borderColor: colorMode === 'light' ? colors.green500 : colors.green700,
        },
        gold: {
          backgroundColor: colorMode === 'light' ? colors.gold500 : colors.gold700,
          borderColor: colorMode === 'light' ? colors.gold500 : colors.gold700,
        },
        grey: {
          backgroundColor: colorMode === 'light' ? colors.grey500 : colors.grey700,
          borderColor: colorMode === 'light' ? colors.grey500 : colors.grey700,
        },
      },
      disabled: {
        true: {},
        false: {},
      },
      active: {
        true: {},
        false: {},
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
    if (variant === 'solid') {
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
