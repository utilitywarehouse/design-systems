import React, { forwardRef } from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text } from '../../components';

export const AccordionContentText = forwardRef<RNText, TextProps>(
  ({ children, style, ...props }, ref) => {
    const { styles } = useStyles(stylesheet);

    return (
      <Text ref={ref} style={[styles.contentText, style]} {...props}>
        {children}
      </Text>
    );
  }
);

AccordionContentText.displayName = 'AccordionContentText';

const stylesheet = createStyleSheet(() => ({
  contentText: {},
}));

export default AccordionContentText;
