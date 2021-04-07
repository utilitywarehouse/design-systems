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

const MenuContent: React.ForwardRefRenderFunction<HTMLDivElement, MenuProps> = (
  props,
  ref
) => {
  const { theme } = React.useContext(BackgroundContext);
  const classes = useStyles({ theme });
  return (
    <MuiMenu
      {...props}
      ref={ref}
      classes={{
        paper: classes.paper,
        list: classes.list,
      }}
    />
  );
};

const MenuContentWithRef = React.forwardRef(MenuContent);

const Menu: React.ForwardRefRenderFunction<HTMLDivElement, MenuProps> = (
  props,
  ref
) => {
  return (
    <BackgroundProvider backgroundColor="level4">
      <MenuContentWithRef ref={ref} {...props} />
    </BackgroundProvider>
  );
};

export default React.forwardRef(Menu);

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
