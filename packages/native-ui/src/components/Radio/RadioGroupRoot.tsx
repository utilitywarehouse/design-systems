import React, { forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { View } from 'react-native';
import RadioGroupProps from './RadioGroup.props';

const RadioGroup = forwardRef<View, RadioGroupProps>(
  ({ children, disabled, style, ...props }, ref) => {
    const { styles } = useStyles(stylesheet);

    return (
      <View ref={ref} {...props} style={[styles.container, style]}>
        {children}
      </View>
    );
  }
);

const stylesheet = createStyleSheet(({ space }) => ({
  container: {
    gap: space[2],
  },
}));

export default RadioGroup;
