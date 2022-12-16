import * as React from 'react';
import {
  type MenuItemProps as MuiMenuItemProps,
  default as MuiMenuItem,
} from '@mui/material/MenuItem';
import Typography from '../Typography';

export interface MenuItemProps extends MuiMenuItemProps {}

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(function MenuItem(props, ref) {
  return (
    <MuiMenuItem {...props} ref={ref}>
      <Typography component="span" variant="body">
        {props.children}
      </Typography>
    </MuiMenuItem>
  );
});

export default MenuItem;
