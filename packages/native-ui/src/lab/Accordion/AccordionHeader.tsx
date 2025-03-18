import React, { FC } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AccordionHeaderProps } from './types';

export const AccordionHeader: FC<AccordionHeaderProps> = ({ children, ...props }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.header} {...props}>
      {children}
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  header: {
    width: '100%',
  },
}));

export default AccordionHeader;
