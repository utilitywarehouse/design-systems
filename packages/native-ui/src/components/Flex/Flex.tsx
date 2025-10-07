import { forwardRef } from 'react';
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
      space = 'sm',
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
      space: theme.globalStyle.variants.space,
    },
  },
}));

export default Flex;
