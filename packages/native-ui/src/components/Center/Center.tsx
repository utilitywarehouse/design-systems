import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { Box } from '../Box';

type CenterProps = Omit<ComponentProps<typeof Box>, 'style'>;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Center = ({ children, ...props }: CenterProps) => (
  <Box style={styles.container} {...props}>
    {children}
  </Box>
);

Center.displayName = 'Center';

export default Center;
