/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { forwardRef, useMemo } from 'react';
import { Text as RNText } from 'react-native';
import type TextProps from './Text.props';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ColorValue } from '../../core';

const getValue = (value: any, type: Record<string, any>) =>
  typeof value === 'string' && value[0] === '$' ? type?.[value?.slice(1) ?? ''] : value;

const Text = forwardRef<RNText, TextProps>(
  (
    {
      children,
      color,
      size = 'md',
      truncated,
      bold,
      underline,
      strikeThrough,
      italic,
      highlight,
      textTransform,
      textAlign,
      ...props
    },
    ref
  ) => {
    const {
      styles,
      theme: { colors, colorMode },
    } = useStyles(stylesheet, {
      size,
      bold,
      underline,
      strikeThrough,
      italic,
      highlight,
    });
    const colorValue: ColorValue = useMemo(() => getValue(color, colors), [color, colorMode]);
    return (
      <RNText
        ref={ref}
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
      </RNText>
    );
  }
);

Text.displayName = 'Text';

const stylesheet = createStyleSheet(
  ({ colors, fontSizes, fontWeights, fonts, letterSpacings, lineHeights }) => ({
    text: {
      color: colors.grey1000,
      fontWeight: fontWeights.normal,
      letterSpacing: letterSpacings.md,
      fontFamily: fonts.body,
      fontStyle: 'normal',
      variants: {
        size: {
          xs: {
            fontSize: fontSizes.xs,
            lineHeight: lineHeights['2xs'],
          },
          sm: {
            fontSize: fontSizes.sm,
            lineHeight: lineHeights['2xs'],
          },
          md: {
            fontSize: fontSizes.md,
            lineHeight: lineHeights['lg'],
          },
        },
        bold: {
          true: {
            fontWeight: fontWeights.bold,
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
        italic: {
          true: {
            fontStyle: 'italic',
          },
        },
        highlight: {
          true: {
            fontWeight: fontWeights.semibold,
          },
        },
      },
    },
    extraStyles: (
      color: TextProps['color'],
      textTransform: TextProps['textTransform'],
      textAlign: TextProps['textAlign']
    ) => ({
      ...(color && { color }),
      ...(textTransform && { textTransform }),
      ...(textAlign && { textAlign }),
    }),
  })
);

export default Text;
