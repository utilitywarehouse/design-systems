/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { forwardRef } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { useToggleButtonContext } from './ToggleButton.context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Icon } from '../Icon';
import { IconRef } from '../../types';
import IconProps from '../Icon/Icon.props';
import { useToggleButtonGroupContext } from './ToggleButtonGroup.context';

const ToggleButtonIcon = forwardRef<IconRef, IconProps>(({ children, ...props }, ref) => {
  const { value: contextVal, disabled: contextDisabled } = useToggleButtonGroupContext();
  const { value, disabled } = useToggleButtonContext();
  const isDisabled = disabled || contextDisabled;
  const isActive = value === contextVal;
  const { styles } = useStyles(stylesheet, { disabled: isDisabled, active: isActive });
  return (
    <Icon
      ref={ref}
      {...props}
      style={
        Platform.OS === 'web'
          ? ({
              ...styles.icon,
              ...styles.extraStyles(isDisabled, isActive),
            } as StyleProp<ViewStyle>)
          : [
              styles.icon as StyleProp<ViewStyle>,
              styles.extraStyles(isDisabled, isActive) as StyleProp<ViewStyle>,
              props.style,
            ]
      }
    >
      {children}
    </Icon>
  );
});

ToggleButtonIcon.displayName = 'ToggleButtonIcon';

const stylesheet = createStyleSheet(({ isLight, colors }) => ({
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
  },
  extraStyles: (disabled, active) =>
    disabled && active
      ? {
          color: isLight ? colors.cyan300 : colors.grey400,
        }
      : {},
}));

export default ToggleButtonIcon;
