import React, { forwardRef } from 'react';
import { Text } from '../Text';
import { StyleSheet } from 'react-native-unistyles';
import { Text as RNText } from 'react-native';
import LabelProps from './Label.props';

const Label = forwardRef<RNText, LabelProps>(
  ({ children, nested, style, disabled, ...props }, ref) => {
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
    fontWeight: theme.fontWeights.semibold,
    lineHeight: theme.lineHeights['lg'],
    variants: {
      nested: {
        true: {
          fontWeight: theme.fontWeights.normal,
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
