import React from "react";
import MuiLink from "@mui/material/Link";
import { GetComponentThemeConfiguration } from "../lib/theme.types";
import {
  colors,
  transitions,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { Components } from "@mui/material/styles";

export type TextLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<
    MuiLinkProps,
    "children" | "classes" | "sx" | "TypographyClasses" | "variant" | "ref"
  >;

const TextLink: React.FunctionComponent<TextLinkProps> = ({ ...props }) => (
  <MuiLink {...props} />
);

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  theme
) => {
  const { backdropLevel } = theme;
  const color = ["level0", "level1"].includes(backdropLevel)
    ? colors.white
    : colors.midnight;
  const muiLink = {
    MuiLink: {
      defaultProps: {
        underline: "none",
        variant: "inherit",
      },
      styleOverrides: {
        root: {
          transition: `all ${transitions.duration}ms ${transitions.easingFunction}`,
          transitionProperty: "text-decoration, color, opacity",
          textDecoration: "underline",
          opacity: 1,
          textDecorationThickness: 2,
          textUnderlineOffset: 4,
          cursor: "pointer",
          textTransform: "inherit",
          textDecorationColor: colors.cyan,
          color,
          "&:hover": {
            opacity: 0.5,
          },
          "&:disabled": {
            opacity: 0.15,
            cursor: "not-allowed",
          },
        },
      },
    },
  };
  return muiLink as Components;
};

export default TextLink;
