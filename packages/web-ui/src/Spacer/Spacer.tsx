import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { px } from '../utils';
import MuiBox from '@mui/material/Box';

import type { BoxProps as MuiBoxProps } from '@mui/material/Box';
import type { ResponsiveStyleValue } from '@mui/system/styleFunctionSx';

export type SpacerProps<C extends React.ElementType = 'div'> = MuiBoxProps<C, { component?: C }> & {
  /**
   * The direction of the Spacer axis
   */
  axis?: 'horizontal' | 'vertical';
  size: ResponsiveStyleValue<number>;
  inline?: boolean;
};

/**
 * Spacer description
 */
function Spacer<C extends React.ElementType>({
  axis = 'vertical',
  size = 1,
  component,
  inline = false,
  sx,
  ...props
}: SpacerProps<C>) {
  const theme = useTheme();
  const defaultElement = inline ? 'span' : 'div';

  const getSize = () => {
    if (Array.isArray(size)) {
      return size.map(s => theme.spacing(s as number));
    }
    if (typeof size === 'object') {
      return Object.keys(theme.breakpoints.values).reduce(
        (acc: { [key: string]: string }, breakpoint: string) => {
          if (size[breakpoint] !== null) {
            acc[breakpoint] = theme.spacing(size[breakpoint] as number);
          }
          return acc;
        },
        {}
      );
    }
    return theme.spacing(size);
  };

  const width = axis === 'vertical' ? px(1) : getSize();
  const height = axis === 'horizontal' ? px(1) : getSize();

  return (
    <MuiBox
      component={component || defaultElement}
      sx={{
        display: inline ? 'inline-block' : 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...sx,
      }}
      {...props}
    />
  );
}

export default Spacer;
