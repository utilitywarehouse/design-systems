/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { forwardRef } from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import { useToggleButtonContext } from './ToggleButton.context';
import { Icon } from '../Icon';
import { IconRef } from '../../types';
import IconProps from '../Icon/Icon.props';
import { useToggleButtonGroupContext } from './ToggleButtonGroup.context';
import { StyleSheet } from 'react-native-unistyles';

const ToggleButtonIcon = forwardRef<IconRef, IconProps>(({ children, ...props }, ref) => {
  const { value: contextVal, disabled: contextDisabled } = useToggleButtonGroupContext();
  const { value, disabled } = useToggleButtonContext();
  const isDisabled = disabled || contextDisabled;
  const isActive = value === contextVal;
  styles.useVariants({ disabled: isDisabled, active: isActive });
  return (
    <Icon ref={ref} {...props} style={[styles.icon as StyleProp<ViewStyle>, props.style]}>
      {children}
    </Icon>
  );
});

ToggleButtonIcon.displayName = 'ToggleButtonIcon';

const styles = StyleSheet.create(({ isLight, colors }) => ({
  icon: {
    color: isLight ? colors.grey1000 : colors.grey800,
    variants: {
      disabled: {
        true: {
          color: colors.grey400,
        },
      },
      active: {
        true: {
          color: isLight ? colors.grey1000 : colors.grey25,
        },
      },
    },
    compoundVariants: [
      {
        disabled: true,
        active: true,
        styles: {
          color: isLight ? colors.cyan300 : colors.grey400,
        },
      },
    ],
  },
}));

export default ToggleButtonIcon;
