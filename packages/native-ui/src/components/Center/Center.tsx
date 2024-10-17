import React, { ComponentProps, forwardRef } from 'react';
import { View } from 'react-native';
import { createStyleSheet } from 'react-native-unistyles';
import { Box } from '../../lab';

interface CenterProps extends Omit<ComponentProps<typeof Box>, 'style'> {}

const stylesheet = createStyleSheet({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Center = forwardRef<View, CenterProps>(({ children, ...props }, ref) => (
  <Box ref={ref} style={stylesheet.container} {...props}>
    {children}
  </Box>
));

Center.displayName = 'Center';

export default Center;
