import React, { FC } from 'react';
import { Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AccordionTitleTextProps } from './types';

export const AccordionTitleText: FC<AccordionTitleTextProps> = ({ children, ...props }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Text style={styles.titleText} {...props}>
      {children}
    </Text>
  );
};

const stylesheet = createStyleSheet(({ fontSizes, colors, colorMode }) => ({
  titleText: {
    fontSize: fontSizes.md,
    color: colorMode === 'light' ? colors.grey900 : colors.white,
    fontWeight: '500',
    flex: 1,
  },
}));

export default AccordionTitleText;
