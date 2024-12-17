import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { View } from 'react-native';
import CheckboxGroupProps from './CheckboxGroup.props';

const CheckboxGroup = forwardRef<View, CheckboxGroupProps>(({ children, style, ...props }, ref) => {
  return (
    <View ref={ref} {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
});

CheckboxGroup.displayName = 'CheckboxGroup';

const styles = StyleSheet.create(theme => ({
  container: {
    gap: theme.space[2],
  },
}));

export default CheckboxGroup;
