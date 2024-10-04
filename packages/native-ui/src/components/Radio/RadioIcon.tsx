import React, { ComponentProps, forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Icon } from '../Icon';
import { ColorValue, Platform, type StyleProp, type ViewStyle } from 'react-native';
import { CircleIcon } from '../Icons';
import { useRadioContext } from './Radio.context';
import type { SvgRef } from '../../types';
import IconProps from '../Icon/Icon.props';

const RadioIcon = forwardRef<SvgRef, IconProps>(({ style, ...props }, ref) => {
  const { disabled } = useRadioContext();
  const { styles } = useStyles(stylesheet, {
    disabled,
  });

  return (
    <Icon
      ref={ref}
      as={CircleIcon}
      {...props}
      style={
        Platform.OS === 'web'
          ? { ...styles.container, ...(style ? Object(style) : {}) }
          : [styles.container, style]
      }
    />
  );
});

RadioIcon.displayName = 'RadioIcon';

const stylesheet = createStyleSheet(({ radii, colors, colorMode }) => ({
  container: {
    width: 14,
    height: 14,
    borderRadius: radii.full,
    color: colorMode === 'dark' ? colors.cyan700 : colors.cyan500,
    variants: {
      disabled: {
        true: {
          color: colorMode === 'dark' ? colors.grey400 : colors.grey400,
        },
      },
    },
  },
}));

export default RadioIcon;
