import { View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export const AccordionHeader = ({ children, style, ...props }: ViewProps) => (
  <View style={[styles.header, style]} {...props}>
    {children}
  </View>
);

AccordionHeader.displayName = 'AccordionHeader';

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
});

export default AccordionHeader;
