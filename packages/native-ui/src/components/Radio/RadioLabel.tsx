import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text, TextProps } from 'react-native';
import { States } from '../../types';

const RadioLabel: React.FC<TextProps & { readonly dataSet?: States }> = ({
  children,
  style,
  dataSet: states,
  ...props
}) => {
  const { styles } = useStyles(stylesheet, {
    checked: states?.checked,
    disabled: states?.disabled,
  });
  console.log('label', props);
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const stylesheet = createStyleSheet(({ lineHeights, fontSizes, fonts, fontWeights, colors }) => ({
  text: {
    color: colors.grey1000,
    lineHeight: lineHeights.lg,
    fontSize: fontSizes.md,
    fontFamily: fonts.body,
    fontWeight: fontWeights.normal,
    variants: {
      checked: {
        true: {
          color: colors.grey1000,
        },
      },
      disabled: {
        true: {
          color: colors.grey500,
        },
      },
    },
  },
}));

export default RadioLabel;
