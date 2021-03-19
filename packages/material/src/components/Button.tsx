import React from "react";
import MuiButton, {
  ButtonProps as MuiButtonProps,
} from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core";
import { BackgroundContext } from "./Background";
import {
  ButtonGroup,
  ButtonSize,
  ButtonVariant,
  buttonGroup,
  paletteGroup,
  Palette,
  BUTTON_KEY,
} from "@utilitywarehouse/customer-ui-theme";
import { DarkModeContext } from "./DarkModeProvider";

const useStyles = makeStyles<
  Theme,
  { palette: Palette["button"]; buttonGroup: ButtonGroup }
>((theme) => ({
  root: {
    textTransform: "none",
    letterSpacing: 0,
    "&:disabled": {
      cursor: "not-allowed",
    },
  },
  contained: ({ buttonGroup, palette }) => ({
    color: palette.primary.idle.color,
    backgroundColor: palette.primary.idle.backgroundColor,
    borderColor: palette.primary.idle.borderColor,
    fontFamily: buttonGroup.desktop.primary.regular.idle.fontFamily,
    fontSize: buttonGroup.desktop.primary.regular.idle.fontSize,
    fontWeight: buttonGroup.desktop.primary.regular.idle.fontWeight,
    lineHeight: buttonGroup.desktop.primary.regular.idle.lineHeight,
    height: buttonGroup.desktop.primary.regular.idle.height,
    paddingTop: buttonGroup.desktop.primary.regular.idle.paddingTop,
    paddingBottom: buttonGroup.desktop.primary.regular.idle.paddingBottom,
    paddingLeft: buttonGroup.desktop.primary.regular.idle.paddingLeft,
    paddingRight: buttonGroup.desktop.primary.regular.idle.paddingRight,
    borderTopLeftRadius:
      buttonGroup.desktop.primary.regular.idle.borderTopLeftRadius,
    borderTopRightRadius:
      buttonGroup.desktop.primary.regular.idle.borderTopRightRadius,
    borderBottomLeftRadius:
      buttonGroup.desktop.primary.regular.idle.borderBottomLeftRadius,
    borderBottomRightRadius:
      buttonGroup.desktop.primary.regular.idle.borderBottomRightRadius,
    borderStyle: buttonGroup.desktop.primary.regular.idle.borderStyle,
    borderTopWidth: buttonGroup.desktop.primary.regular.idle.borderTopWidth,
    borderBottomWidth:
      buttonGroup.desktop.primary.regular.idle.borderBottomWidth,
    borderLeftWidth: buttonGroup.desktop.primary.regular.idle.borderLeftWidth,
    borderRightWidth: buttonGroup.desktop.primary.regular.idle.borderRightWidth,
    [theme.breakpoints.down("md")]: {
      height: buttonGroup.tablet.primary.regular.idle.height,
      paddingTop: buttonGroup.tablet.primary.regular.idle.paddingTop,
      paddingBottom: buttonGroup.tablet.primary.regular.idle.paddingBottom,
      paddingLeft: buttonGroup.tablet.primary.regular.idle.paddingLeft,
      paddingRight: buttonGroup.tablet.primary.regular.idle.paddingRight,
      borderTopLeftRadius:
        buttonGroup.tablet.primary.regular.idle.borderTopLeftRadius,
      borderTopRightRadius:
        buttonGroup.tablet.primary.regular.idle.borderTopRightRadius,
      borderBottomLeftRadius:
        buttonGroup.tablet.primary.regular.idle.borderBottomLeftRadius,
      borderBottomRightRadius:
        buttonGroup.tablet.primary.regular.idle.borderBottomRightRadius,
    },
    [theme.breakpoints.down("sm")]: {
      height: buttonGroup.mobile.primary.regular.idle.height,
      paddingTop: buttonGroup.mobile.primary.regular.idle.paddingTop,
      paddingBottom: buttonGroup.mobile.primary.regular.idle.paddingBottom,
      paddingLeft: buttonGroup.mobile.primary.regular.idle.paddingLeft,
      paddingRight: buttonGroup.mobile.primary.regular.idle.paddingRight,
      borderTopLeftRadius:
        buttonGroup.mobile.primary.regular.idle.borderTopLeftRadius,
      borderTopRightRadius:
        buttonGroup.mobile.primary.regular.idle.borderTopRightRadius,
      borderBottomLeftRadius:
        buttonGroup.mobile.primary.regular.idle.borderBottomLeftRadius,
      borderBottomRightRadius:
        buttonGroup.mobile.primary.regular.idle.borderBottomRightRadius,
    },
    "&:hover": {
      color: palette.primary.active.color,
      backgroundColor: palette.primary.active.backgroundColor,
      borderColor: palette.primary.active.borderColor,
    },
    "&.Mui-disabled": {
      color: palette.primary.disabled.color,
      backgroundColor: palette.primary.disabled.backgroundColor,
      borderColor: palette.primary.disabled.borderColor,
      opacity: buttonGroup.desktop.primary.large.disabled.opacity,
    },
  }),
  containedSizeLarge: ({ buttonGroup }) => ({
    height: buttonGroup.desktop.primary.large.idle.height,
    paddingTop: buttonGroup.desktop.primary.large.idle.paddingTop,
    paddingBottom: buttonGroup.desktop.primary.large.idle.paddingBottom,
    paddingLeft: buttonGroup.desktop.primary.large.idle.paddingLeft,
    paddingRight: buttonGroup.desktop.primary.large.idle.paddingRight,
    borderTopLeftRadius:
      buttonGroup.desktop.primary.large.idle.borderTopLeftRadius,
    borderTopRightRadius:
      buttonGroup.desktop.primary.large.idle.borderTopRightRadius,
    borderBottomLeftRadius:
      buttonGroup.desktop.primary.large.idle.borderBottomLeftRadius,
    borderBottomRightRadius:
      buttonGroup.desktop.primary.large.idle.borderBottomRightRadius,
  }),
  outlined: ({ palette, buttonGroup }) => ({
    color: palette.secondary.idle.color,
    backgroundColor: palette.secondary.idle.backgroundColor,
    borderColor: palette.secondary.idle.borderColor,
    fontFamily: buttonGroup.desktop.secondary.regular.idle.fontFamily,
    fontSize: buttonGroup.desktop.secondary.regular.idle.fontSize,
    fontWeight: buttonGroup.desktop.secondary.regular.idle.fontWeight,
    lineHeight: buttonGroup.desktop.secondary.regular.idle.lineHeight,
    height: buttonGroup.desktop.secondary.regular.idle.height,
    paddingTop: buttonGroup.desktop.secondary.regular.idle.paddingTop,
    paddingBottom: buttonGroup.desktop.secondary.regular.idle.paddingBottom,
    paddingLeft: buttonGroup.desktop.secondary.regular.idle.paddingLeft,
    paddingRight: buttonGroup.desktop.secondary.regular.idle.paddingRight,
    borderTopLeftRadius:
      buttonGroup.desktop.secondary.regular.idle.borderTopLeftRadius,
    borderTopRightRadius:
      buttonGroup.desktop.secondary.regular.idle.borderTopRightRadius,
    borderBottomLeftRadius:
      buttonGroup.desktop.secondary.regular.idle.borderBottomLeftRadius,
    borderBottomRightRadius:
      buttonGroup.desktop.secondary.regular.idle.borderBottomRightRadius,
    borderStyle: buttonGroup.desktop.secondary.regular.idle.borderStyle,
    borderTopWidth: buttonGroup.desktop.secondary.regular.idle.borderTopWidth,
    borderBottomWidth:
      buttonGroup.desktop.secondary.regular.idle.borderBottomWidth,
    borderLeftWidth: buttonGroup.desktop.secondary.regular.idle.borderLeftWidth,
    borderRightWidth:
      buttonGroup.desktop.secondary.regular.idle.borderRightWidth,
    [theme.breakpoints.down("md")]: {
      height: buttonGroup.tablet.secondary.regular.idle.height,
      paddingTop: buttonGroup.tablet.secondary.regular.idle.paddingTop,
      paddingBottom: buttonGroup.tablet.secondary.regular.idle.paddingBottom,
      paddingLeft: buttonGroup.tablet.secondary.regular.idle.paddingLeft,
      paddingRight: buttonGroup.tablet.secondary.regular.idle.paddingRight,
      borderTopLeftRadius:
        buttonGroup.tablet.secondary.regular.idle.borderTopLeftRadius,
      borderTopRightRadius:
        buttonGroup.tablet.secondary.regular.idle.borderTopRightRadius,
      borderBottomLeftRadius:
        buttonGroup.tablet.secondary.regular.idle.borderBottomLeftRadius,
      borderBottomRightRadius:
        buttonGroup.tablet.secondary.regular.idle.borderBottomRightRadius,
    },
    [theme.breakpoints.down("sm")]: {
      height: buttonGroup.mobile.secondary.regular.idle.height,
      paddingTop: buttonGroup.mobile.secondary.regular.idle.paddingTop,
      paddingBottom: buttonGroup.mobile.secondary.regular.idle.paddingBottom,
      paddingLeft: buttonGroup.mobile.secondary.regular.idle.paddingLeft,
      paddingRight: buttonGroup.mobile.secondary.regular.idle.paddingRight,
      borderTopLeftRadius:
        buttonGroup.mobile.secondary.regular.idle.borderTopLeftRadius,
      borderTopRightRadius:
        buttonGroup.mobile.secondary.regular.idle.borderTopRightRadius,
      borderBottomLeftRadius:
        buttonGroup.mobile.secondary.regular.idle.borderBottomLeftRadius,
      borderBottomRightRadius:
        buttonGroup.mobile.secondary.regular.idle.borderBottomRightRadius,
    },
    "&:hover": {
      color: palette.secondary.active.color,
      backgroundColor: palette.secondary.active.backgroundColor,
      borderColor: palette.secondary.active.borderColor,
      borderTopWidth:
        buttonGroup.desktop.secondary.regular.active.borderTopWidth,
      borderBottomWidth:
        buttonGroup.desktop.secondary.regular.active.borderBottomWidth,
      borderLeftWidth:
        buttonGroup.desktop.secondary.regular.active.borderLeftWidth,
      borderRightWidth:
        buttonGroup.desktop.secondary.regular.active.borderRightWidth,
    },
    "&.Mui-disabled": {
      color: palette.secondary.disabled.color,
      backgroundColor: palette.secondary.disabled.backgroundColor,
      borderColor: palette.secondary.disabled.borderColor,
      opacity: buttonGroup.desktop.secondary.large.disabled.opacity,
    },
  }),
  outlinedSizeLarge: ({ buttonGroup }) => ({
    height: buttonGroup.desktop.secondary.large.idle.height,
    paddingTop: buttonGroup.desktop.secondary.large.idle.paddingTop,
    paddingBottom: buttonGroup.desktop.secondary.large.idle.paddingBottom,
    paddingLeft: buttonGroup.desktop.secondary.large.idle.paddingLeft,
    paddingRight: buttonGroup.desktop.secondary.large.idle.paddingRight,
    borderTopLeftRadius:
      buttonGroup.desktop.secondary.large.idle.borderTopLeftRadius,
    borderTopRightRadius:
      buttonGroup.desktop.secondary.large.idle.borderTopRightRadius,
    borderBottomLeftRadius:
      buttonGroup.desktop.secondary.large.idle.borderBottomLeftRadius,
    borderBottomRightRadius:
      buttonGroup.desktop.secondary.large.idle.borderBottomRightRadius,
  }),
  text: ({ palette, buttonGroup }) => ({
    color: palette.tertiary.idle.color,
    backgroundColor: palette.tertiary.idle.backgroundColor,
    borderColor: palette.tertiary.idle.borderColor,
    fontFamily: buttonGroup.desktop.tertiary.regular.idle.fontFamily,
    fontSize: buttonGroup.desktop.tertiary.regular.idle.fontSize,
    fontWeight: buttonGroup.desktop.tertiary.regular.idle.fontWeight,
    lineHeight: buttonGroup.desktop.tertiary.regular.idle.lineHeight,
    height: buttonGroup.desktop.tertiary.regular.idle.height,
    paddingTop: buttonGroup.desktop.tertiary.regular.idle.paddingTop,
    paddingBottom: buttonGroup.desktop.tertiary.regular.idle.paddingBottom,
    paddingLeft: buttonGroup.desktop.tertiary.regular.idle.paddingLeft,
    paddingRight: buttonGroup.desktop.tertiary.regular.idle.paddingRight,
    borderTopLeftRadius:
      buttonGroup.desktop.tertiary.regular.idle.borderTopLeftRadius,
    borderTopRightRadius:
      buttonGroup.desktop.tertiary.regular.idle.borderTopRightRadius,
    borderBottomLeftRadius:
      buttonGroup.desktop.tertiary.regular.idle.borderBottomLeftRadius,
    borderBottomRightRadius:
      buttonGroup.desktop.tertiary.regular.idle.borderBottomRightRadius,
    borderStyle: buttonGroup.desktop.tertiary.regular.idle.borderStyle,
    borderTopWidth: buttonGroup.desktop.tertiary.regular.idle.borderTopWidth,
    borderBottomWidth:
      buttonGroup.desktop.tertiary.regular.idle.borderBottomWidth,
    borderLeftWidth: buttonGroup.desktop.tertiary.regular.idle.borderLeftWidth,
    borderRightWidth:
      buttonGroup.desktop.tertiary.regular.idle.borderRightWidth,
    [theme.breakpoints.down("md")]: {
      height: buttonGroup.tablet.tertiary.regular.idle.height,
      paddingTop: buttonGroup.tablet.tertiary.regular.idle.paddingTop,
      paddingBottom: buttonGroup.tablet.tertiary.regular.idle.paddingBottom,
      paddingLeft: buttonGroup.tablet.tertiary.regular.idle.paddingLeft,
      paddingRight: buttonGroup.tablet.tertiary.regular.idle.paddingRight,
      borderTopLeftRadius:
        buttonGroup.tablet.tertiary.regular.idle.borderTopLeftRadius,
      borderTopRightRadius:
        buttonGroup.tablet.tertiary.regular.idle.borderTopRightRadius,
      borderBottomLeftRadius:
        buttonGroup.tablet.tertiary.regular.idle.borderBottomLeftRadius,
      borderBottomRightRadius:
        buttonGroup.tablet.tertiary.regular.idle.borderBottomRightRadius,
    },
    [theme.breakpoints.down("sm")]: {
      height: buttonGroup.mobile.tertiary.regular.idle.height,
      paddingTop: buttonGroup.mobile.tertiary.regular.idle.paddingTop,
      paddingBottom: buttonGroup.mobile.tertiary.regular.idle.paddingBottom,
      paddingLeft: buttonGroup.mobile.tertiary.regular.idle.paddingLeft,
      paddingRight: buttonGroup.mobile.tertiary.regular.idle.paddingRight,
      borderTopLeftRadius:
        buttonGroup.mobile.tertiary.regular.idle.borderTopLeftRadius,
      borderTopRightRadius:
        buttonGroup.mobile.tertiary.regular.idle.borderTopRightRadius,
      borderBottomLeftRadius:
        buttonGroup.mobile.tertiary.regular.idle.borderBottomLeftRadius,
      borderBottomRightRadius:
        buttonGroup.mobile.tertiary.regular.idle.borderBottomRightRadius,
    },
    "&:hover": {
      color: palette.tertiary.active.color,
      backgroundColor: palette.tertiary.active.backgroundColor,
      borderColor: palette.tertiary.active.borderColor,
      borderTopWidth:
        buttonGroup.desktop.tertiary.regular.active.borderTopWidth,
      borderBottomWidth:
        buttonGroup.desktop.tertiary.regular.active.borderBottomWidth,
      borderLeftWidth:
        buttonGroup.desktop.tertiary.regular.active.borderLeftWidth,
      borderRightWidth:
        buttonGroup.desktop.tertiary.regular.active.borderRightWidth,
      opacity: buttonGroup.desktop.tertiary.large.active.opacity,
    },
    "&.Mui-disabled": {
      color: palette.tertiary.disabled.color,
      backgroundColor: palette.tertiary.disabled.backgroundColor,
      borderColor: palette.tertiary.disabled.borderColor,
      opacity: buttonGroup.desktop.tertiary.large.disabled.opacity,
    },
  }),
  textSizeLarge: ({ buttonGroup }) => ({
    height: buttonGroup.desktop.tertiary.large.idle.height,
    paddingTop: buttonGroup.desktop.tertiary.large.idle.paddingTop,
    paddingBottom: buttonGroup.desktop.tertiary.large.idle.paddingBottom,
    paddingLeft: buttonGroup.desktop.tertiary.large.idle.paddingLeft,
    paddingRight: buttonGroup.desktop.tertiary.large.idle.paddingRight,
    borderTopLeftRadius:
      buttonGroup.desktop.tertiary.large.idle.borderTopLeftRadius,
    borderTopRightRadius:
      buttonGroup.desktop.tertiary.large.idle.borderTopRightRadius,
    borderBottomLeftRadius:
      buttonGroup.desktop.tertiary.large.idle.borderBottomLeftRadius,
    borderBottomRightRadius:
      buttonGroup.desktop.tertiary.large.idle.borderBottomRightRadius,
  }),
}));

const buttonVariantMap: {
  [key in ButtonVariant]: MuiButtonProps["variant"];
} = {
  primary: "contained",
  secondary: "outlined",
  tertiary: "text",
};

export interface ButtonProps
  extends Omit<MuiButtonProps, "variant" | "size" | "color"> {
  variant: ButtonVariant;
  size?: ButtonSize;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  variant = "primary",
  size = "regular",
  ...props
}) => {
  const { darkModeEnabled } = React.useContext(DarkModeContext);
  const { backdropLevel } = React.useContext(BackgroundContext);
  const palette = React.useMemo(() => {
    return paletteGroup[darkModeEnabled ? "dark" : "light"][backdropLevel][
      BUTTON_KEY
    ];
  }, [darkModeEnabled, backdropLevel]);
  const classes = useStyles({
    palette,
    buttonGroup,
  });

  return (
    <MuiButton
      classes={classes}
      color="primary"
      size={size === "large" ? "large" : "small"}
      variant={buttonVariantMap[variant]}
      disableElevation
      disableRipple
      {...props}
    />
  );
};

export default Button;
