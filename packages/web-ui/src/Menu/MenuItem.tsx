import * as React from 'react';
import { forwardRef } from 'react';
import MuiMenuItem from '@mui/material/MenuItem';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import { Typography } from '../Typography';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem, spacing } from '../utils';
import { styled } from '@mui/material';

export type DefaultMenuItemComponent = 'li';

export interface MenuItemTypeMap<
  D extends React.ElementType = DefaultMenuItemComponent,
  P = object
> {
  props: MuiMenuItemProps<D, P>;
  defaultComponent: D;
}

export type MenuItemProps<
  D extends React.ElementType = DefaultMenuItemComponent,
  P = object
> = OverrideProps<MenuItemTypeMap<D, P>, D>;

const StyledMenuItem = styled(MuiMenuItem)({
  padding: spacing(2),
});

export const MenuItem = forwardRef(function MenuItem({ children, ...props }, ref) {
  return (
    <StyledMenuItem ref={ref} {...props}>
      <Typography
        color={colorsCommon.brandMidnight}
        fontFamily="secondary"
        fontSize={pxToRem(18)}
        lineHeight={pxToRem(24)}
      >
        {children}
      </Typography>
    </StyledMenuItem>
  );
}) as OverridableComponent<MenuItemTypeMap>;
