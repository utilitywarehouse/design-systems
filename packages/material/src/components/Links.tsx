import React from "react";
import MuiLink, {
  LinkProps as MuiLinkProps,
  LinkTypeMap as MuiLinkTypeMap,
} from "@mui/material/Link";
import { isBrandBackgroundColor, isHeadingVariant } from "../utils";
import {
  colors,
  transitions,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { styled } from "@mui/material/styles";
import { useBackground } from "./Background";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";

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

type defaultComponent = "a";

export type CustomLinkProps<
  D extends React.ElementType = defaultComponent,
  P = {}
> = Omit<MuiLinkTypeMap<P, D>["props"], "color" | "underline">;

interface LinkTypeMap<D extends React.ElementType = defaultComponent, P = {}> {
  props: CustomLinkProps<D, P>;
  defaultComponent: D;
}

export type LinkProps<
  D extends React.ElementType = defaultComponent,
  P = {}
> = OverrideProps<LinkTypeMap<D, P>, D>;

const Link = React.forwardRef(function Link(
  { variant = "body", ...props },
  ref
) {
  return <StyledLink ref={ref} variant={variant} {...props} underline="none" />;
}) as OverridableComponent<LinkTypeMap>;

export type CustomNavLinkProps<
  D extends React.ElementType = defaultComponent,
  P = {}
> = CustomLinkProps<D, P> & {
  active?: boolean;
  disabled?: boolean;
};

interface NavLinkTypeMap<
  D extends React.ElementType = defaultComponent,
  P = {}
> {
  props: CustomNavLinkProps<D, P>;
  defaultComponent: D;
}

export type NavLinkProps<
  D extends React.ElementType = defaultComponent,
  P = {}
> = OverrideProps<NavLinkTypeMap<D, P>, D>;

type StyledNavLinkProps = Pick<CustomNavLinkProps, "active" | "disabled">;

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
