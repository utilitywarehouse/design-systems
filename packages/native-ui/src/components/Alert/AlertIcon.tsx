import React, { useMemo } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
  InformationMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';
import { useAlertContext } from './Alert.context';
import { Icon } from '../Icon';
import type IconProps from '../Icon/Icon.props';

const AlertIcon: React.FC<IconProps> = ({ ...props }) => {
  const { colorScheme } = useAlertContext();
  const { styles } = useStyles(stylesheet, { colorScheme });
  const asProp = useMemo(() => {
    if (colorScheme === 'red' || colorScheme === 'gold') {
      return WarningMediumContainedIcon;
    }
    if (colorScheme === 'green') {
      return TickMediumContainedIcon;
    }
    return InformationMediumContainedIcon;
  }, [colorScheme]);
  return <Icon {...props} as={props.as ?? asProp} style={styles.icon} />;
};

AlertIcon.displayName = 'AlertIcon';

const stylesheet = createStyleSheet(({ colors }) => ({
  icon: {
    width: 24,
    height: 24,
    minWidth: 24,
    minHeight: 24,
    alignSelf: 'flex-start',
    variants: {
      colorScheme: {
        cyan: {
          color: colors.cyan700,
        },
        red: {
          color: colors.red700,
        },
        green: {
          color: colors.green700,
        },
        gold: {
          color: colors.gold700,
        },
      },
    },
  },
}));

export default AlertIcon;
