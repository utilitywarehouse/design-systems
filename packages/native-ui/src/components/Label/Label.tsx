import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from 'react-native';
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
    letterSpacing: theme.letterSpacings.md,
    fontFamily: theme.fonts.body,
    fontStyle: 'normal',
    fontWeight: theme.fontWeights.semibold,
    lineHeight: theme.lineHeights['lg'],
    fontSize: theme.fontSizes.md,
    color: theme.colors.grey1000,
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
