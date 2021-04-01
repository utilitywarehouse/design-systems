import {
  BackdropLevel,
  Theme as CustomerUITheme,
} from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import {
  MuiMenuItem,
  MuiMenuItemProps,
  makeStyles,
  Theme,
  Typography,
  BackgroundContext,
} from "..";
import withBackground from "../hocs/withBackground";

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

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  backgroundColor,
  ...props
}) => {
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

export default withBackground<MenuItemProps>(MenuItem, "level4");
