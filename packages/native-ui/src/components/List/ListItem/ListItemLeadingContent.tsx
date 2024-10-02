import React, { forwardRef } from 'react';
import { View, type ViewProps } from 'react-native';

const ListItemLeadingContent = forwardRef<View, ViewProps>(({ children, ...props }, ref) => (
  <View ref={ref} {...props}>
    {children}
  </View>
));

ListItemLeadingContent.displayName = 'ListItemLeadingContent';

export default ListItemLeadingContent;
