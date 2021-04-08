import React from "react";
import MuiButton, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { ButtonSize, ButtonVariant } from "@utilitywarehouse/customer-ui-theme";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: "regular" | "large";
  variant?: "contained" | "outlined" | "tertiary";
  fullWidth?: boolean;
  href?: string;
  target?: string;
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    size = "regular",
    children,
    variant = "contained",
    fullWidth = false,
    href,
    ...props
  },
  ref
) => {
  const muiButtonProps: MuiButtonProps = {
    color: "primary",
    disableElevation: true,
    fullWidth,
    href,
  };

  if (variant === "tertiary") {
    muiButtonProps.variant = "text";
  } else {
    muiButtonProps.variant = variant;
  }

  if (size === "regular") {
    muiButtonProps.size = "medium";
  } else {
    muiButtonProps.size = "large";
  }

  return (
    <MuiButton {...(props as MuiButtonProps)} {...muiButtonProps} ref={ref}>
      {children}
    </MuiButton>
  );
};

export default React.forwardRef(Button);

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  theme,
  muiTheme
) => {
  const resolveStyles = (
    variant: ButtonVariant,
    size: ButtonSize
  ): CSSProperties => {
    return {
      ...theme.components.button.mobile[variant][size].idle,
      [muiTheme.breakpoints.up("tablet")]: {
        ...theme.components.button.tablet[variant][size].idle,
      },
      [muiTheme.breakpoints.up("desktop")]: {
        ...theme.components.button.desktop[variant][size].idle,
      },
      "&:hover": {
        ...theme.components.button.mobile[variant][size].active,
        [muiTheme.breakpoints.up("tablet")]: {
          ...theme.components.button.tablet[variant][size].active,
        },
        [muiTheme.breakpoints.up("desktop")]: {
          ...theme.components.button.desktop[variant][size].active,
        },
      },
      "&:disabled": {
        ...theme.components.button.mobile[variant][size].disabled,
        [muiTheme.breakpoints.up("tablet")]: {
          ...theme.components.button.tablet[variant][size].disabled,
        },
        [muiTheme.breakpoints.up("desktop")]: {
          ...theme.components.button.desktop[variant][size].disabled,
        },
      },
    } as CSSProperties;
  };

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          ...resolveStyles("primary", "regular"),
          "&.MuiButton-containedSecondary": {
            ...resolveStyles("primary", "regular"),
            "&.MuiButton-sizeLarge": {
              ...resolveStyles("primary", "large"),
            },
          },
          "&.MuiButton-containedPrimary": {
            ...resolveStyles("primary", "regular"),
            "&.MuiButton-sizeLarge": {
              ...resolveStyles("primary", "large"),
            },
          },
          "&.MuiButton-outlinedPrimary": {
            ...resolveStyles("secondary", "regular"),
            "&.MuiButton-sizeLarge": {
              ...resolveStyles("secondary", "large"),
            },
          },
          "&.MuiButton-outlinedSecondary": {
            ...resolveStyles("secondary", "regular"),
            "&.MuiButton-sizeLarge": {
              ...resolveStyles("secondary", "large"),
            },
          },
          "&.MuiButton-text": {
            ...resolveStyles("tertiary", "regular"),
            "&.MuiButton-sizeLarge": {
              ...resolveStyles("tertiary", "large"),
            },
          },
          "&.MuiButton-textPrimary": {
            ...resolveStyles("tertiary", "regular"),
            "&.MuiButton-sizeLarge": {
              ...resolveStyles("tertiary", "large"),
            },
          },
          "&.MuiButton-textSecondary": {
            ...resolveStyles("tertiary", "regular"),
            "&.MuiButton-sizeLarge": {
              ...resolveStyles("tertiary", "large"),
            },
          },
        },
      },
    },
  };
};
