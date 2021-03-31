import {
  BackdropLevel,
  Theme as CustomerUITheme,
} from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import {
  MuiMenuItem,
  MuiMenuItemProps,
  BackgroundProvider,
  makeStyles,
  Theme,
  Typography,
} from "..";
import { BackgroundContext } from "./Background";

export interface MenuItemProps extends MuiMenuItemProps {
  backgroundColor?: BackdropLevel;
}

interface StyleProps {
  theme: CustomerUITheme;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: (props) => ({
    ...props.theme.components.menuItem.mobile,
    [theme.breakpoints.up("tablet")]: {
      ...props.theme.components.menuItem.tablet,
    },
    [theme.breakpoints.up("desktop")]: {
      ...props.theme.components.menuItem.desktop,
    },
  }),
}));

const MenuItemInner: React.FunctionComponent<MuiMenuItemProps> = (props) => {
  const { theme } = React.useContext(BackgroundContext);
  const classes = useStyles({ theme });

  return (
    <MuiMenuItem
      {...props}
      classes={{
        ...props?.classes,
        root: `${classes.root} ${props?.classes?.root ?? ""}`,
      }}
    >
      <Typography component="div">{props.children}</Typography>
    </MuiMenuItem>
  );
};

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  backgroundColor = "level4",
  ...props
}) => (
  <BackgroundProvider backgroundColor={backgroundColor}>
    <MenuItemInner {...props} />
  </BackgroundProvider>
);

export default MenuItem;
