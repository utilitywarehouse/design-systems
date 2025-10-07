/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, useMemo } from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useTheme } from '../../hooks';
import type { ColorValue } from '../../types';
import getStyleValue from '../../utils/getStyleValue';
import type TextProps from './Text.props';

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
          styles.extra(
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
      </Text>
    );
  }
);

TextComp.displayName = 'Text';

const styles = StyleSheet.create(theme => ({
  text: {
    color: theme.colors.grey1000,
    fontWeight: theme.fontWeight.regular,
    letterSpacing: 0,
    fontFamily: theme.fontFamily.body,
    fontStyle: 'normal',
    variants: {
      size: {
        xs: {
          fontSize: theme.fontSize['75'],
          lineHeight: theme.lineHeight['100'],
        },
        sm: {
          fontSize: theme.fontSize['90'],
          lineHeight: theme.lineHeight['100'],
        },
        md: {
          fontSize: theme.fontSize['100'],
          lineHeight: theme.lineHeight['500'],
        },
      },
      bold: {
        true: {
          fontWeight: theme.fontWeight.bold,
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
          fontWeight: theme.fontWeight.semibold,
        },
      },
    },
  },
  extra: (
    colorValue,
    textTransform,
    textAlign,
    decorationColor,
    textDecorationLine,
    textDecorationStyle,
    userSelect,
    textAlignVertical
  ) => ({
    ...(colorValue && { color: colorValue }),
    ...(textTransform && { textTransform }),
    ...(textAlign && { textAlign }),
    ...(decorationColor && { textDecorationColor: decorationColor }),
    ...(textDecorationLine && { textDecorationLine }),
    ...(textDecorationStyle && { textDecorationStyle }),
    ...(userSelect && { userSelect }),
    ...(textAlignVertical && { textAlignVertical }),
  }),
}));

export default TextComp;
