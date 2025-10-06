import { forwardRef } from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import LabelProps from './Label.props';

const Label = forwardRef<Text, LabelProps>(
  ({ children, nested, disabled, style, ...props }, ref) => {
    styles.useVariants({ nested, disabled });
    return (
      <Text ref={ref} style={[styles.text, style]} {...props}>
        {children}
      </Text>
    );
  }
);

Label.displayName = 'Label';

const styles = StyleSheet.create(theme => ({
  text: {
    letterSpacing: 0,
    fontFamily: theme.fontFamily.body,
    fontStyle: 'normal',
    fontWeight: theme.fontWeight.semibold,
    lineHeight: theme.lineHeight['500'],
    fontSize: theme.fontSize['100'],
    color: theme.colors.grey1000,
    variants: {
      nested: {
        true: {
          fontWeight: theme.fontWeight.regular,
        },
      },
      disabled: {
        true: {
          color: theme.colors.grey400,
        },
      },
    },
  },
}));

export default Label;
