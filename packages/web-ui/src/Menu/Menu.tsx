import * as React from 'react';
import { type MenuProps as MuiMenuProps, default as MuiMenu } from '@mui/material/Menu';

export interface MenuProps extends Omit<MuiMenuProps, 'ref'> {}

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu({ ...props }, ref) {
  return <MuiMenu {...props} ref={ref} />;
});

export default Menu;
