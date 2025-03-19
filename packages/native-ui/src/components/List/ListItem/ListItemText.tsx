import React, { forwardRef } from 'react';
import { Text as RNText } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text } from '../../Text';
import { useListItemContext } from './ListItem.context';
import type TextProps from '../../Text/Text.props';

const ListItemText = forwardRef<RNText, TextProps>(({ children, ...props }, ref) => {
  const { disabled } = useListItemContext();
  const { styles } = useStyles(stylesheet, { disabled });
  return (
    <Text ref={ref} {...props} style={[styles.text, props.style]}>
      {children}
    </Text>
  );
});

ListItemText.displayName = 'ListItemText';

const stylesheet = createStyleSheet(({ colors, colorMode, fontSizes, lineHeights }) => ({
  text: {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    variants: {
      disabled: {
        true: {
          color: colorMode === 'light' ? colors.grey400 : colors.grey500,
        },
      },
    },
  },
}));

export default ListItemText;
