import { fontWeights } from "@utilitywarehouse/customer-ui-design-tokens";
import { CommonTypographyStyles } from "./types";
import {
  commonHeadingStyles,
  commonBodyStyles,
  commonHeadlineStyles,
  commonSubheadingStyles,
  commonFootnoteStyles,
  commonCaptionStyles,
} from "./common";

const tablet: CommonTypographyStyles = {
  h1: {
    ...commonHeadingStyles,
    fontSize: 52,
    lineHeight: 1.115,
  },
  h2: {
    ...commonHeadingStyles,
    fontSize: 32,
    lineHeight: 1.125,
  },
  h3: {
    ...commonHeadingStyles,
    fontSize: 24,
    lineHeight: 1.125,
  },
  h4: {
    ...commonHeadingStyles,
    fontSize: 16,
    lineHeight: 1.125,
  },
  h5: {
    ...commonHeadingStyles,
    fontSize: 12,
    lineHeight: 1.167,
  },
  body: {
    ...commonBodyStyles,
    fontSize: 18,
    lineHeight: 1.611,
  },
  bodySmall: {
    ...commonBodyStyles,
    fontSize: 15,
    lineHeight: 1.733,
  },
  label: {
    ...commonBodyStyles,
    fontWeight: fontWeights.secondary.semibold,
    fontSize: 12,
    lineHeight: 1.667,
  },
  headline: {
    ...commonHeadlineStyles,
  },
  subheading: {
    ...commonSubheadingStyles,
  },
  footnote: {
    ...commonFootnoteStyles,
  },
  caption: {
    ...commonCaptionStyles,
  },
};

export default tablet;
