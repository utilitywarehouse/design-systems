/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ComponentType, forwardRef } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useListItemContext } from './ListItem.context';
import { Icon, IconProps } from '../../Icon';
import type { SvgRef } from '../../../types';

const ListItemTrailingIcon = forwardRef<SvgRef, IconProps & { as?: ComponentType }>(
  ({ children, ...props }, ref) => {
    const { disabled, showPressed } = useListItemContext();
    styles.useVariants({ disabled, showPressed });
    return (
      <Icon
        ref={ref}
        {...props}
        style={
          Platform.OS === 'web'
            ? {
                ...styles.icon,
                ...(props.style as ViewStyle),
              }
            : [styles.icon as StyleProp<ViewStyle>, props.style]
        }
      >
        {children}
      </Icon>
    );
  }
);

ListItemTrailingIcon.displayName = 'ListItemTrailingIcon';

const styles = StyleSheet.create(theme => ({
  icon: {
    color: theme.colors.grey800,
    width: 24,
    height: 24,
    variants: {
      disabled: {
        true: {
          color: theme.colorMode === 'light' ? theme.colors.grey400 : theme.colors.grey500,
        },
      },
      showPressed: {
        true: {
          color: theme.colorMode === 'light' ? theme.colors.cyan600 : theme.colors.cyan700,
        },
      },
    },
  },
}));

export default ListItemTrailingIcon;
