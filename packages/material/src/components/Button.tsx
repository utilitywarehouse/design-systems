import React from "react";
import MuiButton, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";
import { SxProps } from "@material-ui/system";
import { BackgroundContext, BackgroundColor } from "./Background";
import { Theme } from "../material/core/styles";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

export type ButtonVariantDefaults =
  | "contained"
  | "outlined"
  | "tertiary"
  | "nav";

export type ButtonSize = "regular" | "large";

interface Props {
  variant?: ButtonVariantDefaults;
  children: React.ReactNode;
  disabled?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  size?: ButtonSize;
  startIcon?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & Props;

const defaultMuiButtonProps: MuiButtonProps = {
  disableElevation: true,
};

const Button: React.FunctionComponent<ButtonProps> = ({
  variant = "contained",
  size = "regular",
  ...props
}) => {
  const { backgroundColor } = React.useContext(BackgroundContext);
  const buttonProps = { ...defaultMuiButtonProps, ...props } as MuiButtonProps;
  switch (variant) {
    case "contained":
      buttonProps.variant = "contained";
      break;

    case "outlined":
      buttonProps.variant = "outlined";
      break;

    case "tertiary":
      buttonProps.variant = "text";
      buttonProps.className = "customer-ui-tertiary";
      buttonProps.disableRipple = true;
      buttonProps.children = (
        <>
          {buttonProps.children}
          <span className="customer-ui-bottom-border" />
        </>
      );
      break;

    case "nav":
      buttonProps.variant = "text";
      buttonProps.disableRipple = true;
  }

  switch (size) {
    case "regular":
      buttonProps.size = "medium";
      break;

    default:
      buttonProps.size = size;
  }

  switch (backgroundColor) {
    case BackgroundColor.level0:
    case BackgroundColor.level1:
      buttonProps.color = "primary";
      break;

    default:
      buttonProps.color = "secondary";
  }

  return <MuiButton {...buttonProps} />;
};

export default Button;

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = ({
  spacing,
  designTokens,
  palette,
}) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        "text-transform": "none",
        "font-family": "Work-Sans",
        "font-weight": "600",
        height: spacing(4),
        padding: `0 ${spacing(2)}`,
        "border-radius": spacing(2),
        "font-size": spacing(2),
        "letter-spacing": 0,
        "line-height": "1",
        ":disabled": {
          opacity: 0.3,
          cursor: "not-allowed",
        },
        [designTokens.mediaQueries.desktop]: {
          height: spacing(5),
          "font-size": spacing(2.25),
          "border-radius": spacing(2.5),
          padding: `0 ${spacing(3)}`,
        },
      },
      sizeLarge: {
        height: spacing(6),
        padding: `0 ${spacing(3)}`,
        "border-radius": spacing(3),
        [designTokens.mediaQueries.desktop]: {
          height: spacing(7),
          "border-radius": spacing(3.5),
          padding: `0 ${spacing(4)}`,
        },
      },
      containedSecondary: {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
        ":hover": {
          backgroundColor: palette.primary.light,
        },
        ":disabled": {
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
        },
      },
      containedPrimary: {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
        ":hover": {
          backgroundColor: palette.primary.light,
        },
        ":disabled": {
          backgroundColor: palette.primary.main,
          color: palette.primary.contrastText,
        },
      },
      outlinedPrimary: {
        backgroundColor: "transparent",
        color: palette.secondary.contrastText,
        border: `${spacing(0.25)} solid ${palette.primary.main}`,
        ":hover": {
          border: `${spacing(0.25)} solid ${palette.secondary.contrastText}`,
        },
        ":disabled": {
          backgroundColor: "transparent",
          color: palette.secondary.contrastText,
          border: `${spacing(0.25)} solid ${palette.primary.main}`,
        },
      },
      outlinedSecondary: {
        backgroundColor: "transparent",
        color: palette.primary.contrastText,
        border: `${spacing(0.25)} solid ${palette.primary.main}`,
        ":hover": {
          border: `${spacing(0.25)} solid ${palette.primary.contrastText}`,
        },
        ":disabled": {
          backgroundColor: "transparent",
          color: palette.primary.contrastText,
          border: `${spacing(0.25)} solid ${palette.primary.main}`,
        },
      },
      text: {
        transition: "opacity 0.25s ease-out",
        ":hover": {
          background: "transparent",
          opacity: 0.5,
        },
        ":focus": {
          opacity: 0.5,
        },
        ":disabled": {
          transition: "none",
        },
        "&.customer-ui-tertiary": {
          "> span.MuiButton-label": {
            position: "relative",
          },
          " .customer-ui-bottom-border": {
            "border-bottom": `${spacing(0.25)} solid ${palette.primary.main}`,
            width: "104%",
            position: "absolute",
            display: "block",
            bottom: spacing(-0.75),
          },
        },
      },
      textPrimary: {
        color: palette.secondary.contrastText,
      },
      textSecondary: {
        color: palette.primary.contrastText,
      },
    },
  },
});
