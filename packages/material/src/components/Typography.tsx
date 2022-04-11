import React from "react";
import MuiTypography, {
  TypographyPropsVariantOverrides,
  TypographyProps as MuiTypographyProps,
} from "@mui/material/Typography";
import { OverridableStringUnion } from "@mui/types";
import {
  colors,
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { BackdropLevel } from "../types";
import { isBrandBackdropLevel } from "../utils";
import { useTheme } from "./BackgroundProvider";
import { Theme, styled } from "@mui/material/styles";
import {
  CSSProperties,
  TypographyStyleOptions,
} from "@mui/material/styles/createTypography";

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

export interface TypographyProps
  extends Pick<
    MuiTypographyProps,
    | "sx"
    | "gutterBottom"
    | "paragraph"
    | "align"
    | "classes"
    | "noWrap"
    | "textTransform"
    | "letterSpacing"
  > {
  color?: "primary" | "secondary" | "success" | "error";
  variant?: OverridableStringUnion<
    | "displayHeading"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "subtitle"
    | "body"
    | "legalNote"
    | "caption"
    | "inherit",
    TypographyPropsVariantOverrides
  >;
  component?: React.ElementType;
  forwardedRef?: React.Ref<unknown>;
  fontWeight?: "regular" | "semibold";
}

const defaultTypographyPalette = {
  primary: { heading: colors.purple, body: colors.midnight },
  secondary: colors.midnight,
  success: colors.jewel,
  error: colors.maroonFlush,
};
const inverseTypographyPalette = {
  primary: colors.white,
  secondary: colors.white,
  success: colors.apple,
  error: colors.rose,
};
const headingVariants = ["displayHeading", "h1", "h2", "h3", "h4"];

const getTypographyPalette = (
  backdropLevel: BackdropLevel,
  variant: TypographyProps["variant"] = "body",
  color: TypographyProps["color"] = "primary"
) => {
  if (variant === "inherit") return "inherit";

  if (headingVariants.includes(variant)) {
    if (color === "success" || color === "error") {
      return isBrandBackdropLevel(backdropLevel)
        ? inverseTypographyPalette.primary
        : defaultTypographyPalette.primary.heading;
    }
  }

  if (isBrandBackdropLevel(backdropLevel)) {
    return inverseTypographyPalette[color];
  }

  if (color === "primary") {
    return headingVariants.includes(variant)
      ? defaultTypographyPalette.primary.heading
      : defaultTypographyPalette.primary.body;
  }
  return defaultTypographyPalette[color];
};

interface StyledTypographyProps {
  backdropLevel: BackdropLevel;
  variant: TypographyProps["variant"];
  color: TypographyProps["color"];
  fontWeight: TypographyProps["fontWeight"];
}

const StyledTypography = styled(MuiTypography, {
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "backdropLevel" && prop !== "fontWeight",
})<StyledTypographyProps>(
  ({ backdropLevel, color, variant = "body", fontWeight = "regular" }) => {
    const weight = headingVariants.includes(variant)
      ? fontWeights.primary
      : fontWeights.secondary[fontWeight as "regular" | "semibold"];

    const typographyColor = getTypographyPalette(backdropLevel, variant, color);
    return { fontWeight: weight, color: typographyColor };
  }
);

const Typography: React.FunctionComponent<TypographyProps> = ({
  color = "primary",
  variant = "body",
  gutterBottom = false,
  paragraph = false,
  fontWeight = "regular",
  forwardedRef,
  ...props
}) => {
  const { backdropLevel } = useTheme();

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

  return (
    <StyledTypography
      {...props}
      backdropLevel={backdropLevel}
      color={color}
      variant={variant}
      gutterBottom={gutterBottom}
      paragraph={paragraph}
      fontWeight={fontWeight}
      variantMapping={variantMapping}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={forwardedRef as unknown as any}
    />
  );
};

export default Typography;

export const getTypographyConfiguration = (
  theme: Theme
): {
  displayHeading: TypographyStyleOptions;
  h1: TypographyStyleOptions;
  h2: TypographyStyleOptions;
  h3: TypographyStyleOptions;
  h4: TypographyStyleOptions;
  subtitle: TypographyStyleOptions;
  body: TypographyStyleOptions;
  legalNote: TypographyStyleOptions;
  caption: TypographyStyleOptions;
} => {
  return {
    displayHeading: {
      fontFamily: fonts.primary,
      fontWeight: fontWeights.primary,
      fontSize: theme.typography.pxToRem(42),
      lineHeight: 1,
      [theme.breakpoints.up("desktop")]: {
        fontSize: theme.typography.pxToRem(64),
      },
    },
    h1: {
      fontFamily: fonts.primary,
      fontWeight: fontWeights.primary,
      fontSize: theme.typography.pxToRem(32),
      lineHeight: 1.2,
      [theme.breakpoints.up("desktop")]: {
        fontSize: theme.typography.pxToRem(42),
      },
    },
    h2: {
      fontFamily: fonts.primary,
      fontWeight: fontWeights.primary,
      fontSize: theme.typography.pxToRem(28),
      lineHeight: 1.5,
      [theme.breakpoints.up("desktop")]: {
        fontSize: theme.typography.pxToRem(32),
        lineHeight: 1.2,
      },
    },
    h3: {
      fontFamily: fonts.primary,
      fontWeight: fontWeights.primary,
      fontSize: theme.typography.pxToRem(22),
      lineHeight: 1.5,
      [theme.breakpoints.up("desktop")]: {
        fontSize: theme.typography.pxToRem(24),
      },
    },
    h4: {
      fontFamily: fonts.primary,
      fontWeight: fontWeights.primary,
      fontSize: theme.typography.pxToRem(18),
      lineHeight: 1.5,
      [theme.breakpoints.up("desktop")]: {
        fontSize: theme.typography.pxToRem(20),
      },
    },
    subtitle: {
      fontFamily: fonts.secondary,
      fontWeight: fontWeights.secondary.regular,
      fontSize: theme.typography.pxToRem(18),
      lineHeight: 1.5,
      [theme.breakpoints.up("desktop")]: {
        fontSize: theme.typography.pxToRem(20),
      },
    },
    body: {
      fontFamily: fonts.secondary,
      fontWeight: fontWeights.secondary.regular,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 1.5,
    },
    legalNote: {
      fontFamily: fonts.secondary,
      fontWeight: fontWeights.secondary.regular,
      fontSize: theme.typography.pxToRem(14),
      lineHeight: 1.5,
    },
    caption: {
      fontFamily: fonts.secondary,
      fontWeight: fontWeights.secondary.regular,
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 2,
    },
  };
};
