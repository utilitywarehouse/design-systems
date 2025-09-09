import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { View, ViewProps } from 'react-native';

const TextareaSlot = forwardRef<View, ViewProps>(({ children, style, ...props }, ref) => {
  return (
    <View ref={ref} {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
});

TextareaSlot.displayName = 'TextareaSlot';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default TextareaSlot;
