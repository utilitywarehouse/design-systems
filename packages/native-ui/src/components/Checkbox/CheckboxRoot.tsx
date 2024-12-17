import React, { forwardRef, useMemo } from 'react';
import { StyleSheet } from 'react-native-unistyles';

import { Pressable, ViewStyle } from 'react-native';
import type CheckboxProps from './Checkbox.props';
import { CheckboxContext } from './Checkbox.context';
import { useCheckboxGroupContext } from './CheckboxGroup.context';
import { PressableRef } from '../../types';

const CheckboxRoot = forwardRef<
  PressableRef,
  CheckboxProps & { states?: { disabled?: boolean; checked?: boolean } }
>(({ children, style, states, ...props }, ref) => {
  const { disabled, checked } = states ?? {};

  const isDisabled = useCheckboxGroupContext()?.disabled ?? disabled;

  const value = useMemo(
    () => ({
      disabled: isDisabled,
      checked,
    }),
    [isDisabled, checked]
  );

  return (
    <CheckboxContext.Provider value={value}>
      <Pressable ref={ref} {...props} style={[styles.container, style as ViewStyle]}>
        {children}
      </Pressable>
    </CheckboxContext.Provider>
  );
});

CheckboxRoot.displayName = 'CheckboxRoot';

const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: theme.space[2],
  },
}));

export default CheckboxRoot;
