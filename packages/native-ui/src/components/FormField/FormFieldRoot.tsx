import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { View, ViewProps } from 'react-native';

const FormFieldRoot = forwardRef<View, ViewProps>(({ children, style, ...props }, ref) => {
  return (
    <View ref={ref} {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
});

FormFieldRoot.displayName = 'FormFieldRoot';

const styles = StyleSheet.create(({ space }) => ({
  container: {
    flexDirection: 'column',
    gap: space[2],
  },
}));

export default FormFieldRoot;
