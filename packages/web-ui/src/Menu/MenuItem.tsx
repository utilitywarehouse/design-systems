import * as React from 'react';
import {
  type MenuItemProps as MuiMenuItemProps,
  default as MuiMenuItem,
} from '@mui/material/MenuItem';
import { Text } from '../Typography';

export type MenuItemProps<C extends React.ElementType = 'li'> = MuiMenuItemProps<C>;

function MenuItem<C extends React.ElementType>({ children, ...props }: MenuItemProps<C>) {
  return (
    <MuiMenuItem {...props}>
      <Text component="span" variant="body">
        {children}
      </Text>
    </MuiMenuItem>
  );
}

export default MenuItem;
