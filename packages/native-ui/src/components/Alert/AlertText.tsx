import React, { forwardRef } from 'react';
import { Text, TextProps } from 'react-native';
import { useAlertContext } from './Alert.context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const AlertText = forwardRef<Text, TextProps>(({ children, ...props }, ref) => {
  const { colorScheme } = useAlertContext();
  const { styles } = useStyles(stylesheet, { colorScheme });
  return (
    <Text ref={ref} {...props} style={[styles.text, props.style]}>
      {children}
    </Text>
  );
});

AlertText.displayName = 'AlertText';

const stylesheet = createStyleSheet(({ fonts, fontSizes, fontWeights, lineHeights, colors }) => ({
  text: {
    fontFamily: fonts.body,
    fontWeight: fontWeights.normal,
    fontSize: fontSizes.md,
    lineHeight: lineHeights.lg,
    flexShrink: 1,
    variants: {
      colorScheme: {
        cyan: {
          color: colors.cyan900,
        },
        red: {
          color: colors.red900,
        },
        green: {
          color: colors.green900,
        },
        gold: {
          color: colors.gold900,
        },
      },
    },
  },
}));

export default AlertText;
