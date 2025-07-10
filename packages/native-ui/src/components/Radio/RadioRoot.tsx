import { useMemo } from 'react';
import { StyleSheet } from 'react-native-unistyles';

import { Pressable, ViewStyle } from 'react-native';
import { RadioContext } from './Radio.context';
import type RadioProps from './Radio.props';
import { useRadioGroupContext } from './RadioGroup.context';

const RadioRoot = ({
  children,
  style,
  states,
  ...props
}: RadioProps & { states?: { disabled?: boolean; checked?: boolean } }) => {
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
      <Pressable {...props} style={[styles.container, style as ViewStyle]}>
        {children}
      </Pressable>
    </RadioContext.Provider>
  );
};

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
