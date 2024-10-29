/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useMemo } from 'react';
import { View, ColorValue } from 'react-native';
import type DividerProps from './Divider.props';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import getStyleValue from '../../utils/getStyleValue';

const Divider = forwardRef<View, DividerProps>(({ children, color, space, ...props }, ref) => {
  const {
    styles,
    theme: { colors, colorMode },
  } = useStyles(stylesheet, { space });
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

const stylesheet = createStyleSheet(({ colors, colorMode, space }) => ({
  divider: {
    width: space.full,
    backgroundColor: colorMode === 'light' ? colors.grey100 : colors.grey300,
    height: 1,
    variants: {
      space: {
        none: {
          marginVertical: 0,
        },
        xs: {
          marginVertical: space['1'],
        },
        sm: {
          marginVertical: space['2'],
        },
        md: {
          marginVertical: space['3'],
        },
        lg: {
          marginVertical: space['4'],
        },
        xl: {
          marginVertical: space['5'],
        },
        '2xl': {
          marginVertical: space['6'],
        },
        '3xl': {
          marginVertical: space['7'],
        },
        '4xl': {
          marginVertical: space['8'],
        },
      },
    },
  },
  extraStyles: (color: ColorValue) => ({
    ...(color ? { backgroundColor: color } : {}),
  }),
}));

export default Divider;
