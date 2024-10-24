import React, { forwardRef } from 'react';
import { createStyleSheet } from 'react-native-unistyles';
import { View, ViewProps } from 'react-native';

const InputSlot = forwardRef<View, ViewProps>(({ children, style, ...props }, ref) => {
  return (
    <View ref={ref} {...props} style={[stylesheet.container, style]}>
      {children}
    </View>
  );
});

InputSlot.displayName = 'InputSlot';

const stylesheet = createStyleSheet({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputSlot;
