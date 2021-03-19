import React from "react";
import clsx from "clsx";
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  TypographyVariantDefaults,
  makeStyles,
  Theme,
} from "@material-ui/core";
import {
  typographyGroup,
  paletteGroup,
  TypographyColor,
  Palette,
  TYPOGRAPHY_KEY,
  TypographyVariants,
  TypographyGroup,
} from "@utilitywarehouse/customer-ui-theme";
import { BackgroundContext } from "./Background";
import { DarkModeContext } from "./DarkModeProvider";

const typographyVariantMap: {
  [key in TypographyVariants]: keyof TypographyVariantDefaults;
} = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "body1",
  bodySmall: "body2",
  label: "caption",
};

export interface TypographyProps
  extends Omit<MuiTypographyProps, "variant" | "color"> {
  variant: TypographyVariants;
  color?: TypographyColor;
}

const useStyles = makeStyles<
  Theme,
  { palette: Palette["typography"]; typographyGroup: TypographyGroup }
>((theme) => ({
  h1: {
    fontFamily: ({ typographyGroup }) => typographyGroup.desktop.h1.fontFamily,
    fontWeight: ({ typographyGroup }) => typographyGroup.desktop.h1.fontWeight,
    fontSize: ({ typographyGroup }) => typographyGroup.desktop.h1.fontSize,
    lineHeight: ({ typographyGroup }) => typographyGroup.desktop.h1.lineHeight,
    [theme.breakpoints.down("md")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.tablet.h1.fontSize,
      lineHeight: ({ typographyGroup }) => typographyGroup.tablet.h1.lineHeight,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.mobile.h1.fontSize,
      lineHeight: ({ typographyGroup }) => typographyGroup.mobile.h1.lineHeight,
    },
    color: ({ palette }) => palette.h1.default,
    "&.success": {
      color: ({ palette }) => palette.h1.success,
    },
    "&.error": {
      color: ({ palette }) => palette.h1.error,
    },
  },
  h2: {
    fontFamily: ({ typographyGroup }) => typographyGroup.desktop.h2.fontFamily,
    fontWeight: ({ typographyGroup }) => typographyGroup.desktop.h2.fontWeight,
    fontSize: ({ typographyGroup }) => typographyGroup.desktop.h2.fontSize,
    lineHeight: ({ typographyGroup }) => typographyGroup.desktop.h2.lineHeight,
    [theme.breakpoints.down("md")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.tablet.h2.fontSize,
      lineHeight: ({ typographyGroup }) => typographyGroup.tablet.h2.lineHeight,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.mobile.h2.fontSize,
      lineHeight: ({ typographyGroup }) => typographyGroup.mobile.h2.lineHeight,
    },
    color: ({ palette }) => palette.h2.default,
    "&.success": {
      color: ({ palette }) => palette.h2.success,
    },
    "&.error": {
      color: ({ palette }) => palette.h2.error,
    },
  },
  h3: {
    fontFamily: ({ typographyGroup }) => typographyGroup.desktop.h3.fontFamily,
    fontWeight: ({ typographyGroup }) => typographyGroup.desktop.h3.fontWeight,
    fontSize: ({ typographyGroup }) => typographyGroup.desktop.h3.fontSize,
    lineHeight: ({ typographyGroup }) => typographyGroup.desktop.h3.lineHeight,
    [theme.breakpoints.down("md")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.tablet.h3.fontSize,
      lineHeight: ({ typographyGroup }) => typographyGroup.tablet.h3.lineHeight,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.mobile.h3.fontSize,
      lineHeight: ({ typographyGroup }) => typographyGroup.mobile.h3.lineHeight,
    },
    color: ({ palette }) => palette.h3.default,
    "&.success": {
      color: ({ palette }) => palette.h3.success,
    },
    "&.error": {
      color: ({ palette }) => palette.h3.error,
    },
  },
  h4: {
    fontFamily: ({ typographyGroup }) => typographyGroup.desktop.h4.fontFamily,
    fontWeight: ({ typographyGroup }) => typographyGroup.desktop.h4.fontWeight,
    fontSize: ({ typographyGroup }) => typographyGroup.desktop.h4.fontSize,
    lineHeight: ({ typographyGroup }) => typographyGroup.desktop.h4.lineHeight,
    [theme.breakpoints.down("md")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.tablet.h4.fontSize,
      lineHeight: ({ typographyGroup }) => typographyGroup.tablet.h4.lineHeight,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.mobile.h4.fontSize,
      lineHeight: ({ typographyGroup }) => typographyGroup.mobile.h4.lineHeight,
    },
    color: ({ palette }) => palette.h4.default,
    "&.success": {
      color: ({ palette }) => palette.h4.success,
    },
    "&.error": {
      color: ({ palette }) => palette.h4.error,
    },
  },
  h5: {
    fontFamily: ({ typographyGroup }) => typographyGroup.desktop.h5.fontFamily,
    fontWeight: ({ typographyGroup }) => typographyGroup.desktop.h5.fontWeight,
    fontSize: ({ typographyGroup }) => typographyGroup.desktop.h5.fontSize,
    lineHeight: ({ typographyGroup }) => typographyGroup.desktop.h5.lineHeight,
    [theme.breakpoints.down("md")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.tablet.h5.fontSize,
      lineHeight: ({ typographyGroup }) => typographyGroup.tablet.h5.lineHeight,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.mobile.h5.fontSize,
      lineHeight: ({ typographyGroup }) => typographyGroup.mobile.h5.lineHeight,
    },
    color: ({ palette }) => palette.h5.default,
    "&.success": {
      color: ({ palette }) => palette.h5.success,
    },
    "&.error": {
      color: ({ palette }) => palette.h5.error,
    },
  },
  body1: {
    fontFamily: ({ typographyGroup }) =>
      typographyGroup.desktop.body.fontFamily,
    fontWeight: ({ typographyGroup }) =>
      typographyGroup.desktop.body.fontWeight,
    fontSize: ({ typographyGroup }) => typographyGroup.desktop.body.fontSize,
    lineHeight: ({ typographyGroup }) =>
      typographyGroup.desktop.body.lineHeight,
    [theme.breakpoints.down("md")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.tablet.body.fontSize,
      lineHeight: ({ typographyGroup }) =>
        typographyGroup.tablet.body.lineHeight,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.mobile.body.fontSize,
      lineHeight: ({ typographyGroup }) =>
        typographyGroup.mobile.body.lineHeight,
    },
    color: ({ palette }) => palette.body.default,
    "&.success": {
      color: ({ palette }) => palette.body.success,
    },
    "&.error": {
      color: ({ palette }) => palette.body.error,
    },
  },
  body2: {
    fontFamily: ({ typographyGroup }) =>
      typographyGroup.desktop.bodySmall.fontFamily,
    fontWeight: ({ typographyGroup }) =>
      typographyGroup.desktop.bodySmall.fontWeight,
    fontSize: ({ typographyGroup }) =>
      typographyGroup.desktop.bodySmall.fontSize,
    lineHeight: ({ typographyGroup }) =>
      typographyGroup.desktop.bodySmall.lineHeight,
    [theme.breakpoints.down("md")]: {
      fontSize: ({ typographyGroup }) =>
        typographyGroup.tablet.bodySmall.fontSize,
      lineHeight: ({ typographyGroup }) =>
        typographyGroup.tablet.bodySmall.lineHeight,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ({ typographyGroup }) =>
        typographyGroup.mobile.bodySmall.fontSize,
      lineHeight: ({ typographyGroup }) =>
        typographyGroup.mobile.bodySmall.lineHeight,
    },
    color: ({ palette }) => palette.bodySmall.default,
    "&.success": {
      color: ({ palette }) => palette.bodySmall.success,
    },
    "&.error": {
      color: ({ palette }) => palette.bodySmall.error,
    },
  },
  caption: {
    fontFamily: ({ typographyGroup }) =>
      typographyGroup.desktop.label.fontFamily,
    fontWeight: ({ typographyGroup }) =>
      typographyGroup.desktop.label.fontWeight,
    fontSize: ({ typographyGroup }) => typographyGroup.desktop.label.fontSize,
    lineHeight: ({ typographyGroup }) =>
      typographyGroup.desktop.label.lineHeight,
    [theme.breakpoints.down("md")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.tablet.label.fontSize,
      lineHeight: ({ typographyGroup }) =>
        typographyGroup.tablet.label.lineHeight,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ({ typographyGroup }) => typographyGroup.mobile.label.fontSize,
      lineHeight: ({ typographyGroup }) =>
        typographyGroup.mobile.label.lineHeight,
    },
    color: ({ palette }) => palette.label.default,
    "&.success": {
      color: ({ palette }) => palette.label.success,
    },
    "&.error": {
      color: ({ palette }) => palette.label.error,
    },
  },
}));

const Typography: React.FC<TypographyProps> = ({
  variant,
  color = "default",
  children,
  ...props
}) => {
  const { darkModeEnabled } = React.useContext(DarkModeContext);
  const { backdropLevel } = React.useContext(BackgroundContext);
  const palette = React.useMemo(() => {
    return paletteGroup[darkModeEnabled ? "dark" : "light"][backdropLevel][
      TYPOGRAPHY_KEY
    ];
  }, [darkModeEnabled, backdropLevel]);
  const classes = useStyles({
    palette,
    typographyGroup,
  });
  const className = React.useMemo(
    () =>
      clsx({
        default: color === "default",
        success: color === "success",
        error: color === "error",
      }),
    [color]
  );

  return (
    <MuiTypography
      classes={classes}
      variant={typographyVariantMap[variant]}
      className={className}
      {...props}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
