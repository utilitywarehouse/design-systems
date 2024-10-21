import React, { forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Icon } from '../Icon';

import HelperIconProps from './Helper.props';
import { SvgRef } from '../../types';
import IconProps from '../Icon/Icon.props';
import { useHelperContext } from './HelperContext';

const HelperIcon: React.FC<HelperIconProps> = forwardRef<SvgRef, IconProps>(
  ({ style, ...props }, ref) => {
    const { validationStatus, disabled } = useHelperContext();
    const { styles } = useStyles(stylesheet, { validationStatus, disabled });
    return <Icon ref={ref} style={[styles.icon, style]} {...props} />;
  }
);

HelperIcon.displayName = 'HelperIcon';

const stylesheet = createStyleSheet(({ colors }) => ({
  icon: {
    color: colors.grey800,
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

export default HelperIcon;
