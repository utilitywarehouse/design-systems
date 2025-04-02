import React, { forwardRef } from 'react';
import { createStyleSheet } from 'react-native-unistyles';
import { View, ViewProps } from 'react-native';

const TextareaSlot = forwardRef<View, ViewProps>(({ children, style, ...props }, ref) => {
  return (
    <View ref={ref} {...props} style={[stylesheet.container, style]}>
      {children}
    </View>
  );
});

TextareaSlot.displayName = 'TextareaSlot';

const stylesheet = createStyleSheet({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default TextareaSlot;
