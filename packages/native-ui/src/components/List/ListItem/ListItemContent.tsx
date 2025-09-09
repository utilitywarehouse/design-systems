import React, { forwardRef } from 'react';
import { View, type ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const ListItemContent = forwardRef<View, ViewProps>(({ children, ...props }, ref) => {
  return (
    <View ref={ref} {...props} style={[styles.container, props.style]}>
      {children}
    </View>
  );
});

ListItemContent.displayName = 'ListItemContent';

const styles = StyleSheet.create(theme => ({
  container: {
    gap: theme.space[1],
    flex: 1,
  },
}));

export default ListItemContent;
