import React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { CSSProperties } from "@mui/styles/withStyles";
import { ButtonSize, ButtonVariant } from "@utilitywarehouse/customer-ui-theme";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

interface BaseButtonProps {
  size?: "regular" | "large";
  variant?: "contained" | "outlined" | "tertiary";
  fullWidth?: boolean;
}

type ButtonPropsButtonElement = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof BaseButtonProps> & {
    forwardedRef?: React.Ref<HTMLButtonElement>;
  };
type ButtonPropsAnchorElement = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<"a">, keyof BaseButtonProps | "href"> & {
    forwardedRef?: React.Ref<HTMLAnchorElement>;
    href: string;
  };

export type ButtonProps = ButtonPropsButtonElement | ButtonPropsAnchorElement;

const Button: React.FunctionComponent<ButtonProps> = ({
  size = "regular",
  children,
  variant = "contained",
  fullWidth = false,
  forwardedRef,
  ...props
}) => {
  const muiButtonProps: MuiButtonProps = {
    color: "primary",
    disableElevation: true,
    fullWidth,
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
    <MuiButton
      {...(props as Partial<MuiButtonProps>)}
      {...muiButtonProps}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={forwardedRef as unknown as any}
    >
      {children}
    </MuiButton>
  );
};

export default Button;

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
