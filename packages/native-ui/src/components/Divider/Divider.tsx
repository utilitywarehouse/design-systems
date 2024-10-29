/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useMemo } from 'react';
import { View } from 'react-native';
import type DividerProps from './Divider';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import type { ColorValue } from '../../types';
import getStyleValue from '../../utils/getStyleValue';

const Divider = forwardRef<View, DividerProps>(({ children, color, ...props }, ref) => {
  const {
    styles,
    theme: { colors, colorMode },
  } = useStyles(stylesheet);
  const colorValue: ColorValue = useMemo(() => getStyleValue(color, colors), [color, colorMode]);
  return (
    <View
      ref={ref}
      {...props}
      style={[styles.divider, color ? { backgroundColor: colorValue } : undefined, props.style]}
    >
      {children}
    </View>
  );
});

Divider.displayName = 'Divider';

const stylesheet = createStyleSheet(({ colors, colorMode }) => ({
  divider: {
    width: '100%',
    backgroundColor: colorMode === 'light' ? colors.grey100 : colors.grey300,
    height: 1,
  },
}));

export default Divider;
