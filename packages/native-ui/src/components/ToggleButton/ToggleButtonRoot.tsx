import React, { forwardRef, PropsWithChildren, useMemo } from 'react';
import { Pressable, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { PressableRef } from '../../types';
import { ToggleButtonContext } from './ToggleButton.context';
import { ToggleButtonProps } from './ToggleButton.props';

const ToggleButtonRoot = forwardRef<PressableRef, PropsWithChildren<ToggleButtonProps>>(
  ({ children, disabled = false, value, ...props }, ref) => {
    const { styles } = useStyles(stylesheet);

    const contextValue = useMemo(() => ({ value, disabled }), [value, disabled]);

    return (
      <ToggleButtonContext.Provider value={contextValue}>
        <Pressable
          ref={ref}
          {...props}
          disabled={disabled}
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
    paddingVertical: space[1.5],
    flexGrow: 1,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
}));

export default ToggleButtonRoot;
