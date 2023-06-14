import { forwardRef } from 'react';
import MuiMenu, { type MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { Box } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';

export interface MenuProps extends Omit<MuiMenuProps, 'ref'> {}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { children, ...props },
  ref
) {
  return (
    <MuiMenu ref={ref} {...props}>
      <Box bgcolor={colorsCommon.brandWhite}>{children}</Box>
    </MuiMenu>
  );
});
