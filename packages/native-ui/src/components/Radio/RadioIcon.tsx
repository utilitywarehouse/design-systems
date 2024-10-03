import React, { ComponentProps, forwardRef } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Icon } from '../Icon';
import { Platform, type StyleProp, type ViewStyle } from 'react-native';
import { CircleIcon } from '../Icons';
import { useRadioContext } from './Radio.context';
import type { SvgRef } from '../../types';

const RadioIcon = forwardRef<SvgRef, ComponentProps<typeof Icon>>(({ style, ...props }, ref) => {
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
          ? ({ ...styles.container, ...(style ? Object(style) : {}) } as StyleProp<ViewStyle>)
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
