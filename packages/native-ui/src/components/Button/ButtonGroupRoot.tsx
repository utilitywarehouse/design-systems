import React, { forwardRef } from 'react';
import { type StyleProp, type ViewStyle, type ViewProps, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const ButtonGroupRoot = forwardRef<
  View,
  ViewProps & {
    flexDirection?: ViewStyle['flexDirection'];
    reversed?: boolean;
    attached?: boolean;
    space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  }
>(
  (
    { children, attached = false, flexDirection = 'row', reversed = false, space = 'md', ...props },
    ref
  ) => {
    let direction = flexDirection;
    if (reversed) {
      if (flexDirection === 'row') direction = 'row-reverse';
      if (flexDirection === 'column') direction = 'column-reverse';
      if (flexDirection === 'row-reverse') direction = 'row';
      if (flexDirection === 'column-reverse') direction = 'column';
    }
    styles.useVariants({
      attached,
      space,
    });
    return (
      <View
        ref={ref}
        {...props}
        style={[styles.text, styles.extraStyles(direction) as StyleProp<ViewStyle>, props.style]}
      >
        {children}
      </View>
    );
  }
);

ButtonGroupRoot.displayName = 'ButtonGroupRoot';

const styles = StyleSheet.create(theme => ({
  text: {
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
      attached: {
        true: {
          gap: 0,
        },
      },
    },
  },
  extraStyles: (flexDirection: ViewStyle['flexDirection']) => ({ flexDirection }),
}));

export default ButtonGroupRoot;
