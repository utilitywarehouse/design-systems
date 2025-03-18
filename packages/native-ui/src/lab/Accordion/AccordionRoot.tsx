import React, { FC } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const AccordionRoot: FC<AccordionRootProps> = ({ children, ...props }) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.root} {...props}>
      {children}
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  root: {
    width: '100%',
  },
}));

export default AccordionRoot;
