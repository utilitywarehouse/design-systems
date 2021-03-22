import {
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { CommonTypographyStyles } from "./types";

const mobile: CommonTypographyStyles = {
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

export default mobile;
