/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { forwardRef } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { useIconButtonContext } from './IconButton.context';
import { createStyleSheet, type UnistylesValues, useStyles } from 'react-native-unistyles';
import type { IconButtonProps } from './IconButton.props';
import { Icon } from '../Icon';
import { IconRef } from '../../types';
import IconProps from '../Icon/Icon.props';

const IconButtonIcon = forwardRef<IconRef, IconProps>(({ children, ...props }, ref) => {
  const { colorScheme, variant, inverted, disabled, size } = useIconButtonContext();
  const { styles } = useStyles(stylesheet);
  return (
    <Icon
      ref={ref}
      {...props}
      style={
        Platform.OS === 'web'
          ? (styles.extraStyles(
              colorScheme,
              variant,
              inverted,
              disabled,
              size
            ) as StyleProp<ViewStyle>)
          : [
              styles.extraStyles(
                colorScheme,
                variant,
                inverted,
                disabled,
                size
              ) as StyleProp<ViewStyle>,
              props.style,
            ]
      }
    >
      {children}
    </Icon>
  );
});

IconButtonIcon.displayName = 'IconButtonIcon';

const stylesheet = createStyleSheet(({ colorMode, colors }) => ({
  extraStyles: (
    colorScheme: IconButtonProps['colorScheme'],
    variant: IconButtonProps['variant'],
    inverted: IconButtonProps['inverted'],
    disabled: IconButtonProps['disabled'],
    size: IconButtonProps['size']
  ) => {
    const extraStyles: UnistylesValues = {};
    const light = colorMode === 'light';
    if (!colorScheme) return extraStyles;

    if (size === 'x-small') {
      extraStyles.width = 16;
      extraStyles.height = 16;
    }

    if (size === 'small' || size === 'medium' || size === 'large') {
      extraStyles.width = 24;
      extraStyles.height = 24;
    }

    if (variant === 'solid') {
      extraStyles.color = light
        ? colors[colorScheme === 'cyan' ? 'cyan1000' : 'white']
        : colors[`${colorScheme}50`];
      if (disabled) {
        extraStyles.color = light ? colors[`${colorScheme}300`] : colors.grey400;
      }
      if (inverted && light && disabled) {
        extraStyles.color = colors[`${colorScheme}100`];
      }
    }
    if (variant === 'outline') {
      extraStyles.color = light
        ? // @ts-expect-error - TS doesn't like the dynamic key here
          colors[`${colorScheme}${colorScheme === 'cyan' ? 1000 : 900}`]
        : colors[`${colorScheme}900`];
      if (disabled) {
        extraStyles.color = light ? colors[`${colorScheme}300`] : colors.grey400;
      }
      if (inverted && light) {
        extraStyles.color = colors[`${colorScheme}100`];
      }
      if (inverted && light && disabled && light) {
        extraStyles.color = colors[`${colorScheme}600`];
      }
    }

    if (variant === 'ghost') {
      extraStyles.color = light
        ? colors[`${colorScheme}${['red', 'cyan'].includes(colorScheme) ? 600 : 700}`]
        : colors[`${colorScheme}600`];
      if (disabled) {
        extraStyles.color = light ? colors[`${colorScheme}300`] : colors.grey400;
      }
      if (inverted && light) {
        extraStyles.color = colors[`${colorScheme}400`];
      }
      if (inverted && light && disabled) {
        extraStyles.color = colors[`${colorScheme}600`];
      }
    }

    return extraStyles;
  },
}));

export default IconButtonIcon;
