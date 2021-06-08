import React from "react";
import { CSSProperties } from "@material-ui/styles/withStyles";
import MuiLink from "@material-ui/core/Link";
import { GetComponentThemeConfiguration } from "../lib/theme.types";
import { clsx } from "../utils";

export interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: "default" | "active" | "secondary";
  disabled?: boolean;
}

const Link: React.ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (
  {
    variant = "default",
    disabled = false,
    children,
    onClick,
    className,
    ...props
  },
  ref
) => {
  const _className = React.useMemo(() => {
    const variantCapitalized = variant[0]
      .toUpperCase()
      .concat(variant.substring(1));
    return clsx(
      `MuiLink-variant${variantCapitalized}`,
      className,
      disabled && "MuiLink-disabled"
    );
  }, [variant, disabled, className]);

  const _onClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      if (onClick) {
        onClick(e);
      }
    },
    [onClick, disabled]
  );

  return (
    <MuiLink
      variant="inherit"
      underline="none"
      className={_className}
      onClick={_onClick}
      {...props}
      ref={ref}
    >
      {children}
    </MuiLink>
  );
};

export default React.forwardRef(Link);

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
      "&.MuiLink-disabled": {
        ...theme.components.link.mobile.default.disabled,
        [muiTheme.breakpoints.up("tablet")]: {
          ...theme.components.link.tablet.default.disabled,
        },
        [muiTheme.breakpoints.up("desktop")]: {
          ...theme.components.link.desktop.default.disabled,
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
        "&.MuiLink-disabled": {
          ...theme.components.link.mobile.active.disabled,
          [muiTheme.breakpoints.up("tablet")]: {
            ...theme.components.link.tablet.active.disabled,
          },
          [muiTheme.breakpoints.up("desktop")]: {
            ...theme.components.link.desktop.active.disabled,
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
        "&.MuiLink-disabled": {
          ...theme.components.link.mobile.secondary.disabled,
          [muiTheme.breakpoints.up("tablet")]: {
            ...theme.components.link.tablet.secondary.disabled,
          },
          [muiTheme.breakpoints.up("desktop")]: {
            ...theme.components.link.desktop.secondary.disabled,
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
