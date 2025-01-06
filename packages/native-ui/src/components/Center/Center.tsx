import React, { ComponentProps, forwardRef } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Box } from '../Box';

interface CenterProps extends Omit<ComponentProps<typeof Box>, 'style'> {}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Center = forwardRef<View, CenterProps>(({ children, ...props }, ref) => (
  <Box ref={ref} style={styles.container} {...props}>
    {children}
  </Box>
));

Center.displayName = 'Center';

export default Center;
