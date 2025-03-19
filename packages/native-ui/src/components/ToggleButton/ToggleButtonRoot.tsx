import React, { forwardRef, PropsWithChildren, useMemo } from 'react';
import { Pressable, ViewStyle } from 'react-native';
import { PressableRef } from '../../types';
import { ToggleButtonContext } from './ToggleButton.context';
import { ToggleButtonProps } from './ToggleButton.props';
import { useToggleButtonGroupContext } from './ToggleButtonGroup.context';
import { StyleSheet } from 'react-native-unistyles';

const ToggleButtonRoot = forwardRef<PressableRef, PropsWithChildren<ToggleButtonProps>>(
  ({ children, disabled = false, value, ...props }, ref) => {
    const { size } = useToggleButtonGroupContext();
    styles.useVariants({ size });

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

const styles = StyleSheet.create(({ radii, space }) => ({
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
        },
      },
    },
  },
}));

export default ToggleButtonRoot;
