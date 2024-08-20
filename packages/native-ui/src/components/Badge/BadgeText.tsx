import React from 'react';

import { Text } from 'react-native';
import type { TextProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useBadgeContext } from './Badge.context';
import BadgeProps from './Badge.props';

const BadgeText: React.FC<TextProps> = ({ children, style, ...props }) => {
  const { colorScheme, strong } = useBadgeContext();
  const { styles } = useStyles(stylesheet, {
    colorScheme,
  });
  return (
    <Text {...props} style={[styles.text, styles.extraStyles(colorScheme, strong), style]}>
      {children}
    </Text>
  );
};

BadgeText.displayName = 'BadgeText';

const stylesheet = createStyleSheet(
  ({ colors, colorMode, fontSizes, fontWeights, fonts, lineHeights }) => ({
    text: {
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights['2xs'],
      fontFamily: fonts.body,
      variants: {
        colorScheme: {
          cyan: {
            color: colorMode === 'dark' ? colors.cyan50 : colors.cyan900,
          },
          red: {
            color: colorMode === 'dark' ? colors.red50 : colors.red900,
          },
          green: {
            color: colorMode === 'dark' ? colors.green50 : colors.green900,
          },
          gold: {
            color: colorMode === 'dark' ? colors.gold50 : colors.gold900,
          },
          grey: {
            color: colorMode === 'dark' ? colors.grey50 : colors.grey900,
          },
        },
      },
    },
    extraStyles: (colorScheme: BadgeProps['colorScheme'], strong: BadgeProps['strong']) => {
      if (colorScheme === 'gold' && strong) {
        return {
          color: colors.gold900,
        };
      }
      if (colorScheme && strong) {
        return {
          color: colors[`${colorScheme}50`],
        };
      }

      return {};
    },
  })
);

export default BadgeText;
