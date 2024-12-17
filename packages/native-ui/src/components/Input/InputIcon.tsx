/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { ComponentType, forwardRef } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useInputContext } from './Input.context';
import { Icon, IconProps } from '../Icon';
import type { SvgRef } from '../../types';

const InputIcon = forwardRef<SvgRef, IconProps & { as?: ComponentType }>(
  ({ children, ...props }, ref) => {
    const { disabled } = useInputContext();
    styles.useVariants({ disabled });
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

const styles = StyleSheet.create(theme => ({
  icon: {
    color: theme.tokens.input.iconColor,
    width: 24,
    height: 24,
    variants: {
      disabled: {
        true: {
          color: theme.colors.grey400,
        },
      },
    },
  },
}));

export default InputIcon;
