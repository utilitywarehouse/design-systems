/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ComponentProps, ComponentType, forwardRef } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useListItemContext } from './ListItem.context';
import { Icon } from '../../Icon';
import type { SvgRef } from '../../../types';

const ListItemIcon = forwardRef<SvgRef, ComponentProps<typeof Icon> & { as?: ComponentType }>(
  ({ children, ...props }, ref) => {
    const { disabled } = useListItemContext();
    const { styles } = useStyles(stylesheet);
    return (
      <Icon
        ref={ref}
        {...props}
        style={
          Platform.OS === 'web'
            ? {
                ...styles.icon,
                ...styles.extraStyles(disabled),
                ...(props.style as ViewStyle),
              }
            : [
                styles.icon as StyleProp<ViewStyle>,
                styles.extraStyles(disabled) as StyleProp<ViewStyle>,
                props.style,
              ]
        }
      >
        {children}
      </Icon>
    );
  }
);

ListItemIcon.displayName = 'ListItemIcon';

const stylesheet = createStyleSheet(({ colors, colorMode }) => ({
  icon: {
    color: colors.grey800,
    width: 24,
    height: 24,
  },
  extraStyles: disabled => {
    if (disabled) {
      return {
        color: colorMode === 'light' ? colors.grey400 : colors.grey500,
      };
    }
    return {};
  },
}));

export default ListItemIcon;
