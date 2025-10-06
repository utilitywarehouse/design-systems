import React, { forwardRef } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

interface HStackProps extends ViewProps {
  space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  wrap?: boolean;
  reversed?: boolean;
}

const styles = StyleSheet.create(({ space }) => ({
  container: {
    flexDirection: 'row',
    variants: {
      space: {
        xs: {
          gap: space['50'],
        },
        sm: {
          gap: space['100'],
        },
        md: {
          gap: space['150'],
        },
        lg: {
          gap: space['200'],
        },
        xl: {
          gap: space['250'],
        },
        '2xl': {
          gap: space['300'],
        },
        '3xl': {
          gap: space['350'],
        },
        '4xl': {
          gap: space['400'],
        },
      },
      reversed: {
        true: {
          flexDirection: 'row-reverse',
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

/**
 * @deprecated Use `Flex` instead.
 */
const HStack = forwardRef<View, HStackProps>(
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

HStack.displayName = 'HStack';

export default HStack;
