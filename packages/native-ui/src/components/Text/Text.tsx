/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useMemo } from 'react';
import { Text } from 'react-native';
import type TextProps from './Text.props';
import { StyleSheet } from 'react-native-unistyles';
import type { ColorValue } from '../../types';
import getStyleValue from '../../utils/getStyleValue';
import { useTheme } from '../../hooks';

const TextComp = forwardRef<Text, TextProps>(
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
            ...(colorValue && { color: colorValue }),
            ...(textTransform && { textTransform }),
            ...(textAlign && { textAlign }),
            ...(decorationColor && { textDecorationColor: decorationColor }),
            ...(textDecorationLine && { textDecorationLine }),
            ...(textDecorationStyle && { textDecorationStyle }),
            ...(userSelect && { userSelect }),
            ...(textAlignVertical && { textAlignVertical }),
          },
          props.style,
        ]}
      >
        {children}
      </Text>
    );
  }
);

TextComp.displayName = 'Text';

const styles = StyleSheet.create(theme => ({
  text: {
    color: theme.colors.grey1000,
    fontWeight: theme.fontWeights.normal,
    letterSpacing: theme.letterSpacings.md,
    fontFamily: theme.fonts.body,
    fontStyle: 'normal',
    variants: {
      size: {
        xs: {
          fontSize: theme.fontSizes.xs,
          lineHeight: theme.lineHeights['2xs'],
        },
        sm: {
          fontSize: theme.fontSizes.sm,
          lineHeight: theme.lineHeights['2xs'],
        },
        md: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights['lg'],
        },
      },
      bold: {
        true: {
          fontWeight: theme.fontWeights.bold,
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
          fontWeight: theme.fontWeights.semibold,
        },
      },
    },
  },
}));

export default TextComp;
