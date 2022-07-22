import * as React from "react";
import NavLink from "./NavLink";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import {
  colors,
  transitions,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { styled } from "@mui/material/styles";
import { useTheme } from "..";
import { isBrandBackdropLevel } from "../utils";

interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Pick<
      MuiLinkProps,
      "children" | "classes" | "sx" | "TypographyClasses" | "variant" | "ref"
    > {}

const StyledTextLink = styled(MuiLink)(() => {
  const { backdropLevel } = useTheme();
  const color = isBrandBackdropLevel(backdropLevel)
    ? colors.white
    : colors.midnight;

  return {
    transition: `all ${transitions.duration}ms ${transitions.easingFunction}`,
    transitionProperty: "text-decoration, color, opacity",
    textDecoration: "underline",
    opacity: 1,
    textDecorationThickness: 2,
    textUnderlineOffset: 4,
    cursor: "pointer",
    textTransform: "inherit",
    textDecorationColor: colors.cyan,
    "&.MuiLink-root": {
      color,
    },
    "&:hover": {
      opacity: 0.5,
    },
  };
});

const TextLink: React.FunctionComponent<TextLinkProps> = (props) => (
  <StyledTextLink {...props} underline="none" />
);

export interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: "default" | "active" | "secondary";
  disabled?: boolean;
  forwardedRef?: React.Ref<HTMLAnchorElement>;
}

const Link: React.FunctionComponent<LinkProps> = ({
  variant = "default",
  disabled = false,
  forwardedRef,
  ...props
}) => {
  if (variant === "default") {
    return <TextLink {...props} variant="inherit" />;
  }
  return (
    <NavLink
      {...props}
      variant="inherit"
      active={variant === "active"}
      disabled={disabled}
      ref={forwardedRef}
    />
  );
};

export default Link;
