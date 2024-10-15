import React, { forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { View } from 'react-native';
import CheckboxGroupProps from './CheckboxGroup.props';

const CheckboxGroup = forwardRef<View, CheckboxGroupProps>(({ children, style, ...props }, ref) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View ref={ref} {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
});

CheckboxGroup.displayName = 'CheckboxGroup';

const stylesheet = createStyleSheet(({ space }) => ({
  container: {
    gap: space[2],
  },
}));

export default CheckboxGroup;
