import React, { FC } from 'react';
import { Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AccordionContentTextProps } from './types';

export const AccordionContentText: FC<AccordionContentTextProps> = ({ children, ...props }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Text style={styles.contentText} {...props}>
      {children}
    </Text>
  );
};

const stylesheet = createStyleSheet(({ fontSizes, colors, colorMode }) => ({
  contentText: {
    fontSize: fontSizes.sm,
    color: colorMode === 'light' ? colors.grey700 : colors.grey300,
  },
}));

export default AccordionContentText;
