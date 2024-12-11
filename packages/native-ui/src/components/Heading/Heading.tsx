/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useMemo } from 'react';
import { Text, TextStyle } from 'react-native';
import type HeadingProps from './Heading.props';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import type { ColorValue } from '../../types';
import getStyleValue from '../../utils/getStyleValue';

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
    const {
      styles,
      theme: { colors, colorMode },
    } = useStyles(stylesheet, {
      size,
      underline,
      strikeThrough,
    });
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
          styles.extraStyles(colorValue, textTransform, textAlign, textAlignVertical),
          props.style,
        ]}
      >
        {children}
      </Text>
    );
  }
);

Heading.displayName = 'Heading';

const stylesheet = createStyleSheet(({ colors, fontSizes, fontWeights, fonts, lineHeights }) => ({
  text: {
    color: colors.grey1000,
    fontWeight: fontWeights.bold,
    fontFamily: fonts.heading,
    marginVertical: 0,
    fontStyle: 'normal',
    variants: {
      size: {
        h1: {
          fontSize: fontSizes['4xl'],
          lineHeight: lineHeights['3xl'],
        },
        h2: {
          fontSize: fontSizes['3xl'],
          lineHeight: lineHeights['2xl'],
        },
        h3: {
          fontSize: fontSizes['2xl'],
          lineHeight: lineHeights['2xl'],
        },
        h4: {
          fontSize: fontSizes.lg,
          lineHeight: lineHeights.lg,
        },
        h5: {
          fontSize: fontSizes.md,
          lineHeight: lineHeights.sm,
        },
        h6: {
          fontSize: fontSizes.md,
          lineHeight: lineHeights.lg,
          fontFamily: fonts.body,
          fontWeight: fontWeights.normal,
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
  extraStyles: (
    color: HeadingProps['color'],
    textTransform: HeadingProps['textTransform'],
    textAlign: HeadingProps['textAlign'],
    textAlignVertical: HeadingProps['textAlignVertical']
  ) => ({
    ...(color ? { color } : {}),
    ...(textTransform ? { textTransform } : {}),
    ...(textAlign ? { textAlign } : {}),
    ...(textAlignVertical ? { textAlignVertical } : {}),
  }),
}));

export default Heading;
