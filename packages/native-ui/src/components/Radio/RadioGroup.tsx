import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { View, ViewProps } from 'react-native';

const RadioGroup: React.FC<ViewProps> = ({ children, style, ...props }) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
};

const stylesheet = createStyleSheet(({ space }) => ({
  container: {
    gap: space[2],
  },
}));

export default RadioGroup;
