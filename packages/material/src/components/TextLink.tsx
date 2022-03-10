import React from "react";
import MuiLink from "@mui/material/Link";
import {
  colors,
  transitions,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { styled } from "@mui/material/styles";

export interface TextLinkProps
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

const TextLink: React.FunctionComponent<TextLinkProps> = ({ variant = "body", ...props }) => <StyledTextLink {...props} underline="none" variant={variant} />;

export default TextLink;
