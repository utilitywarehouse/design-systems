import React, { forwardRef } from 'react';
import { type StyleProp, type ViewStyle, type ViewProps, View } from 'react-native';
import { createStyleSheet, type UnistylesValues, useStyles } from 'react-native-unistyles';

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
    const { styles } = useStyles(stylesheet, {
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

const stylesheet = createStyleSheet(({ space }) => ({
  text: {
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
      attached: {
        true: {
          gap: 0,
        },
      },
    },
  },
  extraStyles: (flexDirection: ViewStyle['flexDirection']) => {
    const extraStyles: UnistylesValues = {
      flexDirection,
    };

    return extraStyles;
  },
}));

export default ButtonGroupRoot;
