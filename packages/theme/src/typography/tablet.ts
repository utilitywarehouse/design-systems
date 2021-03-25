import {
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { CommonTypographyStyles } from "./types";

const tablet: CommonTypographyStyles = {
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

export default tablet;
