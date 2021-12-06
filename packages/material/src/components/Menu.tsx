import React from "react";
import { styled } from "@mui/material/styles";
import { MuiMenu, MuiMenuProps, BackgroundProvider } from "..";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

export interface MenuProps extends MuiMenuProps {
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const StyledMenu = styled(MuiMenu)(({ theme }) => ({
  transform: `translateY(${theme.spacing(1)})`,
}));

const MenuContent: React.FunctionComponent<MenuProps> = ({
  forwardedRef,
  ...props
}) => {
  return <StyledMenu {...props} ref={forwardedRef} />;
};

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  return (
    <BackgroundProvider backgroundColor="level5">
      <MenuContent {...props} />
    </BackgroundProvider>
  );
};

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

export default Menu;
