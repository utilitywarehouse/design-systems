import { forwardRef } from 'react';
import MuiMenuItem from '@mui/material/MenuItem';
import Text from '../Text';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { MenuItemTypeMap } from './MenuItem.types';

const MenuItem = forwardRef(function MenuItem({ children, ...props }, ref) {
  return (
    <MuiMenuItem ref={ref} {...props}>
      <Text component="span" variant="body">
        {children}
      </Text>
    </MuiMenuItem>
  );
}) as OverridableComponent<MenuItemTypeMap>;

export default MenuItem;
