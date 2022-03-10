import React from "react";
import MuiLink from "@mui/material/Link";
import {
  colors,
  transitions,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { styled } from "@mui/material/styles";
import { TextLinkProps } from "./TextLink";

export interface NavLinkProps extends TextLinkProps {
  active?: boolean;
  disabled?: boolean;
}

interface StyledNavLinkProps {
  active?: boolean;
  disabled?: boolean;
}

const StyledNavLink = styled(MuiLink, {
  shouldForwardProp: (prop) =>
    prop !== "active" && prop !== "disabled" && prop !== "backdropLevel",
})<StyledNavLinkProps>(({ active, disabled }) => {
  const disabledStyles = disabled
    ? {
        transition: "none",
        opacity: 0.15,
        cursor: "not-allowed",
        "&:hover": {},
      }
    : {};

  const activeStyles =
    !disabled && active
      ? {
          "&.MuiLink-root": {
            color: colors.cyan,
          },
        }
      : {};

  return {
    transition: `all ${transitions.duration}ms ${transitions.easingFunction}`,
    transitionProperty: "text-decoration, color, opacity",
    opacity: 1,
    cursor: "pointer",
    textTransform: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: colors.cyan,
    },
    ...activeStyles,
    ...disabledStyles,
  };
});

const NavLink: React.FunctionComponent<NavLinkProps> = ({
  variant = "body",
  onClick,
  active,
  disabled,
  ...rest
}) => {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (disabled || active) {
        e.preventDefault();
        return;
      }

      if (onClick) {
        onClick(e);
      }
    },
    [onClick, disabled, active]
  );

  return (
    <StyledNavLink
      {...rest}
      underline="none"
      variant={variant}
      onClick={handleClick}
      active={active}
      disabled={disabled}
    />
  );
};

export default NavLink;
