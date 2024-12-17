/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ComponentType, forwardRef } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useInputContext } from './Input.context';
import { Icon, IconProps } from '../Icon';
import type { SvgRef } from '../../types';
import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';

const InputIcon = forwardRef<SvgRef, IconProps & { as?: ComponentType }>(
  ({ as, ...props }, ref) => {
    const { disabled, validationStatus } = useInputContext();
    styles.useVariants({ disabled, validationStatus });
    const ValidationIcon =
      validationStatus === 'invalid' ? WarningMediumContainedIcon : TickMediumContainedIcon;
    return (
      <Icon
        ref={ref}
        {...props}
        as={as ?? ValidationIcon}
        style={
          Platform.OS === 'web'
            ? {
                ...styles.icon,
                ...(props.style as ViewStyle),
              }
            : [styles.icon as StyleProp<ViewStyle>, props.style]
        }
      />
    );
  }
);

InputIcon.displayName = 'InputIcon';

const styles = StyleSheet.create(theme => ({
  icon: {
    color: theme.colors.grey700,
    width: 24,
    height: 24,
    paddingLeft: theme.space[2],
    variants: {
      validationStatus: {
        invalid: {
          color: theme.colorMode === 'light' ? theme.colors.red500 : theme.colors.red700,
        },
        valid: {
          color: theme.colorMode === 'light' ? theme.colors.green500 : theme.colors.green700,
        },
        initial: {},
      },
      disabled: {
        true: {
          color: theme.colors.grey400,
        },
      },
    },
  },
}));

export default InputIcon;
