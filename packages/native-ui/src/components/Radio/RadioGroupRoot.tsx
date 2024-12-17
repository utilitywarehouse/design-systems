import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { View } from 'react-native';
import RadioGroupProps from './RadioGroup.props';

const RadioGroup = forwardRef<View, RadioGroupProps>(({ children, style, ...props }, ref) => {
  return (
    <View ref={ref} {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
});

RadioGroup.displayName = 'RadioGroup';

const styles = StyleSheet.create(theme => ({
  container: {
    gap: theme.space[2],
  },
}));

export default RadioGroup;
