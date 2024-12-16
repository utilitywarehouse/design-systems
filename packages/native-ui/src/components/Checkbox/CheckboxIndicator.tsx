import React, { forwardRef } from 'react';
import AnimatedOutline from '../AnimatedOutline';
import { useListContext } from '../List';
import { View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useCheckboxContext } from './Checkbox.context';

const CheckboxIndicator = forwardRef<View, ViewProps>((props, ref) => {
  const [show, setShow] = React.useState(false);
  const isInList = Boolean(useListContext());
  const { disabled, checked } = useCheckboxContext();
  styles.useVariants({ checked, disabled });

  return (
    <AnimatedOutline show={isInList || disabled ? false : show} style={styles.outline}>
      <View
        ref={ref}
        {...props}
        onTouchStart={() => setShow(true)}
        onTouchEnd={() => setTimeout(() => setShow(false), 250)}
        onPointerUp={() => setTimeout(() => setShow(false), 250)}
        onPointerDown={() => setShow(true)}
        style={[styles.container, props.style]}
      >
        {props.children}
      </View>
    </AnimatedOutline>
  );
});

const styles = StyleSheet.create(({ colors, isDark, radii, borderWidths, space }) => ({
  outline: {
    alignSelf: 'flex-start',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: isDark ? colors.grey600 : colors.grey500,
    borderWidth: borderWidths[2],
    borderRadius: radii['sm'],
    width: space[6],
    height: space[6],
    variants: {
      checked: {
        true: {
          borderColor: isDark ? colors.cyan700 : colors.cyan500,
          backgroundColor: isDark ? colors.cyan700 : colors.cyan500,
        },
      },
      disabled: {
        true: {
          borderColor: colors.grey400,
        },
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        styles: {
          borderColor: isDark ? colors.grey700 : colors.grey150,
          backgroundColor: isDark ? colors.grey700 : colors.grey150,
        },
      },
    ],
  },
}));

CheckboxIndicator.displayName = 'CheckboxIndicator';

export default CheckboxIndicator;
