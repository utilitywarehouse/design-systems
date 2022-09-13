/* eslint-disable @typescript-eslint/ban-types */
import * as React from "react";
import MuiButton, {
  ButtonProps as MuiButtonProps,
  ButtonTypeMap as MuiButtonTypeMap,
  ExtendButton,
} from "@mui/material/Button";
import { Components } from "@mui/material/styles";
import {
  transitions,
  fonts,
  fontWeights,
  colors,
  helpers,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { customerUiPrefix, isBrandBackgroundColor } from "../utils";
import { TinyColor } from "@ctrl/tinycolor";
import { useBackground } from "./Background";
import { clsx } from "clsx";
import { OverrideProps } from "@mui/material/OverridableComponent";

const PREFIX = `${customerUiPrefix}-Button`;
export const buttonClasses = {
  primary: `${PREFIX}-primary`,
  secondary: `${PREFIX}-secondary`,
  tertiary: `${PREFIX}-tertiary`,
  inverse: `${PREFIX}-inverse`,
  small: `${PREFIX}-small`,
  medium: `${PREFIX}-medium`,
  large: `${PREFIX}-large`,
};

interface CustomButtonProps<
  P = {},
  D extends React.ElementType = MuiButtonTypeMap["defaultComponent"]
> extends Pick<
    MuiButtonProps<D, P>,
    "sx" | "classes" | "fullWidth" | "children"
  > {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary";
  /**
   * @deprecated in v2. forwardedRef is deprecated in v2, and will be removed in v3.
   */
  forwardedRef?: React.Ref<HTMLButtonElement>;
  /**
   * @deprecated in v2. href is deprecated in v2, and will be removed in v3.
   */
  href?: MuiButtonProps["href"];
}

type ButtonTypeMap<
  P = {},
  D extends React.ElementType = MuiButtonTypeMap["defaultComponent"]
> = {
  props: CustomButtonProps<P, D>;
  defaultComponent: D;
};

export type ButtonProps<
  D extends React.ElementType = ButtonTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<ButtonTypeMap<P, D>, D>;

const Button = React.forwardRef(function Button(
  { size = "medium", variant = "primary", forwardedRef, className, ...props },
  ref
) {
  if (forwardedRef !== undefined) {
    console.warn(
      "forwardedRef on the Button component is deprecated in v2 and will be removed in v3. Please use ref instead."
    );
  }

  const { backgroundColor } = useBackground();

  const classNames = clsx(buttonClasses[variant], buttonClasses[size], {
    [buttonClasses.inverse]: isBrandBackgroundColor(backgroundColor),
    className: !!className,
  });

  return (
    <MuiButton
      {...(props as Partial<MuiButtonProps>)}
      className={classNames}
      ref={ref}
    />
  );
}) as ExtendButton<ButtonTypeMap>;

export default Button;

export const getButtonTheme = (): Components => {
  const { px } = helpers;
  const borderWidth = 2;
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          transition: `${transitions.duration}ms ${transitions.easingFunction}`,
          transitionProperty: "background-color, border-color, color, opacity",
          fontFamily: fonts.secondary,
          fontWeight: fontWeights.secondary.semibold,
          fontSize: 18,
          lineHeight: 1,
          letterSpacing: "0.02857em",
          textTransform: "none",
          opacity: 1,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: px(32 - borderWidth),
          paddingRight: px(32 - borderWidth),
          borderStyle: "solid",
          borderRadius: px(32),
          borderWidth,
          color: colors.midnight,
          "&:disabled": {
            opacity: 0.5,
          },
          // size
          [`&.${buttonClasses.small}`]: {
            height: px(32),
          },
          [`&.${buttonClasses.medium}`]: {
            height: px(40),
          },
          [`&.${buttonClasses.large}`]: {
            height: px(48),
          },
          [`&.${buttonClasses.primary}`]: {
            color: colors.midnight,
            backgroundColor: colors.cyan,
            border: "none",
            paddingLeft: px(32),
            paddingRight: px(32),
            "&:hover": {
              backgroundColor: new TinyColor(colors.cyan)
                .lighten(15)
                .toHexString(),
            },
          },
          [`&.${buttonClasses.secondary}`]: {
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
            [`&.${buttonClasses.inverse}`]: {
              color: colors.white,
              "&:hover": {
                borderColor: colors.white,
              },
            },
          },
          [`&.${buttonClasses.tertiary}`]: {
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
            [`&.${buttonClasses.inverse}`]: {
              color: colors.white,
            },
          },
          [`&.${buttonClasses.primary},&.${buttonClasses.secondary},&.${buttonClasses.tertiary}`]:
            {
              "&:disabled": {
                opacity: 0.5,
              },
              [`&.${buttonClasses.inverse}`]: {
                "&:disabled": {
                  opacity: 0.6,
                },
              },
            },
        },
      },
    },
  };
};
