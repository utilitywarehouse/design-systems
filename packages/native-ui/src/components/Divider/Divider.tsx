/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useMemo } from 'react';
import { View, ColorValue } from 'react-native';
import type DividerProps from './Divider.props';
import { StyleSheet } from 'react-native-unistyles';
import getStyleValue from '../../utils/getStyleValue';
import { useTheme } from '../../hooks';

const Divider = forwardRef<View, DividerProps>(({ children, color, space, ...props }, ref) => {
  styles.useVariants({ space });
  const { colors, colorMode } = useTheme();
  const colorValue: ColorValue = useMemo(() => getStyleValue(color, colors), [color, colorMode]);
  return (
    <View
      ref={ref}
      {...props}
      style={[styles.divider, styles.extraStyles(colorValue), props.style]}
    >
      {children}
    </View>
  );
});

Divider.displayName = 'Divider';

const styles = StyleSheet.create(theme => ({
  divider: {
    width: theme.space.full,
    backgroundColor: theme.isLight ? theme.colors.grey100 : theme.colors.grey300,
    height: 1,
    variants: {
      space: {
        none: {
          marginVertical: 0,
        },
        xs: {
          marginVertical: theme.space['50'],
        },
        sm: {
          marginVertical: theme.space['100'],
        },
        md: {
          marginVertical: theme.space['150'],
        },
        lg: {
          marginVertical: theme.space['200'],
        },
        xl: {
          marginVertical: theme.space['250'],
        },
        '2xl': {
          marginVertical: theme.space['300'],
        },
        '3xl': {
          marginVertical: theme.space['350'],
        },
        '4xl': {
          marginVertical: theme.space['400'],
        },
      },
    },
  },
  extraStyles: (color: ColorValue) => ({
    ...(color ? { backgroundColor: color } : {}),
  }),
}));

export default Divider;
