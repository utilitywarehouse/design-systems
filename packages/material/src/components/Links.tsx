import React from "react";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { isBrandBackgroundColor, isHeadingVariant } from "../utils";
import {
  colors,
  transitions,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { styled } from "@mui/material/styles";
import { useBackground } from "./Background";
import { OverridableComponent } from "@mui/material/OverridableComponent";

const BaseLink = styled(MuiLink)(({ variant = "body" }) => {
  const { backgroundColor } = useBackground();
  const getLinkColor = () => {
    if (variant === "inherit") {
      return variant;
    }
    if (isBrandBackgroundColor(backgroundColor)) {
      return colors.white;
    }
    if (isHeadingVariant(variant)) {
      return colors.purple;
    }
    return colors.midnight;
  };

  return {
    transition: `${transitions.duration}ms ${transitions.easingFunction}`,
    transitionProperty: "text-decoration, color, opacity",
    opacity: 1,
    cursor: "pointer",
    ...(variant === "inherit" && { textTransform: "inherit" }),
    "&.MuiLink-root": {
      color: getLinkColor(),
    },
  };
});

const StyledLink = styled(BaseLink)({
  textDecoration: "underline",
  textDecorationThickness: 2,
  textUnderlineOffset: 4,
  textDecorationColor: colors.cyan,
  "&:hover": {
    opacity: 0.5,
  },
});

export type LinkProps = Omit<MuiLinkProps, "color" | "underline">;

export interface LinkTypeMap<P = {}, D extends React.ElementType = "a"> {
  props: P & LinkProps;
  defaultComponent: D;
}

const Link = React.forwardRef(function Link(
  { variant = "body", ...props },
  ref
) {
  return <StyledLink ref={ref} variant={variant} {...props} underline="none" />;
}) as OverridableComponent<LinkTypeMap>;

export interface NavLinkProps extends LinkProps {
  active?: boolean;
  disabled?: boolean;
}

export interface NavLinkTypeMap<P = {}, D extends React.ElementType = "a"> {
  props: P & NavLinkProps;
  defaultComponent: D;
}

type StyledNavLinkProps = Pick<NavLinkProps, "active" | "disabled">;

const StyledNavLink = styled(BaseLink, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "disabled",
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
    textDecoration: "none",
    "&:hover": {
      color: colors.cyan,
    },
    ...activeStyles,
    ...disabledStyles,
  };
});

export const NavLink = React.forwardRef(function NavLink(
  { onClick, active, disabled, variant = "body", ...props },
  ref
) {
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
      ref={ref}
      variant={variant}
      underline="none"
      onClick={handleClick}
      active={active}
      disabled={disabled}
      {...props}
    />
  );
}) as OverridableComponent<NavLinkTypeMap>;

export default Link;
