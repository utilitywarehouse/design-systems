import React, { forwardRef, useMemo } from 'react';
import { StyleSheet } from 'react-native-unistyles';

import { Pressable, ViewStyle } from 'react-native';
import type RadioProps from './Radio.props';
import { RadioContext } from './Radio.context';
import { useRadioGroupContext } from './RadioGroup.context';
import { PressableRef } from '../../types';

const RadioRoot = forwardRef<
  PressableRef,
  RadioProps & { states?: { disabled?: boolean; checked?: boolean } }
>(({ children, style, states, ...props }, ref) => {
  const { disabled, checked } = states ?? {};

  const isDisabled = useRadioGroupContext()?.disabled ?? disabled;

  const value = useMemo(
    () => ({
      disabled: isDisabled,
      checked,
    }),
    [isDisabled, checked]
  );

  return (
    <RadioContext.Provider value={value}>
      <Pressable ref={ref} {...props} style={[styles.container, style as ViewStyle]}>
        {children}
      </Pressable>
    </RadioContext.Provider>
  );
});

RadioRoot.displayName = 'RadioRoot';

const styles = StyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: theme.space[2],
  },
}));

export default RadioRoot;
