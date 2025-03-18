import React, { FC } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AccordionItemProps } from './types';

export const AccordionItem: FC<AccordionItemProps> = ({ children, ...props }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.item} {...props}>
      {children}
    </View>
  );
};

const stylesheet = createStyleSheet(({ colors, colorMode }) => ({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: colorMode === 'light' ? colors.grey200 : colors.grey800,
  },
}));

export default AccordionItem;
