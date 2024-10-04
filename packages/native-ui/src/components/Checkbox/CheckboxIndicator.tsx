import React, { forwardRef } from 'react';
import AnimatedOutline from '../AnimatedOutline';
import { useListContext } from '../List';
import { View, ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useCheckboxContext } from './Checkbox.context';

const CheckboxIndicator = forwardRef<View, ViewProps>((props, ref) => {
  const [show, setShow] = React.useState(false);
  const isInList = Boolean(useListContext());
  const { disabled, checked } = useCheckboxContext();
  const { styles } = useStyles(stylesheet, {
    checked,
    disabled,
  });

  console.log('CheckboxIndicator', { checked, disabled });

  return (
    <AnimatedOutline show={isInList || disabled ? false : show}>
      <View
        ref={ref}
        {...props}
        onTouchStart={() => setShow(true)}
        onTouchEnd={() => setTimeout(() => setShow(false), 250)}
        onPointerUp={() => setTimeout(() => setShow(false), 250)}
        onPointerDown={() => setShow(true)}
        style={[styles.container, styles.extraStyles(checked, disabled), props.style]}
      >
        {props.children}
      </View>
    </AnimatedOutline>
  );
});

const stylesheet = createStyleSheet(({ colors, colorMode, radii, borderWidths, space }) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: colorMode === 'dark' ? colors.grey600 : colors.grey500,
    borderWidth: borderWidths[2],
    borderRadius: radii['sm'],
    width: space[6],
    height: space[6],
    variants: {
      checked: {
        true: {
          borderColor: colorMode === 'dark' ? colors.cyan700 : colors.cyan500,
          backgroundColor: colorMode === 'dark' ? colors.cyan700 : colors.cyan500,
        },
      },
      disabled: {
        true: {
          borderColor: colors.grey400,
        },
      },
    },
  },
  extraStyles: (checked?: boolean, disabled?: boolean) => {
    if (checked && disabled) {
      return {
        borderColor: colorMode === 'dark' ? colors.grey700 : colors.grey150,
        backgroundColor: colorMode === 'dark' ? colors.grey700 : colors.grey150,
      };
    }

    return {};
  },
}));

CheckboxIndicator.displayName = 'CheckboxIndicator';

export default CheckboxIndicator;
