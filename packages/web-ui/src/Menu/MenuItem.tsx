import { forwardRef } from 'react';
import MuiMenuItem from '@mui/material/MenuItem';
import { Text } from '../Text';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';

export type DefaultMenuItemComponent = 'li';

export interface MenuItemTypeMap<D extends React.ElementType = DefaultMenuItemComponent, P = {}> {
  props: MuiMenuItemProps<D, P>;
  defaultComponent: D;
}

export type MenuItemProps<
  D extends React.ElementType = DefaultMenuItemComponent,
  P = {}
> = OverrideProps<MenuItemTypeMap<D, P>, D>;

export const MenuItem = forwardRef(function MenuItem({ children, ...props }, ref) {
  return (
    <MuiMenuItem ref={ref} {...props}>
      <Text component="span" variant="body">
        {children}
      </Text>
    </MuiMenuItem>
  );
}) as OverridableComponent<MenuItemTypeMap>;
