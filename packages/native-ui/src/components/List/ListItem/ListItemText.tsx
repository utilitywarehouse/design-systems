import React, { forwardRef } from 'react';
import { Text as RNText } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Text } from '../../Text';
import { useListItemContext } from './ListItem.context';
import type TextProps from '../../Text/Text.props';

const ListItemText = forwardRef<RNText, TextProps>(({ children, ...props }, ref) => {
  const { disabled } = useListItemContext();
  styles.useVariants({ disabled });
  return (
    <Text ref={ref} {...props} style={[styles.text, props.style]}>
      {children}
    </Text>
  );
});

ListItemText.displayName = 'ListItemText';

const styles = StyleSheet.create(theme => ({
  text: {
    fontSize: theme.fontSize['150'],
    lineHeight: theme.lineHeight['500'],
    variants: {
      disabled: {
        true: {
          color: theme.colorMode === 'light' ? theme.colors.grey400 : theme.colors.grey500,
        },
      },
    },
  },
}));

export default ListItemText;
