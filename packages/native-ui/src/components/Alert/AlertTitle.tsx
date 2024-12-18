import React, { forwardRef } from 'react';
import type { Text, TextProps } from 'react-native';
import AlertText from './AlertText';

const AlertTitle = forwardRef<Text, TextProps>(({ children, ...props }, ref) => (
  <AlertText ref={ref} {...props} semibold>
    {children}
  </AlertText>
));

AlertTitle.displayName = 'AlertTitle';

export default AlertTitle;
