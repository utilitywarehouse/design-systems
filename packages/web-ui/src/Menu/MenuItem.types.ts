import type { OverrideProps } from '@mui/material/OverridableComponent';
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

export type { DefaultMenuItemComponent, MenuItemTypeMap, MenuItemProps };
