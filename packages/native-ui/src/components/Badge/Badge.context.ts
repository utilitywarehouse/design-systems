import React, { useContext } from 'react';
import type BadgeProps from './Badge.props';

export const BadgeContext = React.createContext<{
  colorScheme?: BadgeProps['colorScheme'];
  size?: BadgeProps['size'];
  strong?: BadgeProps['strong'];
  borderless?: BadgeProps['borderless'];
}>({});

export const useBadgeContext = () => useContext(BadgeContext);
