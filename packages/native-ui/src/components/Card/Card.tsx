import React, { forwardRef } from 'react';
import { View, ViewStyle } from 'react-native';
import { createStyleSheet, UnistylesValues, useStyles } from 'react-native-unistyles';
import CardProps from './Card.props';

const Card = forwardRef<View, CardProps>(
  (
    {
      children,
      variant = 'outline',
      surface = 'base',
      nested,
      colorScheme = 'base',
      padding = 'none',
      style,
      ...props
    },
    ref
  ) => {
    const { styles } = useStyles(stylesheet, {
      variant,
      surface,
      nested,
      colorScheme,
      padding,
    });
    return (
      <View
        ref={ref}
        style={[styles.card, styles.combined(variant, surface, colorScheme) as ViewStyle, style]}
        {...props}
      >
        {children}
      </View>
    );
  }
);

Card.displayName = 'Card';

const stylesheet = createStyleSheet(({ colorMode, colors, radii, space }) => ({
  card: {
    borderRadius: radii['xl'],
    variants: {
      variant: {
        dashed: {
          borderWidth: 2,
          borderStyle: 'dashed',
        },
        elevated: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
          borderWidth: 1,
        },
        outline: {
          borderWidth: 1,
        },
        filled: {
          borderWidth: 0,
        },
      },
      surface: {
        base: {
          backgroundColor: colorMode === 'light' ? colors.white : colors.grey100,
          borderColor: colorMode === 'light' ? colors.grey100 : colors.grey300,
        },
        purple: {
          backgroundColor: colorMode === 'light' ? colors.purple800 : colors.purple100,
          borderColor: colors.purple700,
        },
      },
      nested: {
        true: {
          borderRadius: radii['lg'],
        },
      },
      colorScheme: {
        base: {
          backgroundColor: colorMode === 'light' ? colors.white : colors.grey100,
        },
        grey: {
          backgroundColor: colorMode === 'light' ? colors.grey25 : colors.grey75,
        },
        purple: {
          backgroundColor: colorMode === 'light' ? colors.purple800 : colors.purple100,
        },
      },
      padding: {
        large: {
          padding: space['4'],
        },
        medium: {
          padding: space['3'],
        },
        small: {
          padding: space['2'],
        },
        none: {
          padding: space['0'],
        },
      },
    },
  },
  combined: (
    variant: CardProps['variant'],
    surface: CardProps['surface'],
    colorScheme: CardProps['colorScheme']
  ) => {
    const styles: UnistylesValues = {};
    if (surface === 'base') {
      if (variant === 'outline' && colorScheme === 'purple') {
        styles.borderColor = colorMode === 'light' ? colors.purple100 : colors.purple300;
        styles.backgroundColor = colorMode === 'light' ? colors.purple75 : colors.purple50;
      }
      if (variant === 'dashed') {
        styles.backgroundColor = colorMode === 'light' ? colors.white : colors.grey100;
      }
    }
    if (surface === 'purple') {
      styles.borderColor = colors.purple600;
      styles.backgroundColor = colorMode === 'light' ? colors.purple800 : colors.purple100;
      if (variant === 'outline' && colorScheme === 'purple') {
        styles.borderColor = colors.purple700;
        styles.backgroundColor = colors.purple900;
      }
      if (variant === 'filled' && colorScheme === 'purple') {
        styles.backgroundColor = colors.purple1000;
      }
    }
    return styles;
  },
}));

export default Card;
