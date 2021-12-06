import React from "react";
import { MuiMenuItem, MuiMenuItemProps, Typography } from "..";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

export interface MenuItemProps extends MuiMenuItemProps {
  forwardedRef?: React.Ref<HTMLLIElement>;
}

const MenuItem: React.FC<MenuItemProps> = ({ forwardedRef, ...props }) => {
  return (
    <MuiMenuItem {...props} ref={forwardedRef}>
      <Typography component="span">{props.children}</Typography>
    </MuiMenuItem>
  );
};

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  theme,
  muiTheme
) => {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.components.menuItem.mobile,
          [muiTheme.breakpoints.up("tablet")]: {
            ...theme.components.menuItem.tablet,
          },
          [muiTheme.breakpoints.up("desktop")]: {
            ...theme.components.menuItem.desktop,
          },
        },
      },
    },
  };
};

export default MenuItem;
