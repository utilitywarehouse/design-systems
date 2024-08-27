import React from 'react';
import type { TextProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import AlertText from './AlertText';

const AlertTitle: React.FC<TextProps> = ({ children, ...props }) => {
  const { styles } = useStyles(stylesheet);
  return (
    <AlertText {...props} style={[styles.text, props.style]}>
      {children}
    </AlertText>
  );
};

AlertTitle.displayName = 'AlertTitle';

const stylesheet = createStyleSheet(({ fontWeights }) => ({
  text: {
    fontWeight: fontWeights.semibold,
  },
}));

export default AlertTitle;
