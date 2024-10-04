import React, { ComponentProps, forwardRef } from 'react';
import { useStyles } from 'react-native-unistyles';
import { Icon } from '../Icon';
import type { SvgRef } from '../../types';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';
import IconProps from '../Icon/Icon.props';

const CheckboxIcon = forwardRef<SvgRef, IconProps>(({ style, ...props }, ref) => {
  const {
    theme: { colorMode, colors },
  } = useStyles();

  return (
    <Icon
      ref={ref}
      as={TickSmallIcon}
      {...props}
      color={colorMode === 'light' ? '$white' : '$cyan50'}
      style={style}
    />
  );
});

CheckboxIcon.displayName = 'CheckboxIcon';

export default CheckboxIcon;
