import React from 'react';
import { View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import AnimatedOutline from '../AnimatedOutline';
import { useListContext } from '../List';
import { useCheckboxContext } from './Checkbox.context';

const CheckboxIndicator = (props: ViewProps) => {
  const [show, setShow] = React.useState(false);
  const isInList = Boolean(useListContext());
  const { disabled, checked } = useCheckboxContext();
  styles.useVariants({ checked, disabled });

  return (
    <AnimatedOutline show={isInList || disabled ? false : show} style={styles.outline}>
      <View
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
};

const styles = StyleSheet.create(theme => ({
  outline: {
    alignSelf: 'flex-start',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: theme.isDark ? theme.colors.grey600 : theme.colors.grey500,
    borderWidth: theme.borderWidth[2],
    borderRadius: theme.borderRadius.xs,
    width: theme.space['300'],
    height: theme.space['300'],
    variants: {
      checked: {
        true: {
          borderColor: theme.isDark ? theme.colors.cyan700 : theme.colors.cyan500,
          backgroundColor: theme.isDark ? theme.colors.cyan700 : theme.colors.cyan500,
        },
      },
      disabled: {
        true: {
          borderColor: theme.colors.grey400,
        },
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        styles: {
          borderColor: theme.isDark ? theme.colors.grey700 : theme.colors.grey150,
          backgroundColor: theme.isDark ? theme.colors.grey700 : theme.colors.grey150,
        },
      },
    ],
  },
}));

CheckboxIndicator.displayName = 'CheckboxIndicator';

export default CheckboxIndicator;
