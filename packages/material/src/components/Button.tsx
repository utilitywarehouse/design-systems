import React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { Components } from "@mui/material/styles";
import {
  transitions,
  fonts,
  fontWeights,
  colors,
  helpers,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { BackdropLevel } from "../types";
import { customerUiPrefix, isBrandBackdropLevel } from "../utils";
import { TinyColor } from "@ctrl/tinycolor";
import { useBackground } from "./Background";

const PREFIX = `${customerUiPrefix}-Button`;
const classes = {
  inverse: `${PREFIX}-inverse`,
  small: `${PREFIX}-small`,
  medium: `${PREFIX}-medium`,
  large: `${PREFIX}-large`,
};

interface BaseButtonProps extends Pick<MuiButtonProps, "sx" | "classes"> {
  size?: "small" | "medium" | "large";
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
  size = "medium",
  children,
  variant = "contained",
  fullWidth = false,
  forwardedRef,
  className,
  ...props
}) => {
  const { backdropLevel } = useBackground();

  const getClassName = () => {
    const classNames = [className, classes[size]];
    if (isBrandBackdropLevel(backdropLevel as BackdropLevel)) {
      classNames.push(classes.inverse);
    }
    return classNames.join(" ");
  };

  const muiButtonProps: MuiButtonProps = {
    color: "primary",
    disableElevation: true,
    fullWidth,
    className: getClassName(),
  };

  if (variant === "tertiary") {
    muiButtonProps.variant = "text";
  } else {
    muiButtonProps.variant = variant;
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

export const getButtonTheme = (): Components => {
  const { px } = helpers;
  const borderWidth = 2;
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: `${transitions.duration}ms ${transitions.easingFunction}`,
          transitionProperty: "background-color, border-color, color, opacity",
          fontFamily: fonts.secondary,
          fontWeight: fontWeights.secondary.semibold,
          fontSize: 18,
          lineHeight: 1,
          textTransform: "none",
          opacity: 1,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: px(32 - borderWidth * 2),
          paddingRight: px(32 - borderWidth * 2),
          borderStyle: "solid",
          borderRadius: px(32),
          borderWidth,
          "&:disabled": {
            opacity: 0.5,
          },
          // size
          [`&.${classes.small}`]: {
            height: px(32),
          },
          [`&.${classes.medium}`]: {
            height: px(40),
          },
          [`&.${classes.large}`]: {
            height: px(48),
          },
          // variant: contained
          "&.MuiButton-containedPrimary": {
            color: colors.midnight,
            backgroundColor: colors.cyan,
            borderColor: colors.transparent,
            "&:hover": {
              backgroundColor: new TinyColor(colors.cyan)
                .lighten(15)
                .toHexString(),
            },
          },
          // variant: outlined
          "&.MuiButton-outlinedPrimary": {
            color: colors.midnight,
            backgroundColor: colors.transparent,
            borderColor: colors.cyan,
            "&:hover": {
              borderColor: colors.midnight,
              borderWidth,
            },
            "&:disabled": {
              opacity: 0.5,
              borderWidth,
            },
            [`&.${classes.inverse}`]: {
              color: colors.white,
              "&:hover": {
                borderColor: colors.white,
              },
            },
          },
          // tertiary
          "&.MuiButton-text": {
            color: colors.midnight,
            backgroundColor: colors.transparent,
            borderColor: colors.cyan,
            height: "auto",
            paddingBottom: 2,
            paddingLeft: 0,
            paddingRight: 0,
            borderWidth: 0,
            borderBottomWidth: 2,
            borderRadius: 0,
            lineHeight: 1.333,
            "&:hover": {
              opacity: 0.5,
            },
            [`&.${classes.inverse}`]: {
              color: colors.white,
            },
          },
        },
      },
    },
  };
};
