import React, { forwardRef } from 'react';
import { Text as RNText } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Text } from '../../Text';
import { useListItemContext } from './ListItem.context';
import type TextProps from '../../Text/Text.props';

const ListItemSupportingText = forwardRef<RNText, TextProps>(({ children, ...props }, ref) => {
  const { disabled } = useListItemContext();
  const { styles } = useStyles(stylesheet);
  return (
    <Text ref={ref} {...props} style={[styles.text, styles.extraStyles(disabled), props.style]}>
      {children}
    </Text>
  );
});

ListItemSupportingText.displayName = 'ListItemSupportingText';

const stylesheet = createStyleSheet(({ lineHeights, colors, colorMode }) => ({
  text: {
    color: colors.grey600,
    lineHeight: lineHeights.sm,
  },
  extraStyles: (disabled?: boolean) => {
    if (disabled) {
      return {
        color: colorMode === 'light' ? colors.grey400 : colors.grey500,
      };
    }
    return {};
  },
}));

export default ListItemSupportingText;
