/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ComponentType, forwardRef } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useListItemContext } from './ListItem.context';
import { Icon, IconProps } from '../../Icon';
import type { SvgRef } from '../../../types';

const ListItemTrailingIcon = forwardRef<SvgRef, IconProps & { as?: ComponentType }>(
  ({ children, ...props }, ref) => {
    const { disabled, showPressed } = useListItemContext();
    const { styles } = useStyles(stylesheet);
    return (
      <Icon
        ref={ref}
        {...props}
        style={
          Platform.OS === 'web'
            ? {
                ...styles.icon,
                ...styles.extraStyles(disabled, showPressed),
                ...(props.style as ViewStyle),
              }
            : [
                styles.icon as StyleProp<ViewStyle>,
                styles.extraStyles(disabled, showPressed) as StyleProp<ViewStyle>,
                props.style,
              ]
        }
      >
        {children}
      </Icon>
    );
  }
);

ListItemTrailingIcon.displayName = 'ListItemTrailingIcon';

const stylesheet = createStyleSheet(({ colors, colorMode }) => ({
  icon: {
    color: colors.grey800,
    width: 24,
    height: 24,
  },
  extraStyles: (disabled?: boolean, showPressed?: boolean) => {
    if (disabled) {
      return {
        color: colorMode === 'light' ? colors.grey400 : colors.grey500,
      };
    }
    if (showPressed) {
      return {
        color: colorMode === 'light' ? colors.cyan600 : colors.cyan700,
      };
    }

    return {};
  },
}));

export default ListItemTrailingIcon;
