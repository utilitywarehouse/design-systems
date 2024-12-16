import React, { forwardRef } from 'react';
import type { Text, TextProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import AlertText from './AlertText';

const AlertTitle = forwardRef<Text, TextProps>(({ children, ...props }, ref) => {
  return (
    <AlertText ref={ref} {...props} style={[styles.text, props.style]}>
      {children}
    </AlertText>
  );
});

AlertTitle.displayName = 'AlertTitle';

const styles = StyleSheet.create(theme => ({
  text: {
    fontWeight: theme.fontWeights.semibold,
  },
}));

export default AlertTitle;
