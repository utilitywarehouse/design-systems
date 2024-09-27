import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import type { InterfaceRadio } from '@gluestack-ui/radio/src/types';
import { Pressable, PressableProps } from 'react-native';

const RadioRoot: React.FC<InterfaceRadio & PressableProps> = ({ children, style, ...props }) => {
  const { styles } = useStyles(stylesheet);
  return (
    <Pressable {...props} style={[styles.container, style]}>
      {children}
    </Pressable>
  );
};

const stylesheet = createStyleSheet(({ space }) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: space[2],
  },
}));

export default RadioRoot;
