import { StyleSheet, View, ViewProps } from 'react-native';
import { Text } from '../Text';

const ListItem = ({ children, style, ...rest }: ViewProps) => {
  return (
    <View style={[styles.item, style]} {...rest}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default ListItem;
