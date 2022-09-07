import React from "react";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { isBrandBackgroundColor, isHeadingVariant } from "../utils";
import {
  colors,
  transitions,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { styled } from "@mui/material/styles";
import { useBackground } from "./Background";

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

type LinkProps = Omit<MuiLinkProps, "color" | "underline">;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return <StyledLink ref={ref} {...props} underline="none" />;
});

Link.defaultProps = { variant: "body" };
Link.displayName = "Link";

interface NavLinkProps extends LinkProps {
  active?: boolean;
  disabled?: boolean;
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

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ onClick, active, disabled, ...props }, ref) => {
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
        {...props}
        underline="none"
        onClick={handleClick}
        active={active}
        disabled={disabled}
      />
    );
  }
);

NavLink.defaultProps = { variant: "body" };
NavLink.displayName = "NavLink";

export default Link;
export { NavLink };
export type { LinkProps, NavLinkProps };
