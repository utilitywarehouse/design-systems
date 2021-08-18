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
