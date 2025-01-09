import React, { forwardRef } from 'react';
import type BadgeProps from './Badge.props';
import { StyleSheet } from 'react-native-unistyles';
import { View } from 'react-native';
import { BadgeContext } from './Badge.context';
import BadgeText from './BadgeText';

const Badge = forwardRef<View, BadgeProps>(({ children, ...props }, ref) => {
  const {
    colorScheme = 'cyan',
    size = 'large',
    strong = false,
    borderless = false,
    style,
    ...rest
  } = props;

  const value = React.useMemo(
    () => ({ colorScheme, size, borderless, strong }),
    [colorScheme, size, borderless, strong]
  );

  styles.useVariants({ colorScheme, strong, size, borderless });

  const childIsText = typeof children === 'string' || typeof children === 'number';

  return (
    <BadgeContext.Provider value={value}>
      <View ref={ref} {...rest} style={[styles.container, style]}>
        {childIsText ? <BadgeText>{children}</BadgeText> : children}
      </View>
    </BadgeContext.Provider>
  );
});

Badge.displayName = 'Badge';

const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.space[2],
    borderRadius: theme.radii.sm,
    paddingVertical: theme.space[1],
    alignSelf: 'flex-start',
    gap: theme.space[1],
    variants: {
      colorScheme: {
        cyan: {
          backgroundColor: theme.isDark ? theme.colors.cyan700 : theme.colors.cyan200,
        },
        red: {
          backgroundColor: theme.isDark ? theme.colors.red700 : theme.colors.red200,
        },
        green: {
          backgroundColor: theme.isDark ? theme.colors.green700 : theme.colors.green200,
        },
        gold: {
          backgroundColor: theme.isDark ? theme.colors.gold700 : theme.colors.gold200,
        },
        grey: {
          backgroundColor: theme.isDark ? theme.colors.grey700 : theme.colors.grey200,
        },
      },
      borderless: {
        true: {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
        false: {},
      },
      strong: {
        true: {},
        false: {},
      },
      size: {
        small: {
          paddingVertical: theme.space[0.5],
        },
        large: {
          paddingVertical: theme.space[1],
        },
      },
    },
    compoundVariants: [
      {
        colorScheme: 'cyan',
        strong: true,
        styles: { backgroundColor: theme.isDark ? theme.colors.cyan700 : theme.colors.cyan600 },
      },
      {
        colorScheme: 'red',
        strong: true,
        styles: { backgroundColor: theme.isDark ? theme.colors.red700 : theme.colors.red600 },
      },
      {
        colorScheme: 'green',
        strong: true,
        styles: { backgroundColor: theme.isDark ? theme.colors.green700 : theme.colors.green600 },
      },
      {
        colorScheme: 'gold',
        strong: true,
        styles: { backgroundColor: theme.isDark ? theme.colors.gold700 : theme.colors.gold300 },
      },
      {
        colorScheme: 'grey',
        strong: true,
        styles: { backgroundColor: theme.isDark ? theme.colors.grey700 : theme.colors.grey600 },
      },
    ],
  },
}));

export default Badge;
