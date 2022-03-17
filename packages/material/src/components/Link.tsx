import * as React from "react";
import NavLink from "./NavLink";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import {
  colors,
  transitions,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { styled } from "@mui/material/styles";

interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Pick<
      MuiLinkProps,
      "children" | "classes" | "sx" | "TypographyClasses" | "variant" | "ref"
    > {}

const StyledTextLink = styled(MuiLink)({
  transition: `all ${transitions.duration}ms ${transitions.easingFunction}`,
  transitionProperty: "text-decoration, color, opacity",
  textDecoration: "underline",
  opacity: 1,
  textDecorationThickness: 2,
  textUnderlineOffset: 4,
  cursor: "pointer",
  textTransform: "inherit",
  textDecorationColor: colors.cyan,
  "&:hover": {
    opacity: 0.5,
  },
});

const TextLink: React.FunctionComponent<TextLinkProps> = ({
  variant = "body",
  ...props
}) => <StyledTextLink {...props} underline="none" variant={variant} />;

export interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: "default" | "active" | "secondary";
  disabled?: boolean;
  forwardedRef?: React.Ref<HTMLAnchorElement>;
}

const Link: React.FunctionComponent<LinkProps> = ({
  variant = "default",
  disabled = false,
  onClick,
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
      onClick={onClick}
      ref={forwardedRef}
    />
  );
};

export default Link;
