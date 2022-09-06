import * as React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
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

interface BaseButtonProps
  extends Pick<MuiButtonProps, "sx" | "classes" | "href"> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary";
  fullWidth?: boolean;
  children?: React.ReactNode;
  /**
   * @deprecated in v2. forwardedRef is deprecated in v2, and will be removed in v3.
   */
  forwardedRef?: React.Ref<HTMLButtonElement>;
}

type ButtonElementProps = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof BaseButtonProps>;

type AnchorElementProps = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<"a">, keyof BaseButtonProps>;

// <<<<<<< HEAD
// const Button: React.FunctionComponent<ButtonProps> = ({
//   size = "medium",
//   variant = "primary",
//   forwardedRef,
//   className,
//   ...props
// }) => {
//   const { backgroundColor } = useBackground();
// ||||||| parent of 2770ed94a (add ref to button component)
// const Button: React.FunctionComponent<ButtonProps> = ({
//   size = "medium",
//   children,
//   variant = "primary",
//   fullWidth = false,
//   forwardedRef,
//   className,
//   ...props
// }) => {
//   const { backgroundColor } = useBackground();
// =======
export type ButtonProps = ButtonElementProps | AnchorElementProps;

// <<<<<<< HEAD
//   const classNames = clsx(buttonClasses[variant], buttonClasses[size], {
//     [buttonClasses.inverse]: isBrandBackgroundColor(backgroundColor),
//     className: !!className,
//   });
// ||||||| parent of 2770ed94a (add ref to button component)
//   const getClassName = () => {
//     const classNames = [buttonClasses[variant], buttonClasses[size]];
//     if (className) {
//       classNames.push(className);
//     }
//     if (isBrandBackgroundColor(backgroundColor)) {
//       classNames.push(buttonClasses.inverse);
//     }
//     return classNames.join(" ");
//   };
//
//   const muiVariants = {
//     primary: "contained",
//     secondary: "outlined",
//     tertiary: "text",
//   };
//
//   const muiButtonProps: MuiButtonProps = {
//     ...(props as Partial<MuiButtonProps>),
//     fullWidth,
//     variant: muiVariants[variant] as MuiButtonProps["variant"],
//     className: getClassName(),
//   };
// =======
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "medium",
      children,
      variant = "primary",
      fullWidth = false,
      forwardedRef,
      className,
      ...props
    },
    ref
  ) => {
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={forwardedRef || ref}
      />
    );
  }
);

Button.displayName = "Button";

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
