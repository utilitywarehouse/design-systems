import {
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { TypographyStylesNonColor } from "./types";

export const commonHeadingStyles: TypographyStylesNonColor = {
  fontFamily: fonts.primary,
  fontWeight: fontWeights.primary,
} as TypographyStylesNonColor;

export const commonBodyStyles: TypographyStylesNonColor = {
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
} as TypographyStylesNonColor;

export const commonHeadlineStyles: TypographyStylesNonColor = {
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.semibold,
  fontSize: 16,
  lineHeight: 1.5,
} as TypographyStylesNonColor;

export const commonSubheadingStyles: TypographyStylesNonColor = {
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
  fontSize: 15,
  lineHeight: 1.467,
} as TypographyStylesNonColor;

export const commonFootnoteStyles: TypographyStylesNonColor = {
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
  fontSize: 13,
  lineHeight: 1.538,
} as TypographyStylesNonColor;

export const commonCaptionStyles: TypographyStylesNonColor = {
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
  fontSize: 12,
  lineHeight: 1.5,
} as TypographyStylesNonColor;
