import React, { forwardRef, useMemo } from 'react';
import { Text } from '../Text';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { View } from 'react-native';
import { Icon } from '../Icon';
import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';
import HelperProps from './Helper.props';
import { HelperContext } from './HelperContext';

const Helper: React.FC<HelperProps> = forwardRef<View, HelperProps>(
  ({ children, validationStatus, showIcon, style, disabled, icon, text, ...props }, ref) => {
    const { styles } = useStyles(stylesheet, { validationStatus, disabled });
    let HelperIcon = icon;
    if (validationStatus === 'valid' && !icon) {
      HelperIcon = TickMediumContainedIcon;
    }
    if (validationStatus === 'invalid' && !icon) {
      HelperIcon = WarningMediumContainedIcon;
    }

    const value = useMemo(() => ({ validationStatus, disabled }), [validationStatus, disabled]);

    return (
      <HelperContext.Provider value={value}>
        <View ref={ref} style={styles.container}>
          {children ? (
            children
          ) : (
            <>
              {showIcon && <Icon as={HelperIcon} style={styles.text} />}
              <Text ref={ref} style={[styles.text, style]} {...props}>
                {text}
              </Text>
            </>
          )}
        </View>
      </HelperContext.Provider>
    );
  }
);

Helper.displayName = 'Helper';

const stylesheet = createStyleSheet(({ colors, space, lineHeights }) => ({
  container: {
    flexDirection: 'row',
    gap: space['1'],
    alignItems: 'center',
  },
  text: {
    color: colors.grey800,
    lineHeight: lineHeights['lg'],
    variants: {
      validationStatus: {
        valid: {
          color: colors.green600,
        },
        invalid: {
          color: colors.red600,
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

export default Helper;
