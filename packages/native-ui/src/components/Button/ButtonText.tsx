/* eslint-disable  @typescript-eslint/no-unsafe-assignment */
import React, { forwardRef } from 'react';
import { type StyleProp, Text, type TextStyle, type TextProps } from 'react-native';
import { useButtonContext } from './Button.context';
import { StyleSheet } from 'react-native-unistyles';
import type { BaseButtonProps } from './Button.props';

const ButtonText = forwardRef<Text, TextProps>(({ children, ...props }, ref) => {
  const { colorScheme, variant, inverted, disabled } = useButtonContext();

  return (
    <Text
      ref={ref}
      {...props}
      style={[
        styles.text,
        styles.extraStyles(colorScheme, variant, inverted, disabled) as StyleProp<TextStyle>,
        props.style,
      ]}
    >
      {children}
    </Text>
  );
});

ButtonText.displayName = 'ButtonText';

const styles = StyleSheet.create(theme => ({
  text: {
    fontSize: theme.fontSizes.md,
    lineHeight: theme.lineHeights['2xs'],
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.medium,
  },
  extraStyles: (
    colorScheme: BaseButtonProps['colorScheme'],
    variant: BaseButtonProps['variant'],
    inverted: BaseButtonProps['inverted'],
    disabled: BaseButtonProps['disabled']
  ) => {
    const extraStyles: { color?: string; fontWeight?: TextStyle['fontWeight'] } = {};
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
      if (inverted && light && disabled) {
        extraStyles.color = theme.colors[`${colorScheme}600`];
      }
    }

    if (variant === 'ghost') {
      extraStyles.fontWeight = theme.fontWeights.semibold;
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

export default ButtonText;
