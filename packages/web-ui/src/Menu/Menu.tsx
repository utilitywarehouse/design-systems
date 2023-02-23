import { forwardRef } from 'react';
import MuiMenu, { type MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { Box } from '../Box';

export interface MenuProps extends Omit<MuiMenuProps, 'ref'> {}

const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu({ children, ...props }, ref) {
  return (
    <MuiMenu ref={ref} {...props}>
      <Box background="white">{children}</Box>
    </MuiMenu>
  );
});

export default Menu;
