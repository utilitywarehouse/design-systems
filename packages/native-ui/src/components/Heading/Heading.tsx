/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useMemo } from 'react';
import { Text } from 'react-native';
import type HeadingProps from './Heading.props';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ColorValue } from '../../core';

const getValue = (value: any, type: Record<string, any>) =>
  typeof value === 'string' && value[0] === '$' ? type?.[value?.slice(1) ?? ''] : value;

const Heading: React.FC<HeadingProps> = ({
  children,
  color,
  size = 'h4',
  truncated,
  underline,
  strikeThrough,
  textTransform,
  textAlign,
  ...props
}) => {
  const {
    styles,
    theme: { colors, colorMode },
  } = useStyles(stylesheet, {
    size,
    underline,
    strikeThrough,
  });
  const colorValue: ColorValue = useMemo(() => getValue(color, colors), [color, colorMode]);
  return (
    <Text
      {...props}
      {...(truncated
        ? {
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          }
        : {})}
      style={[styles.text, styles.extraStyles(colorValue, textTransform, textAlign), props.style]}
    >
      {children}
    </Text>
  );
};

Heading.displayName = 'Heading';

const stylesheet = createStyleSheet(({ colors, fontSizes, fontWeights, fonts, lineHeights }) => ({
  text: {
    color: colors.grey1000,
    fontWeight: fontWeights.bold,
    fontFamily: fonts.heading,
    marginVertical: 0,
    textAlignVertical: 'center',
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
          textDecorationLine: 'underline',
        },
      },
      strikeThrough: {
        true: {
          textDecorationLine: 'line-through',
        },
      },
    },
  },
  extraStyles: (
    color: HeadingProps['color'],
    textTransform: HeadingProps['textTransform'],
    textAlign: HeadingProps['textAlign']
  ) => ({
    ...(color ? { color } : {}),
    ...(textTransform ? { textTransform } : {}),
    ...(textAlign ? { textAlign } : {}),
  }),
}));

export default Heading;
