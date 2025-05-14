import React, { forwardRef } from 'react';
import { View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import FlexProps from './Flex.props';

const Flex = forwardRef<View, FlexProps>(
  (
    {
      style,
      children,
      direction = 'column',
      align = 'flex-start',
      justify = 'flex-start',
      wrap = 'nowrap',
      space = 'md',
      ...rest
    },
    ref
  ) => {
    const propStyle: ViewStyle = {
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap,
    };

    styles.useVariants({ space });

    return (
      <View style={[propStyle, styles.flex, style]} ref={ref} {...rest}>
        {children}
      </View>
    );
  }
);

Flex.displayName = 'Flex';

const styles = StyleSheet.create(theme => ({
  flex: {
    display: 'flex',
    variants: {
      space: {
        none: {},
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
    },
  },
}));

export default Flex;
