import React from "react";
import { styled } from "@mui/material/styles";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import {
  type MenuProps as MuiMenuProps,
  default as MuiMenu,
} from "@mui/material/Menu";
import {
  type MenuItemProps as MuiMenuItemProps,
  default as MuiMenuItem,
} from "@mui/material/MenuItem";
import Typography from "./Typography";
import BackgroundProvider from "./Background";

export interface MenuProps extends MuiMenuProps {
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const StyledMenu = styled(MuiMenu)(({ theme }) => ({
  transform: `translateY(${theme.spacing(1)})`,
  "& .MuiPaper-root": {
    borderColor: colors.cyan,
    borderRadius: theme.spacing(1),
    borderStyle: "solid",
    borderWidth: "2px",
    padding: "0",
    boxShadow: "none",
    "& .MuiMenu-list": {
      padding: 0,
    },
  },
}));

const Menu: React.FunctionComponent<MenuProps> = ({
  forwardedRef,
  anchorOrigin = {
    horizontal: "left",
    vertical: "bottom",
  },
  ...props
}) => {
  return (
    <BackgroundProvider backgroundColor="white">
      <StyledMenu {...props} ref={forwardedRef} anchorOrigin={anchorOrigin} />
    </BackgroundProvider>
  );
};

export interface MenuItemProps extends MuiMenuItemProps {
  forwardedRef?: React.Ref<HTMLLIElement>;
}

const StyledMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const MenuItem: React.FC<MenuItemProps> = ({
  forwardedRef,
  ...props
}) => (
  <StyledMenuItem {...props} ref={forwardedRef}>
    <Typography component="span">{props.children}</Typography>
  </StyledMenuItem>
);

export default Menu;
