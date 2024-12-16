import React, { forwardRef } from 'react';

import { Text } from 'react-native';
import type { TextProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useBadgeContext } from './Badge.context';
import type BadgeProps from './Badge.props';

const BadgeText = forwardRef<Text, TextProps>(({ children, style, ...props }, ref) => {
  const { colorScheme, strong } = useBadgeContext();
  styles.useVariants({ colorScheme });
  return (
    <Text
      ref={ref}
      {...props}
      style={[styles.text, styles.extraStyles(colorScheme, strong), style]}
    >
      {children}
    </Text>
  );
});

BadgeText.displayName = 'BadgeText';

const styles = StyleSheet.create(theme => ({
  text: {
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeights.normal,
    lineHeight: theme.lineHeights['2xs'],
    fontFamily: theme.fonts.body,
    variants: {
      colorScheme: {
        cyan: {
          color: theme.isDark ? theme.colors.cyan50 : theme.colors.cyan900,
        },
        red: {
          color: theme.isDark ? theme.colors.red50 : theme.colors.red900,
        },
        green: {
          color: theme.isDark ? theme.colors.green50 : theme.colors.green900,
        },
        gold: {
          color: theme.isDark ? theme.colors.gold50 : theme.colors.gold900,
        },
        grey: {
          color: theme.isDark ? theme.colors.grey50 : theme.colors.grey900,
        },
      },
    },
  },
  extraStyles: (colorScheme: BadgeProps['colorScheme'], strong: BadgeProps['strong']) => {
    if (colorScheme === 'gold' && strong) {
      return {
        color: theme.isDark ? theme.colors.gold50 : theme.colors.gold900,
      };
    }
    if (colorScheme && strong) {
      return {
        color: theme.colors[`${colorScheme}50`],
      };
    }

    return {};
  },
}));

export default BadgeText;
