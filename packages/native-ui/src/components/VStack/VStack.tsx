import React, { forwardRef } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

interface VStackProps extends ViewProps {
  space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  wrap?: boolean;
  reversed?: boolean;
}

const stylesheet = createStyleSheet(({ space }) => ({
  container: {
    flexDirection: 'column',
    variants: {
      space: {
        xs: {
          gap: space['1'],
        },
        sm: {
          gap: space['2'],
        },
        md: {
          gap: space['3'],
        },
        lg: {
          gap: space['4'],
        },
        xl: {
          gap: space['5'],
        },
        '2xl': {
          gap: space['6'],
        },
        '3xl': {
          gap: space['7'],
        },
        '4xl': {
          gap: space['8'],
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
    const { styles } = useStyles(stylesheet, {
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
