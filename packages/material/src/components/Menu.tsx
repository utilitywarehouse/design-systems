import React from "react";
import { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";
import {
  MuiMenu,
  MenuProps,
  BackgroundProvider,
  makeStyles,
  Theme,
  BackgroundContext,
} from "..";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

interface StyleProps {
  theme: CustomerUITheme;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  paper: (props) => ({
    transform: `translateY(${theme.spacing(1)}) !important`,
    ...props.theme.components.menu.mobile,
    [theme.breakpoints.up("tablet")]: {
      ...props.theme.components.menu.tablet,
    },
    [theme.breakpoints.up("desktop")]: {
      ...props.theme.components.menu.desktop,
    },
  }),
  list: {
    padding: 0,
  },
}));

const MenuContent: React.FunctionComponent<MenuProps> = (props) => {
  const { theme } = React.useContext(BackgroundContext);
  const classes = useStyles({ theme });
  return (
    <MuiMenu
      {...props}
      classes={{
        paper: classes.paper,
        list: classes.list,
      }}
    />
  );
};

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  return (
    <BackgroundProvider backgroundColor="level4">
      <MenuContent {...props} />
    </BackgroundProvider>
  );
};

export default Menu;

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = () => {
  return {
    MuiMenu: {
      defaultProps: {
        anchorOrigin: {
          horizontal: "left",
          vertical: "bottom",
        },
        getContentAnchorEl: null,
      },
    },
  };
};
