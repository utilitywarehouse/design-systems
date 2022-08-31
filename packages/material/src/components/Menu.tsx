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
  /**
   * @deprecated in v2. forwardedRef is deprecated in v2, and will be removed in v3.
   */
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

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { forwardedRef, ...props },
  ref
) {
  if (forwardedRef !== undefined) {
    console.warn(
      "forwardedRef on the Menu component is deprecated in v2 and will be removed in v3. Please use ref instead."
    );
  }
  return (
    <BackgroundProvider backgroundColor="white">
      <StyledMenu {...props} ref={forwardedRef || ref} />
    </BackgroundProvider>
  );
});

Menu.defaultProps = {
  anchorOrigin: {
    horizontal: "left",
    vertical: "bottom",
  },
};

export interface MenuItemProps extends MuiMenuItemProps {
  /**
   * @deprecated in v2. forwardedRef is deprecated in v2, and will be removed in v3.
   */
  forwardedRef?: React.Ref<HTMLLIElement>;
}

const StyledMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  function MenuItem({ forwardedRef, ...props }, ref) {
    if (forwardedRef !== undefined) {
      console.warn(
        "forwardedRef on the MenuItem component is deprecated in v2 and will be removed in v3. Please use ref instead."
      );
    }
    return (
      <StyledMenuItem {...props} ref={forwardedRef || ref}>
        <Typography component="span">{props.children}</Typography>
      </StyledMenuItem>
    );
  }
);

export default Menu;
