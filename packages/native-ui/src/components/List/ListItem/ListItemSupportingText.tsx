import React, { forwardRef } from 'react';
import { Text as RNText, type ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from '../../Text';
import { useListItemContext } from './ListItem.context';

const ListItemSupportingText = forwardRef<RNText, ViewProps>(({ children, ...props }, ref) => {
  const { disabled } = useListItemContext();
  styles.useVariants({ disabled });
  return (
    <Text ref={ref} {...props} style={[styles.text, props.style]}>
      {children}
    </Text>
  );
});

ListItemSupportingText.displayName = 'ListItemSupportingText';

const styles = StyleSheet.create(theme => ({
  text: {
    color: theme.colors.grey600,
    lineHeight: theme.lineHeights.sm,
    variants: {
      disabled: {
        true: {
          color: theme.colorMode === 'light' ? theme.colors.grey400 : theme.colors.grey500,
        },
      },
    },
  },
}));

export default ListItemSupportingText;
