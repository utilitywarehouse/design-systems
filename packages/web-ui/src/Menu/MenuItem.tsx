import * as React from 'react';
import {
  type MenuItemProps as MuiMenuItemProps,
  default as MuiMenuItem,
} from '@mui/material/MenuItem';
import { Text } from '../Typography';

export interface MenuItemProps extends MuiMenuItemProps {}

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(function MenuItem(props, ref) {
  return (
    <MuiMenuItem {...props} ref={ref}>
      <Text component="span" variant="body">
        {props.children}
      </Text>
    </MuiMenuItem>
  );
});

export default MenuItem;
