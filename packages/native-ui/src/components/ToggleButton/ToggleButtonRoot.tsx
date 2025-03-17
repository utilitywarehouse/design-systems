import React, { forwardRef, PropsWithChildren, useMemo } from 'react';
import { Pressable, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { PressableRef } from '../../types';
import { ToggleButtonContext } from './ToggleButton.context';
import { ToggleButtonProps } from './ToggleButton.props';
import { useToggleButtonGroupContext } from './ToggleButtonGroup.context';

const ToggleButtonRoot = forwardRef<PressableRef, PropsWithChildren<ToggleButtonProps>>(
  ({ children, disabled = false, value, ...props }, ref) => {
    const { size } = useToggleButtonGroupContext();
    const { styles } = useStyles(stylesheet, { size });

    const contextValue = useMemo(() => ({ value, disabled }), [value, disabled]);
    const slopArea = size === 'small' ? 6 : 2;

    return (
      <ToggleButtonContext.Provider value={contextValue}>
        <Pressable
          ref={ref}
          {...props}
          disabled={disabled}
          hitSlop={{ top: slopArea, bottom: slopArea, left: 0, right: 0 }}
          style={[styles.container, props.style as ViewStyle]}
        >
          {children}
        </Pressable>
      </ToggleButtonContext.Provider>
    );
  }
);

ToggleButtonRoot.displayName = 'ToggleButtonRoot';

const stylesheet = createStyleSheet(({ radii, space }) => ({
  container: {
    borderRadius: radii.full,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: space[2],
    paddingHorizontal: space[4],
    flexGrow: 1,
    backgroundColor: 'transparent',
    zIndex: 1,
    variants: {
      size: {
        small: {
          gap: space[1],
          height: 28,
        },
        base: {
          gap: space[2],
          height: 36,
          shadowColor: 'rgba(18, 18, 18, 0.06)',
          shadowOffset: {
            width: 1,
            height: 2,
          },
          shadowRadius: 4,
          dropShadow: {
            offsetX: 1,
            offsetY: 2,
          },
        },
      },
    },
  },
}));

export default ToggleButtonRoot;
