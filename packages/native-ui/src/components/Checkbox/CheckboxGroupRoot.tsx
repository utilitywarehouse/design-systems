import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import CheckboxGroupProps from './CheckboxGroup.props';

const CheckboxGroup = ({ children, style, ...props }: CheckboxGroupProps) => {
  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

const styles = StyleSheet.create(theme => ({
  container: {
    gap: theme.space['100'],
  },
}));

export default CheckboxGroup;
