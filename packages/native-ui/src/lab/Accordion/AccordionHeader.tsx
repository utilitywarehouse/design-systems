import React, { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const AccordionHeader = forwardRef<View, ViewProps>(({ children, style, ...props }, ref) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View ref={ref} style={[styles.header, style]} {...props}>
      {children}
    </View>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

const stylesheet = createStyleSheet(() => ({
  header: {
    width: '100%',
  },
}));

export default AccordionHeader;
