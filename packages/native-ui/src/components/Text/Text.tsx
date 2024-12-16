/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useMemo } from 'react';
import { Text as RNText } from 'react-native';
import type TextProps from './Text.props';
import { StyleSheet } from 'react-native-unistyles';
import type { ColorValue } from '../../types';
import getStyleValue from '../../utils/getStyleValue';
import { useTheme } from '../../hooks';

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
      textAlignVertical,
      textDecorationColor,
      textDecorationLine,
      textDecorationStyle,
      userSelect,
      ...props
    },
    ref
  ) => {
    const { colors, colorMode } = useTheme();
    styles.useVariants({
      size,
      bold,
      underline,
      strikeThrough,
      italic,
      highlight,
    });
    const colorValue: ColorValue = useMemo(() => getStyleValue(color, colors), [color, colorMode]);
    const decorationColor: ColorValue = useMemo(
      () => getStyleValue(textDecorationColor, colors),
      [textDecorationColor, colorMode]
    );
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
        style={[
          styles.text,
          styles.extraStyles(
            colorValue,
            textTransform,
            textAlign,
            decorationColor,
            textDecorationLine,
            textDecorationStyle,
            userSelect,
            textAlignVertical
          ),
          props.style,
        ]}
      >
        {children}
      </RNText>
    );
  }
);

Text.displayName = 'Text';

const styles = StyleSheet.create(
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
            textDecorationLine: 'underline' as TextProps['textDecorationLine'],
          },
        },
        strikeThrough: {
          true: {
            textDecorationLine: 'line-through' as TextProps['textDecorationLine'],
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
      textAlign: TextProps['textAlign'],
      textDecorationColor: TextProps['textDecorationColor'],
      textDecorationLine: TextProps['textDecorationLine'],
      textDecorationStyle: TextProps['textDecorationStyle'],
      userSelect: TextProps['userSelect'],
      textAlignVertical: TextProps['textAlignVertical']
    ) => ({
      ...(color && { color }),
      ...(textTransform && { textTransform }),
      ...(textAlign && { textAlign }),
      ...(textDecorationColor && { textDecorationColor }),
      ...(textDecorationLine && { textDecorationLine }),
      ...(textDecorationStyle && { textDecorationStyle }),
      ...(userSelect && { userSelect }),
      ...(textAlignVertical && { textAlignVertical }),
    }),
  })
);

export default Text;
