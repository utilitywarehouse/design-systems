import React, { forwardRef } from 'react';
import { Text as RNText, type ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from '../../Text';
import { useListItemContext } from './ListItem.context';

const ListItemSupportingText = forwardRef<RNText, ViewProps>(({ children, ...props }, ref) => {
  const { disabled } = useListItemContext();

  return (
    <Text ref={ref} {...props} style={[styles.text, styles.extraStyles(disabled), props.style]}>
      {children}
    </Text>
  );
});

ListItemSupportingText.displayName = 'ListItemSupportingText';

const styles = StyleSheet.create(({ lineHeights, colors, colorMode }) => ({
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
