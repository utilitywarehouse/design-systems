import * as React from 'react';
import { type MenuProps as MuiMenuProps, default as MuiMenu } from '@mui/material/Menu';
import {
  type MenuItemProps as MuiMenuItemProps,
  default as MuiMenuItem,
} from '@mui/material/MenuItem';
import Typography from '../Typography';

export interface MenuProps extends Omit<MuiMenuProps, 'ref'> {}

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu({ ...props }, ref) {
  return <MuiMenu {...props} ref={ref} />;
});

export interface MenuItemProps extends MuiMenuItemProps {}

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(function MenuItem(
  props,
  ref
) {
  return (
    <MuiMenuItem {...props} ref={ref}>
      <Typography component="span" variant="body">
        {props.children}
      </Typography>
    </MuiMenuItem>
  );
});

export default Menu;
