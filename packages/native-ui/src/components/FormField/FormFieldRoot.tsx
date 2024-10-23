import React, { forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { View, ViewProps } from 'react-native';

const FormFieldRoot = forwardRef<View, ViewProps>(({ children, style, ...props }, ref) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View ref={ref} {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
});

FormFieldRoot.displayName = 'FormFieldRoot';

const stylesheet = createStyleSheet(({ space }) => ({
  container: {
    flexDirection: 'column',
    gap: space[2],
  },
}));

export default FormFieldRoot;
