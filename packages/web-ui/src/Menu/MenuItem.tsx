import { forwardRef } from 'react';
import MuiMenuItem from '@mui/material/MenuItem';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import { Typography } from '../Typography';
import { fonts } from '../tokens';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';

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
      <Typography
        color={colorsCommon.brandMidnight}
        fontFamily={fonts.secondary}
        fontSize={pxToRem(18)}
        lineHeight={pxToRem(24)}
      >
        {children}
      </Typography>
    </MuiMenuItem>
  );
}) as OverridableComponent<MenuItemTypeMap>;
