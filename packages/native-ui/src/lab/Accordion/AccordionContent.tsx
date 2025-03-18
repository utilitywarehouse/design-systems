import React, { FC } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AccordionContentProps } from './types';

export const AccordionContent: FC<AccordionContentProps> = ({ children, ...props }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.content} {...props}>
      {children}
    </View>
  );
};

const stylesheet = createStyleSheet(({ space }) => ({
  content: {
    paddingHorizontal: space[4],
    paddingVertical: space[3],
  },
}));

export default AccordionContent;
