import React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { Theme, Components } from "@mui/material/styles";
import {
  transitions,
  spacingBase,
  fonts,
  fontWeights,
  colors,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { BackdropLevel } from "../types";
import { customerUiPrefix, isBrandBackdropLevel } from "../utils";
import { TinyColor } from "@ctrl/tinycolor";
import { useBackground } from "./Background";

const PREFIX = `${customerUiPrefix}-Button`;
const classes = {
  inverse: `${PREFIX}-inverse`,
};

interface BaseButtonProps extends Pick<MuiButtonProps, "sx" | "classes"> {
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
  className,
  ...props
}) => {
  const { backdropLevel } = useBackground();

  const getClassName = () => {
    const classNames = [className];
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

export const getButtonTheme = (theme: Theme): Components => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: `${transitions.duration}ms ${transitions.easingFunction}`,
          transitionProperty: "background-color, border-color, color, opacity",
          fontFamily: fonts.secondary,
          fontWeight: fontWeights.secondary.semibold,
          fontSize: 16,
          lineHeight: 1,
          textTransform: "none",
          borderStyle: "solid",
          paddingTop: 0,
          paddingBottom: 0,
          height: spacingBase * 4,
          paddingLeft: spacingBase * 2,
          paddingRight: spacingBase * 2,
          borderRadius: spacingBase * (4 / 2),
          [theme.breakpoints.up("tablet")]: {
            fontSize: 18,
          },
          "&:disabled": {
            opacity: 0.5,
          },
          // contained
          "&.MuiButton-containedPrimary": {
            color: colors.midnight,
            backgroundColor: colors.cyan,
            borderColor: colors.transparent,
            opacity: 1,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            "&:hover": {
              backgroundColor: new TinyColor(colors.cyan)
                .lighten(15)
                .toHexString(),
            },
          },
          // outlined
          "&.MuiButton-outlinedPrimary": {
            backgroundColor: colors.transparent,
            borderColor: colors.cyan,
            color: colors.midnight,
            borderWidth: 2,
            "&:hover": {
              borderColor: colors.midnight,
            },
            [`&.${classes.inverse}`]: {
              color: colors.white,
              "&:hover": {
                borderColor: colors.white,
              },
            },
          },
          // contained & outlined
          "&.MuiButton-containedPrimary,&.MuiButton-outlinedPrimary": {
            [theme.breakpoints.up("desktop")]: {
              height: spacingBase * 5,
              paddingLeft: spacingBase * 3,
              paddingRight: spacingBase * 3,
              borderRadius: spacingBase * (5 / 2),
            },
            "&.MuiButton-sizeLarge": {
              height: spacingBase * 6,
              paddingLeft: spacingBase * 3,
              paddingRight: spacingBase * 3,
              borderRadius: spacingBase * (6 / 2),
              [theme.breakpoints.up("desktop")]: {
                height: spacingBase * 7,
                paddingLeft: spacingBase * 4,
                paddingRight: spacingBase * 4,
                borderRadius: spacingBase * (7 / 2),
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
