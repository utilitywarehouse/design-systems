import React from "react";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import {
  colors,
  transitions,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { styled } from "@mui/material/styles";
import { useTheme } from "..";
import { isBrandBackdropLevel } from "../utils";

export interface NavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Pick<
      MuiLinkProps,
      "children" | "classes" | "sx" | "TypographyClasses" | "variant" | "ref"
    > {
  active?: boolean;
  disabled?: boolean;
}

interface StyledNavLinkProps {
  active?: boolean;
  disabled?: boolean;
}

const StyledNavLink = styled(MuiLink, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "disabled",
})<StyledNavLinkProps>(({ active, disabled }) => {
  const { backdropLevel } = useTheme();
  const getLinkColor = () => {
    if (!disabled && active) {
      return colors.cyan;
    }
    if (isBrandBackdropLevel(backdropLevel)) {
      return colors.white;
    }
    return colors.midnight;
  };
  const color = getLinkColor();
  const disabledStyles = disabled
    ? {
        transition: "none",
        opacity: 0.15,
        cursor: "not-allowed",
        "&:hover": {},
      }
    : {};

  return {
    transition: `${transitions.duration}ms ${transitions.easingFunction}`,
    transitionProperty: "text-decoration, color, opacity",
    opacity: 1,
    cursor: "pointer",
    textTransform: "inherit",
    textDecoration: "none",
    "&.MuiLink-root": {
      color,
    },
    "&:hover": {
      color: colors.cyan,
    },
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
