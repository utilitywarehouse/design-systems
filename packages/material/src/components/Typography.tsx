import React from "react";
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from "@mui/material/Typography";
import {
  colors,
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { CSSProperties } from "@mui/material/styles/createTypography";
import { customerUiPrefix, isBrandBackdropLevel } from "../utils";
import { Theme, Components } from "@mui/material/styles";
import { useBackground } from "./Background";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    displayHeading: CSSProperties;
    subtitle: CSSProperties;
    body: CSSProperties;
    legalNote: CSSProperties;
    caption: CSSProperties;
  }

  // allow configuration using material-ui's `createTheme`
  interface TypographyVariantsOptions {
    displayHeading?: CSSProperties;
    subtitle?: CSSProperties;
    body?: CSSProperties;
    legalNote?: CSSProperties;
    caption?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    displayHeading: true;
    subtitle: true;
    body: true;
    legalNote: true;
    caption: true;
    h5: false;
    h6: false;
    body1: false;
    body2: false;
    button: false;
    overline: false;
    subtitle1: false;
    subtitle2: false;
  }
}

const PREFIX = `${customerUiPrefix}-Typography`;
const classes = {
  primary: `${PREFIX}-primary`,
  secondary: `${PREFIX}-secondary`,
  success: `${PREFIX}-success`,
  error: `${PREFIX}-error`,
  inverse: `${PREFIX}-inverse`,
  semibold: `${PREFIX}-semibold`,
};

export interface TypographyProps
  extends Pick<
    MuiTypographyProps,
    | "sx"
    | "gutterBottom"
    | "paragraph"
    | "align"
    | "classes"
    | "className"
    | "noWrap"
    | "textTransform"
    | "letterSpacing"
  > {
  color?: "primary" | "secondary" | "success" | "error";
  variant?: MuiTypographyProps["variant"];
  component?: React.ElementType;
  forwardedRef?: React.Ref<unknown>;
  fontWeight?: "regular" | "semibold";
}

const Typography: React.FunctionComponent<TypographyProps> = ({
  color = "primary",
  variant = "body",
  fontWeight = "regular",
  forwardedRef,
  ...props
}) => {
  const { backdropLevel } = useBackground();

  const variantMapping = {
    displayHeading: "h1",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    subtitle: "p",
    body: "p",
    legalNote: "p",
    caption: "caption",
  };

  const getClassName = () => {
    const classNames = [classes[color]];
    if (props.className) {
      classNames.push(props.className);
    }
    if (isBrandBackdropLevel(backdropLevel)) {
      classNames.push(classes.inverse);
    }
    if (fontWeight === "semibold") {
      classNames.push(classes.semibold);
    }
    return classNames.join(" ");
  };

  return (
    <MuiTypography
      {...props}
      variant={variant}
      variantMapping={variantMapping}
      className={getClassName()}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={forwardedRef as unknown as any}
    />
  );
};

export default Typography;

export const getTypographyTheme = (theme: Theme): Components => {
  const headingStyles = {
    fontFamily: fonts.primary,
    color: colors.purple,
    [`&.${classes.secondary}`]: {
      color: colors.midnight,
    },
    [`&.${classes.inverse}`]: {
      color: colors.white,
    },
  };
  const bodyStyles = {
    fontFamily: fonts.secondary,
    color: colors.midnight,
    [`&.${classes.semibold}`]: {
      fontWeight: fontWeights.secondary.semibold,
    },
    [`&.${classes.inverse}`]: {
      color: colors.white,
    },
    [`&.${classes.success}`]: {
      color: colors.jewel,
    },
    [`&.${classes.success}.${classes.inverse}`]: {
      color: colors.apple,
    },
    [`&.${classes.error}`]: {
      color: colors.maroonFlush,
    },
    [`&.${classes.error}.${classes.inverse}`]: {
      color: colors.rose,
    },
  };

  const muiTypography = {
    MuiTypography: {
      styleOverrides: {
        displayHeading: {
          ...headingStyles,
          fontSize: theme.typography.pxToRem(42),
          lineHeight: 1,
          [theme.breakpoints.up("desktop")]: {
            fontSize: theme.typography.pxToRem(64),
          },
        },
        h1: {
          ...headingStyles,
          fontSize: theme.typography.pxToRem(32),
          lineHeight: 1.2,
          [theme.breakpoints.up("desktop")]: {
            fontSize: theme.typography.pxToRem(42),
          },
        },
        h2: {
          ...headingStyles,
          fontSize: theme.typography.pxToRem(28),
          lineHeight: 1.5,
          [theme.breakpoints.up("desktop")]: {
            fontSize: theme.typography.pxToRem(32),
            lineHeight: 1.2,
          },
        },
        h3: {
          ...headingStyles,
          fontSize: theme.typography.pxToRem(22),
          lineHeight: 1.5,
          [theme.breakpoints.up("desktop")]: {
            fontSize: theme.typography.pxToRem(24),
          },
        },
        h4: {
          ...headingStyles,
          fontSize: theme.typography.pxToRem(18),
          lineHeight: 1.5,
          [theme.breakpoints.up("desktop")]: {
            fontSize: theme.typography.pxToRem(20),
          },
        },
        body: {
          ...bodyStyles,
          fontSize: theme.typography.pxToRem(16),
          lineHeight: 1.5,
        },
        subtitle: {
          ...bodyStyles,
          fontSize: theme.typography.pxToRem(18),
          lineHeight: 1.5,
          [theme.breakpoints.up("desktop")]: {
            fontSize: theme.typography.pxToRem(20),
          },
        },
        legalNote: {
          ...bodyStyles,
          fontSize: theme.typography.pxToRem(14),
          lineHeight: 1.5,
        },
        caption: {
          ...bodyStyles,
          fontSize: theme.typography.pxToRem(12),
          lineHeight: 2,
        },
      },
    },
  };

  return muiTypography as Components;
};
