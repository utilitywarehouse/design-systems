import React, { forwardRef } from 'react';
import { View, type ViewProps } from 'react-native';

const ListItemTrailingContent = forwardRef<View, ViewProps>(({ children, ...props }, ref) => (
  <View ref={ref} {...props}>
    {children}
  </View>
));

ListItemTrailingContent.displayName = 'ListItemTrailingContent';

export default ListItemTrailingContent;
