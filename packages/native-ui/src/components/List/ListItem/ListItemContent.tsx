import React, { forwardRef } from 'react';
import { View, type ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const ListItemContent = forwardRef<View, ViewProps>(({ children, ...props }, ref) => {
  const { styles } = useStyles(stylesheet);
  return (
    <View ref={ref} {...props} style={[styles.container, props.style]}>
      {children}
    </View>
  );
});

ListItemContent.displayName = 'ListItemContent';

const stylesheet = createStyleSheet(({ space }) => ({
  container: {
    gap: space[1],
    flex: 1,
  },
}));

export default ListItemContent;
