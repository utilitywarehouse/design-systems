import {
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { Breakpoint } from "./breakpoint";

export const TYPOGRAPHY_KEY = "typography";

export interface TypographyStylesNonColor {
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: number;
}

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "bodySmall"
  | "label";

export type TypographyColor = "default" | "success" | "error";

export type Typography = {
  [key in TypographyVariant]: TypographyStylesNonColor;
};

export type TypographyGroup = {
  [key in Breakpoint]: Typography;
};

export const desktop: Typography = {
  h1: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 64,
    lineHeight: 1.125,
  },
  h2: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 40,
    lineHeight: 1.125,
  },
  h3: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 33,
    lineHeight: 1.121,
  },
  h4: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 20,
    lineHeight: 1.15,
  },
  h5: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 16,
    lineHeight: 1.125,
  },
  body: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.regular,
    fontSize: 20,
    lineHeight: 1.6,
  },
  bodySmall: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.regular,
    fontSize: 16,
    lineHeight: 1.615,
  },
  label: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.semibold,
    fontSize: 13,
    lineHeight: 1.625,
  },
};

export const tablet: Typography = {
  h1: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 52,
    lineHeight: 1.115,
  },
  h2: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 32,
    lineHeight: 1.125,
  },
  h3: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 24,
    lineHeight: 1.125,
  },
  h4: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 16,
    lineHeight: 1.125,
  },
  h5: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 12,
    lineHeight: 1.167,
  },
  body: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.regular,
    fontSize: 18,
    lineHeight: 1.611,
  },
  bodySmall: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.regular,
    fontSize: 15,
    lineHeight: 1.733,
  },
  label: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.semibold,
    fontSize: 12,
    lineHeight: 1.667,
  },
};

export const mobile: Typography = {
  h1: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 40,
    lineHeight: 1.125,
  },
  h2: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 28,
    lineHeight: 1.143,
  },
  h3: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 18,
    lineHeight: 1.111,
  },
  h4: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 14,
    lineHeight: 1.143,
  },
  h5: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: 12,
    lineHeight: 1.167,
  },
  body: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.regular,
    fontSize: 16,
    lineHeight: 1.625,
  },
  bodySmall: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.regular,
    fontSize: 14,
    lineHeight: 1.643,
  },
  label: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.semibold,
    fontSize: 12,
    lineHeight: 1.583,
  },
};

export const typographyGroup: TypographyGroup = {
  desktop: desktop,
  tablet: tablet,
  mobile: mobile,
};
