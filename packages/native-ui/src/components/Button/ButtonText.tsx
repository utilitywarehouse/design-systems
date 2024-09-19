import React, { FC } from 'react';
import { type StyleProp, Text, type TextStyle, type TextProps } from 'react-native';
import { useButtonContext } from './Button.context';
import { createStyleSheet, type UnistylesValues, useStyles } from 'react-native-unistyles';
import { BaseButtonProps } from './Button.props';

const ButtonText: FC<TextProps> = ({ children, ...props }) => {
  const { colorScheme, variant, inverted, disabled, active } = useButtonContext();
  const { styles } = useStyles(stylesheet);
  return (
    <Text
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
};

const stylesheet = createStyleSheet(
  ({ colorMode, colors, lineHeights, fontSizes, fonts, fontWeights }) => ({
    text: {
      fontSize: fontSizes.md,
      lineHeight: lineHeights['2xs'],
      fontFamily: fonts.body,
      fontWeight: fontWeights.medium,
    },
    extraStyles: (
      colorScheme: BaseButtonProps['colorScheme'],
      variant: BaseButtonProps['variant'],
      inverted: BaseButtonProps['inverted'],
      disabled: BaseButtonProps['disabled']
    ) => {
      const extraStyles: UnistylesValues = {};
      const light = colorMode === 'light';
      if (!colorScheme) return extraStyles;

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
          ? // @ts-expect-error
            colors[`${colorScheme}${colorScheme === 'cyan' ? 1000 : 900}`]
          : colors[`${colorScheme}900`];
        if (disabled) {
          extraStyles.color = light ? colors[`${colorScheme}300`] : colors.grey400;
        }
        if (inverted && light) {
          extraStyles.color = colors[`${colorScheme}100`];
        }
        if (inverted && light && disabled) {
          extraStyles.color = colors[`${colorScheme}600`];
        }
      }

      if (variant === 'ghost') {
        extraStyles.fontWeight = fontWeights.semibold;
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
  })
);

export default ButtonText;
