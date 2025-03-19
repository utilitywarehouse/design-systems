import React, { forwardRef } from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { Text } from '../../components';

export const AccordionContentText = forwardRef<RNText, TextProps>(({ children, ...props }, ref) => {
  return (
    <Text ref={ref} {...props}>
      {children}
    </Text>
  );
});

AccordionContentText.displayName = 'AccordionContentText';

export default AccordionContentText;
