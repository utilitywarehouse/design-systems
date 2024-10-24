/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { ComponentProps, ComponentType, forwardRef } from 'react';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useInputContext } from './Input.context';
import { Icon } from '../Icon';
import type { SvgRef } from '../../types';
import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';

const InputIcon = forwardRef<SvgRef, ComponentProps<typeof Icon> & { as?: ComponentType }>(
  ({ as, ...props }, ref) => {
    const { disabled, validationStatus } = useInputContext();
    const { styles } = useStyles(stylesheet, { disabled, validationStatus });
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

const stylesheet = createStyleSheet(({ colors, space, colorMode }) => ({
  icon: {
    color: colors.grey700,
    width: 24,
    height: 24,
    paddingLeft: space[2],
    variants: {
      validationStatus: {
        invalid: {
          color: colorMode === 'light' ? colors.red500 : colors.red700,
        },
        valid: {
          color: colorMode === 'light' ? colors.green500 : colors.green700,
        },
        initial: {},
      },
      disabled: {
        true: {
          color: colors.grey400,
        },
      },
    },
  },
}));

export default InputIcon;
