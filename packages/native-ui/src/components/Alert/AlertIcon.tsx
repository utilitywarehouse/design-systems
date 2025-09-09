import React, { forwardRef, useMemo } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
  InformationMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';
import { useAlertContext } from './Alert.context';
import { Icon } from '../Icon';
import type IconProps from '../Icon/Icon.props';
import { IconRef } from '../../types';

const AlertIcon = forwardRef<IconRef, IconProps>(({ ...props }, ref) => {
  const { colorScheme } = useAlertContext();
  styles.useVariants({ colorScheme });
  const asProp = useMemo(() => {
    if (colorScheme === 'red' || colorScheme === 'gold') {
      return WarningMediumContainedIcon;
    }
    if (colorScheme === 'green') {
      return TickMediumContainedIcon;
    }
    return InformationMediumContainedIcon;
  }, [colorScheme]);
  return <Icon ref={ref} {...props} as={props.as ?? asProp} style={styles.icon} />;
});

AlertIcon.displayName = 'AlertIcon';

const styles = StyleSheet.create(theme => ({
  icon: {
    width: 24,
    height: 24,
    minWidth: 24,
    minHeight: 24,
    alignSelf: 'flex-start',
    variants: {
      colorScheme: {
        cyan: {
          color: theme.colors.cyan700,
        },
        red: {
          color: theme.colors.red700,
        },
        green: {
          color: theme.colors.green700,
        },
        gold: {
          color: theme.colors.gold700,
        },
      },
    },
  },
}));

export default AlertIcon;
