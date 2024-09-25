import * as React from 'react';
import { forwardRef } from 'react';
import { styled } from '@mui/material';
import MuiMenuItem from '@mui/material/MenuItem';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { Box } from '../Box';
import { fonts } from '../tokens';
import { pxToRem, spacing } from '../utils';

export type DefaultMenuItemComponent = 'li';

export interface MenuItemTypeMap<
  D extends React.ElementType = DefaultMenuItemComponent,
  P = object,
> {
  props: MuiMenuItemProps<D, P>;
  defaultComponent: D;
}

export type MenuItemProps<
  D extends React.ElementType = DefaultMenuItemComponent,
  P = object,
> = OverrideProps<MenuItemTypeMap<D, P>, D>;

const StyledMenuItem = styled(MuiMenuItem)({
  padding: spacing(2),
});

export const MenuItem = forwardRef(function MenuItem({ children, ...props }, ref) {
  return (
    <StyledMenuItem ref={ref} {...props}>
      <Box
        component="p"
        color={colorsCommon.brandMidnight}
        fontFamily={fonts.secondary}
        fontSize={pxToRem(18)}
        lineHeight={pxToRem(24)}
      >
        {children}
      </Box>
    </StyledMenuItem>
  );
}) as OverridableComponent<MenuItemTypeMap>;
