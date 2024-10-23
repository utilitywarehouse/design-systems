import React, { forwardRef } from 'react';
import AnimatedOutline from '../AnimatedOutline';
import { useListContext } from '../List';
import { View, ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useRadioContext } from './Radio.context';

const RadioIndicator = forwardRef<View, ViewProps>((props, ref) => {
  const [show, setShow] = React.useState(false);
  const isInList = Boolean(useListContext());
  const { disabled, checked } = useRadioContext();
  const { styles } = useStyles(stylesheet, {
    checked,
    disabled,
  });

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

const stylesheet = createStyleSheet(({ colors, colorMode, radii, borderWidths, space }) => ({
  outline: {
    alignSelf: 'flex-start',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: colorMode === 'dark' ? colors.grey600 : colors.grey500,
    borderWidth: borderWidths[2],
    borderRadius: radii.full,
    width: space[6],
    height: space[6],
    variants: {
      checked: {
        true: {
          borderColor: colorMode === 'dark' ? colors.cyan700 : colors.cyan500,
          backgroundColor: 'transparent',
        },
      },
      disabled: {
        true: {
          borderColor: colors.grey400,
        },
      },
    },
  },
}));

RadioIndicator.displayName = 'RadioIndicator';

export default RadioIndicator;
