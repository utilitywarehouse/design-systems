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
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.heading,
    marginVertical: 0,
    fontStyle: 'normal',
    variants: {
      size: {
        h1: {
          fontSize: theme.fontSizes['4xl'],
          lineHeight: theme.lineHeights['3xl'],
        },
        h2: {
          fontSize: theme.fontSizes['3xl'],
          lineHeight: theme.lineHeights['2xl'],
        },
        h3: {
          fontSize: theme.fontSizes['2xl'],
          lineHeight: theme.lineHeights['2xl'],
        },
        h4: {
          fontSize: theme.fontSizes.lg,
          lineHeight: theme.lineHeights.lg,
        },
        h5: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.sm,
        },
        h6: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.lg,
          fontFamily: theme.fonts.body,
          fontWeight: theme.fontWeights.normal,
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
