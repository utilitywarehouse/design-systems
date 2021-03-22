import {
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { CommonTypographyStyles } from "./types";

const desktop: CommonTypographyStyles = {
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

export default desktop;
