import React from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import MuiLink from "@material-ui/core/Link";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

export interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: "default" | "active" | "secondary";
}

const Link: React.FunctionComponent<LinkProps> = ({
  variant = "default",
  children,
  ...props
}) => {
  const className = (props.className ?? "").split(" ");
  const variantCapitalized = variant[0]
    .toUpperCase()
    .concat(variant.substring(1));

  className.unshift(`MuiLink-variant${variantCapitalized}`);
  return (
    <MuiLink
      variant="inherit"
      underline="none"
      className={className.join(" ")}
      {...props}
    >
      {children}
    </MuiLink>
  );
};

export default Link;

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  theme,
  muiTheme
) => {
  const resolveStyles = (): CSSProperties => {
    return {
      ...theme.components.link.mobile.default.idle,
      fontSize: "inherit",
      fontFamily: "inherit",
      fontWeight: "inherit",
      [muiTheme.breakpoints.up("tablet")]: {
        ...theme.components.link.tablet.default.idle,
      },
      [muiTheme.breakpoints.up("desktop")]: {
        ...theme.components.link.desktop.default.idle,
      },
      "&:hover": {
        ...theme.components.link.mobile.default.hover,
        [muiTheme.breakpoints.up("tablet")]: {
          ...theme.components.link.tablet.default.hover,
        },
        [muiTheme.breakpoints.up("desktop")]: {
          ...theme.components.link.desktop.default.hover,
        },
      },
      "&.MuiLink-variantActive": {
        ...theme.components.link.mobile.active.idle,
        [muiTheme.breakpoints.up("tablet")]: {
          ...theme.components.link.tablet.active.idle,
        },
        [muiTheme.breakpoints.up("desktop")]: {
          ...theme.components.link.desktop.active.idle,
        },
        "&:hover": {
          ...theme.components.link.mobile.active.hover,
          [muiTheme.breakpoints.up("tablet")]: {
            ...theme.components.link.tablet.active.hover,
          },
          [muiTheme.breakpoints.up("desktop")]: {
            ...theme.components.link.desktop.active.hover,
          },
        },
      },
      "&.MuiLink-variantSecondary": {
        ...theme.components.link.mobile.secondary.idle,
        [muiTheme.breakpoints.up("tablet")]: {
          ...theme.components.link.tablet.secondary.idle,
        },
        [muiTheme.breakpoints.up("desktop")]: {
          ...theme.components.link.desktop.secondary.idle,
        },
        "&:hover": {
          ...theme.components.link.mobile.secondary.hover,
          [muiTheme.breakpoints.up("tablet")]: {
            ...theme.components.link.tablet.secondary.hover,
          },
          [muiTheme.breakpoints.up("desktop")]: {
            ...theme.components.link.desktop.secondary.hover,
          },
        },
      },
    } as CSSProperties;
  };

  return {
    MuiLink: {
      styleOverrides: {
        root: {
          ...resolveStyles(),
        },
      },
    },
  };
};
