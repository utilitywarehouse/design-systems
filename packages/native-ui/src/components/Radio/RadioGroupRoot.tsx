import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import RadioGroupProps from './RadioGroup.props';

const RadioGroup = ({ children, style, ...props }: RadioGroupProps) => {
  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
};

RadioGroup.displayName = 'RadioGroup';

const styles = StyleSheet.create(theme => ({
  container: {
    gap: theme.space['100'],
  },
}));

export default RadioGroup;
