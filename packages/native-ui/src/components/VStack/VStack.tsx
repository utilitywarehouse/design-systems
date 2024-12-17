import React, { forwardRef } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

interface VStackProps extends ViewProps {
  space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  wrap?: boolean;
  reversed?: boolean;
}

const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'column',
    variants: {
      space: {
        xs: {
          gap: theme.space['1'],
        },
        sm: {
          gap: theme.space['2'],
        },
        md: {
          gap: theme.space['3'],
        },
        lg: {
          gap: theme.space['4'],
        },
        xl: {
          gap: theme.space['5'],
        },
        '2xl': {
          gap: theme.space['6'],
        },
        '3xl': {
          gap: theme.space['7'],
        },
        '4xl': {
          gap: theme.space['8'],
        },
      },
      reversed: {
        true: {
          flexDirection: 'column-reverse',
        },
      },
      wrap: {
        true: {
          flexWrap: 'wrap' as ViewStyle['flexWrap'],
        },
      },
    },
  },
}));

const VStack = forwardRef<View, VStackProps>(
  ({ children, style, space, reversed, wrap, ...props }, ref) => {
    styles.useVariants({
      space,
      reversed,
      wrap,
    });
    return (
      <View ref={ref} style={[styles.container, style]} {...props}>
        {children}
      </View>
    );
  }
);

VStack.displayName = 'VStack';

export default VStack;
