import { forwardRef } from 'react';
import { useTheme } from '@mui/material/styles';
import { px } from '../utils';
import MuiBox from '@mui/material/Box';

import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { SpacerTypeMap } from './Spacer.types';

const Spacer = forwardRef(function Spacer(
  { axis = 'vertical', size = 1, component, inline = false, sx, ...props },
  ref
) {
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
      ref={ref}
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
}) as OverridableComponent<SpacerTypeMap>;

export default Spacer;
