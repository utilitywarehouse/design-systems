/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { forwardRef } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { useButtonContext } from './Button.context';
import { StyleSheet } from 'react-native-unistyles';
import type { BaseButtonProps } from './Button.props';
import { Icon } from '../Icon';
import { IconRef } from '../../types';
import IconProps from '../Icon/Icon.props';

const ButtonIcon = forwardRef<IconRef, IconProps>(({ children, ...props }, ref) => {
  const { colorScheme, variant, inverted, disabled } = useButtonContext();

  return (
    <Icon
      ref={ref}
      {...props}
      style={
        Platform.OS === 'web'
          ? (styles.extraStyles(colorScheme, variant, inverted, disabled) as StyleProp<ViewStyle>)
          : [
              styles.extraStyles(colorScheme, variant, inverted, disabled) as StyleProp<ViewStyle>,
              props.style,
            ]
      }
    >
      {children}
    </Icon>
  );
});

ButtonIcon.displayName = 'ButtonIcon';

const styles = StyleSheet.create(theme => ({
  extraStyles: (
    colorScheme: BaseButtonProps['colorScheme'],
    variant: BaseButtonProps['variant'],
    inverted: BaseButtonProps['inverted'],
    disabled: BaseButtonProps['disabled']
  ) => {
    const extraStyles = {
      color: '',
    };
    const light = theme.isLight;
    if (!colorScheme) return extraStyles;

    if (variant === 'solid') {
      extraStyles.color = light
        ? theme.colors[colorScheme === 'cyan' ? 'cyan1000' : 'white']
        : theme.colors[`${colorScheme}50`];
      if (disabled) {
        extraStyles.color = light ? theme.colors[`${colorScheme}300`] : theme.colors.grey400;
      }
      if (inverted && light && disabled) {
        extraStyles.color = theme.colors[`${colorScheme}100`];
      }
    }
    if (variant === 'outline') {
      extraStyles.color = light
        ? // @ts-expect-error - TS doesn't like the dynamic key here
          colors[`${colorScheme}${colorScheme === 'cyan' ? 1000 : 900}`]
        : theme.colors[`${colorScheme}900`];
      if (disabled) {
        extraStyles.color = light ? theme.colors[`${colorScheme}300`] : theme.colors.grey400;
      }
      if (inverted && light) {
        extraStyles.color = theme.colors[`${colorScheme}100`];
      }
      if (inverted && light && disabled && light) {
        extraStyles.color = theme.colors[`${colorScheme}600`];
      }
    }

    if (variant === 'ghost') {
      extraStyles.color = light
        ? theme.colors[`${colorScheme}${['red', 'cyan'].includes(colorScheme) ? 600 : 700}`]
        : theme.colors[`${colorScheme}600`];
      if (disabled) {
        extraStyles.color = light ? theme.colors[`${colorScheme}300`] : theme.colors.grey400;
      }
      if (inverted && light) {
        extraStyles.color = theme.colors[`${colorScheme}400`];
      }
      if (inverted && light && disabled) {
        extraStyles.color = theme.colors[`${colorScheme}600`];
      }
    }

    return extraStyles;
  },
}));

export default ButtonIcon;
