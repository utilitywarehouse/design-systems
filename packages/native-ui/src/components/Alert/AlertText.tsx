import React, { forwardRef } from 'react';
import { Text, TextProps } from 'react-native';
import { useAlertContext } from './Alert.context';
import { StyleSheet } from 'react-native-unistyles';

const AlertText = forwardRef<Text, TextProps>(({ children, ...props }, ref) => {
  const { colorScheme } = useAlertContext();
  styles.useVariants({ colorScheme });
  return (
    <Text ref={ref} {...props} style={[styles.text, props.style]}>
      {children}
    </Text>
  );
});

AlertText.displayName = 'AlertText';

const styles = StyleSheet.create(theme => ({
  text: {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSizes.md,
    lineHeight: theme.lineHeights.lg,
    flexShrink: 1,
    variants: {
      colorScheme: {
        cyan: {
          color: theme.colors.cyan900,
        },
        red: {
          color: theme.colors.red900,
        },
        green: {
          color: theme.colors.green900,
        },
        gold: {
          color: theme.colors.gold900,
        },
      },
    },
  },
}));

export default AlertText;
