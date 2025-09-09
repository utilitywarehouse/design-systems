import React, { forwardRef } from 'react';

import { Text } from 'react-native';
import type { TextProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useBadgeContext } from './Badge.context';

const BadgeText = forwardRef<Text, TextProps>(({ children, style, ...props }, ref) => {
  const { colorScheme, strong } = useBadgeContext();
  styles.useVariants({ colorScheme, strong });
  return (
    <Text ref={ref} {...props} style={[styles.text, style]}>
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
      strong: {
        true: {},
      },
    },
    compoundVariants: [
      {
        colorScheme: 'cyan',
        strong: true,
        styles: { color: theme.colors.cyan50 },
      },
      {
        colorScheme: 'red',
        strong: true,
        styles: { color: theme.colors.red50 },
      },
      {
        colorScheme: 'green',
        strong: true,
        styles: { color: theme.colors.green50 },
      },
      {
        colorScheme: 'gold',
        strong: true,
        styles: { color: theme.isDark ? theme.colors.gold50 : theme.colors.gold900 },
      },
      {
        colorScheme: 'grey',
        strong: true,
        styles: { color: theme.colors.grey50 },
      },
    ],
  },
}));

export default BadgeText;
