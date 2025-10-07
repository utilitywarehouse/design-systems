import React from 'react';
import { View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import AnimatedOutline from '../AnimatedOutline';
import { useListContext } from '../List';
import { useRadioContext } from './Radio.context';

const RadioIndicator = (props: ViewProps) => {
  const [show, setShow] = React.useState(false);
  const isInList = Boolean(useListContext());
  const { disabled, checked } = useRadioContext();
  styles.useVariants({
    checked,
    disabled,
  });

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
    borderColor: theme.colorMode === 'dark' ? theme.colors.grey600 : theme.colors.grey500,
    borderWidth: theme.borderWidth[2],
    borderRadius: theme.borderRadius.full,
    width: theme.space['300'],
    height: theme.space['300'],
    variants: {
      checked: {
        true: {
          borderColor: theme.colorMode === 'dark' ? theme.colors.cyan700 : theme.colors.cyan500,
          backgroundColor: 'transparent',
        },
      },
      disabled: {
        true: {
          borderColor: theme.colors.grey400,
        },
      },
    },
  },
}));

RadioIndicator.displayName = 'RadioIndicator';

export default RadioIndicator;
