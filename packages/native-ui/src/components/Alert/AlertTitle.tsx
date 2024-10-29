import React, { forwardRef } from 'react';
import type { Text, TextProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import AlertText from './AlertText';

const AlertTitle = forwardRef<Text, TextProps>(({ children, ...props }, ref) => {
  const { styles } = useStyles(stylesheet);
  return (
    <AlertText ref={ref} {...props} style={[styles.text, props.style]}>
      {children}
    </AlertText>
  );
});

AlertTitle.displayName = 'AlertTitle';

const stylesheet = createStyleSheet(({ fontWeights }) => ({
  text: {
    fontWeight: fontWeights.semibold,
  },
}));

export default AlertTitle;
