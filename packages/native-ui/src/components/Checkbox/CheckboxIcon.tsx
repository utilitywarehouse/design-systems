import React, { forwardRef } from 'react';
import { Icon } from '../Icon';
import type { SvgRef } from '../../types';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';
import IconProps from '../Icon/Icon.props';
import { useTheme } from '../../hooks';

const CheckboxIcon = forwardRef<SvgRef, IconProps>(({ style, ...props }, ref) => {
  const { colorMode } = useTheme();

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
