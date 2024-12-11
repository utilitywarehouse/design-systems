/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { ComponentType, forwardRef } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useInputContext } from './Input.context';
import { Icon, IconProps } from '../Icon';
import type { SvgRef } from '../../types';

const InputIcon = forwardRef<SvgRef, IconProps & { as?: ComponentType }>(
  ({ children, ...props }, ref) => {
    const { disabled } = useInputContext();
    const { styles } = useStyles(stylesheet, { disabled });
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

InputIcon.displayName = 'InputIcon';

const stylesheet = createStyleSheet(({ colors, tokens }) => ({
  icon: {
    color: tokens.input.iconColor,
    width: 24,
    height: 24,
    variants: {
      disabled: {
        true: {
          color: colors.grey400,
        },
      },
    },
  },
}));

export default InputIcon;
