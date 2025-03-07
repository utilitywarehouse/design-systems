import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import CardProps from './Card.props';

const Card = forwardRef<View, CardProps>(
  (
    {
      children,
      variant = 'outline',
      surface = 'base',
      nested,
      colorScheme = 'base',
      padding = 'large',
      style,
      ...props
    },
    ref
  ) => {
    styles.useVariants({
      variant,
      surface,
      nested,
      colorScheme,
      padding,
    });
    return (
      <View ref={ref} style={[styles.card, style]} {...props}>
        {children}
      </View>
    );
  }
);

Card.displayName = 'Card';

const styles = StyleSheet.create(theme => ({
  card: {
    borderRadius: theme.radii['xl'],
    variants: {
      variant: {
        dashed: {
          borderWidth: theme.borderWidths[2],
          borderStyle: 'dashed',
        },
        elevated: {
          borderWidth: 1,
          boxShadow: '1px 2px 4px rgba(18, 18, 18, 0.06)',
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
          backgroundColor: theme.isLight ? theme.colors.white : theme.colors.grey100,
          borderColor: theme.isLight ? theme.colors.grey100 : theme.colors.grey300,
        },
        purple: {
          backgroundColor: theme.isLight ? theme.colors.purple800 : theme.colors.purple100,
          borderColor: theme.colors.purple700,
        },
      },
      nested: {
        true: {
          borderRadius: theme.radii['lg'],
        },
      },
      colorScheme: {
        base: {
          backgroundColor: theme.isLight ? theme.colors.white : theme.colors.grey100,
        },
        grey: {
          backgroundColor: theme.isLight ? theme.colors.grey25 : theme.colors.grey75,
        },
        purple: {
          backgroundColor: theme.isLight ? theme.colors.purple800 : theme.colors.purple100,
        },
      },
      padding: {
        large: {
          padding: theme.space['4'],
        },
        medium: {
          padding: theme.space['3'],
        },
        small: {
          padding: theme.space['2'],
        },
        none: {
          padding: theme.space['0'],
        },
      },
    },
    compoundVariants: [
      {
        surface: 'base',
        variant: 'outline',
        colorScheme: 'purple',
        styles: {
          borderColor: theme.isLight ? theme.colors.purple100 : theme.colors.purple300,
          backgroundColor: theme.isLight ? theme.colors.purple75 : theme.colors.purple50,
        },
      },
      {
        surface: 'base',
        variant: 'dashed',
        styles: {
          backgroundColor: theme.isLight ? theme.colors.white : theme.colors.grey100,
        },
      },
      {
        surface: 'purple',
        variant: 'outline',
        colorscheme: 'base',
        styles: {
          borderColor: theme.isLight ? theme.colors.purple600 : theme.colors.grey300,
          backgroundColor: theme.isLight ? theme.colors.purple800 : theme.colors.grey100,
        },
      },
      {
        surface: 'purple',
        variant: 'outline',
        colorscheme: 'purple',
        styles: {
          borderColor: theme.isLight ? theme.colors.purple700 : theme.colors.purple300,
          backgroundColor: theme.isLight ? theme.colors.purple900 : theme.colors.purple50,
        },
      },
      {
        surface: 'purple',
        variant: 'outline',
        colorscheme: 'grey',
        styles: {
          borderColor: theme.isLight ? theme.colors.purple700 : theme.colors.grey300,
          backgroundColor: theme.isLight ? theme.colors.purple800 : theme.colors.grey75,
        },
      },
      {
        surface: 'purple',
        variant: 'elevated',
        colorscheme: 'base',
        styles: {
          borderColor: theme.isLight ? theme.colors.purple600 : theme.colors.grey300,
          backgroundColor: theme.isLight ? theme.colors.purple800 : theme.colors.grey100,
        },
      },
      {
        surface: 'purple',
        variant: 'elevated',
        colorscheme: 'purple',
        styles: {
          borderColor: theme.isLight ? theme.colors.purple700 : theme.colors.purple300,
          backgroundColor: theme.isLight ? theme.colors.purple900 : theme.colors.purple50,
        },
      },
      {
        surface: 'purple',
        variant: 'elevated',
        colorscheme: 'grey',
        styles: {
          borderColor: theme.isLight ? theme.colors.purple700 : theme.colors.grey300,
          backgroundColor: theme.isLight ? theme.colors.purple800 : theme.colors.grey75,
        },
      },
      {
        surface: 'purple',
        variant: 'dashed',
        colorscheme: 'base',
        styles: {
          borderColor: theme.isLight ? theme.colors.purple600 : theme.colors.grey300,
          backgroundColor: theme.isLight ? theme.colors.purple800 : theme.colors.grey100,
        },
      },
      {
        surface: 'purple',
        variant: 'dashed',
        colorscheme: 'purple',
        styles: {
          borderColor: theme.isLight ? theme.colors.purple700 : theme.colors.purple300,
          backgroundColor: theme.isLight ? theme.colors.purple900 : theme.colors.purple50,
        },
      },
      {
        surface: 'purple',
        variant: 'dashed',
        colorscheme: 'grey',
        styles: {
          borderColor: theme.isLight ? theme.colors.purple700 : theme.colors.grey300,
          backgroundColor: theme.isLight ? theme.colors.purple800 : theme.colors.grey75,
        },
      },
      {
        surface: 'purple',
        variant: 'filled',
        colorscheme: 'purple',
        styles: {
          backgroundColor: theme.isLight ? theme.colors.purple1000 : theme.colors.purple100,
        },
      },
    ],
  },
}));

export default Card;
