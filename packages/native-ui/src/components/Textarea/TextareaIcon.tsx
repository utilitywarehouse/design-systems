/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { ComponentType, forwardRef } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useTextareaContext } from './Textarea.context';
import { Icon, IconProps } from '../Icon';
import type { SvgRef } from '../../types';

const TextareaIcon = forwardRef<SvgRef, IconProps & { as?: ComponentType }>(
  ({ children, ...props }, ref) => {
    const { disabled } = useTextareaContext();
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

TextareaIcon.displayName = 'TextareaIcon';

const styles = StyleSheet.create(({ colors, tokens }) => ({
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

export default TextareaIcon;
