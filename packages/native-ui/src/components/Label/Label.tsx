import React, { forwardRef } from 'react';
import { Text } from '../Text';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text as RNText } from 'react-native';

import LabelProps from './Label.props';

const Label = forwardRef<RNText, LabelProps>(
  ({ children, nested, style, disabled, ...props }, ref) => {
    const { styles } = useStyles(stylesheet, { nested, disabled });

    return (
      <Text ref={ref} style={[styles.text, style]} {...props}>
        {children}
      </Text>
    );
  }
);

Label.displayName = 'Label';

const stylesheet = createStyleSheet(({ colors, fontWeights, lineHeights }) => ({
  text: {
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights['lg'],
    variants: {
      nested: {
        true: {
          fontWeight: fontWeights.normal,
        },
      },
      disabled: {
        true: {
          color: colors.grey400,
        },
      },
    },
  },
}));

export default Label;
