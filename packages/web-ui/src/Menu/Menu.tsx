import * as React from 'react';
import { type MenuProps as MuiMenuProps, default as MuiMenu } from '@mui/material/Menu';
import Box from '../Box';

export interface MenuProps extends Omit<MuiMenuProps, 'ref'> {}

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { children, ...props },
  ref
) {
  return (
    <MuiMenu {...props} ref={ref}>
      <Box background="white">{children}</Box>
    </MuiMenu>
  );
});

export default Menu;
