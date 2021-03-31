import React from "react";
import { MuiMenu, MenuProps, BackgroundProvider, makeStyles, Theme } from "..";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

const useStyles = makeStyles((theme: Theme) => ({
  popoverPaper: {
    transform: `translateY(${theme.spacing(1)}) !important`,
  },
}));

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const classes = useStyles();
  return (
    <BackgroundProvider backgroundColor="level4">
      <MuiMenu
        {...props}
        PopoverClasses={{
          ...props?.PopoverClasses,
          paper: `${classes.popoverPaper} ${
            props?.PopoverClasses?.paper ?? ""
          }`,
        }}
      />
    </BackgroundProvider>
  );
};

export default Menu;

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  theme,
  muiTheme
) => {
  return {
    MuiMenu: {
      defaultProps: {
        anchorOrigin: {
          horizontal: "left",
          vertical: "bottom",
        },
        getContentAnchorEl: null,
      },
      styleOverrides: {
        paper: {
          ...theme.components.menu.mobile,
          [muiTheme.breakpoints.up("tablet")]: {
            ...theme.components.menu.tablet,
          },
          [muiTheme.breakpoints.up("desktop")]: {
            ...theme.components.menu.desktop,
          },
        },
        list: {
          padding: 0,
        },
      },
    },
  };
};
