/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useMemo } from 'react';
import { Text, TextStyle } from 'react-native';
import type HeadingProps from './Heading.props';
import { StyleSheet } from 'react-native-unistyles';
import type { ColorValue } from '../../types';
import getStyleValue from '../../utils/getStyleValue';
import { useTheme } from '../../hooks';

const Heading = forwardRef<Text, HeadingProps>(
  (
    {
      children,
      color,
      size = 'h4',
      truncated,
      underline,
      strikeThrough,
      textTransform,
      textAlign,
      textAlignVertical,
      ...props
    },
    ref
  ) => {
    styles.useVariants({
      size,
      underline,
      strikeThrough,
    });
    const { colors, colorMode } = useTheme();
    const colorValue: ColorValue = useMemo(() => getStyleValue(color, colors), [color, colorMode]);
    return (
      <Text
        ref={ref}
        {...props}
        {...(truncated
          ? {
              numberOfLines: 1,
              ellipsizeMode: 'tail',
            }
          : {})}
        style={[
          styles.text,
          {
            ...(colorValue ? { color: colorValue } : {}),
            ...(textTransform ? { textTransform } : {}),
            ...(textAlign ? { textAlign } : {}),
            ...(textAlignVertical ? { textAlignVertical } : {}),
          },
          props.style,
        ]}
      >
        {children}
      </Text>
    );
  }
);

Heading.displayName = 'Heading';

const styles = StyleSheet.create(theme => ({
  text: {
    color: theme.colors.grey1000,
    fontWeight: theme.fontWeight.bold,
    fontFamily: theme.fontFamily.heading,
    marginVertical: 0,
    fontStyle: 'normal',
    variants: {
      size: {
        h1: {
          fontSize: theme.fontSize['500'],
          lineHeight: theme.lineHeight['900'],
        },
        h2: {
          fontSize: theme.fontSize['400'],
          lineHeight: theme.lineHeight['700'],
        },
        h3: {
          fontSize: theme.fontSize['300'],
          lineHeight: theme.lineHeight['700'],
        },
        h4: {
          fontSize: theme.fontSize['150'],
          lineHeight: theme.lineHeight['500'],
        },
        h5: {
          fontSize: theme.fontSize['100'],
          lineHeight: theme.lineHeight['300'],
        },
        h6: {
          fontSize: theme.fontSize['100'],
          lineHeight: theme.lineHeight['500'],
          fontFamily: theme.fontFamily.body,
          fontWeight: theme.fontWeight.regular,
        },
      },
      underline: {
        true: {
          textDecorationLine: 'underline' as TextStyle['textDecorationLine'],
        },
      },
      strikeThrough: {
        true: {
          textDecorationLine: 'line-through' as TextStyle['textDecorationLine'],
        },
      },
    },
  },
}));

export default Heading;
