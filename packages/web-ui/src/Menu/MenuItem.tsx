import { forwardRef } from 'react';
import MuiMenuItem from '@mui/material/MenuItem';
import Text from '../Text';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';

type DefaultMenuItemComponent = 'li';

interface MenuItemTypeMap<D extends React.ElementType = DefaultMenuItemComponent, P = {}> {
  props: MuiMenuItemProps<D, P>;
  defaultComponent: D;
}

type MenuItemProps<D extends React.ElementType = DefaultMenuItemComponent, P = {}> = OverrideProps<
  MenuItemTypeMap<D, P>,
  D
>;

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
export type { DefaultMenuItemComponent, MenuItemTypeMap, MenuItemProps };
