import React, { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export const AccordionHeader = forwardRef<View, ViewProps>(({ children, style, ...props }, ref) => (
  <View ref={ref} style={[styles.header, style]} {...props}>
    {children}
  </View>
));

AccordionHeader.displayName = 'AccordionHeader';

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
});

export default AccordionHeader;
