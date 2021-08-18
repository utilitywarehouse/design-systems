import { fontWeights } from "@utilitywarehouse/customer-ui-design-tokens";
import { CommonTypographyStyles } from "./types";
import {
  commonHeadingStyles,
  commonBodyStyles,
  commonSubheadingStyles,
  commonCaptionStyles,
  commonFootnoteStyles,
  commonHeadlineStyles,
  commonInteractiveStyles,
} from "./common";

const mobile: CommonTypographyStyles = {
  h1: {
    ...commonHeadingStyles,
    fontSize: 40,
    lineHeight: 1.125,
  },
  h2: {
    ...commonHeadingStyles,
    fontSize: 28,
    lineHeight: 1.143,
  },
  h3: {
    ...commonHeadingStyles,
    fontSize: 18,
    lineHeight: 1.111,
  },
  h4: {
    ...commonHeadingStyles,
    fontSize: 14,
    lineHeight: 1.143,
  },
  h5: {
    ...commonHeadingStyles,
    fontSize: 12,
    lineHeight: 1.167,
  },
  body: {
    ...commonBodyStyles,
    fontSize: 16,
    lineHeight: 1.625,
  },
  bodySmall: {
    ...commonBodyStyles,
    fontSize: 14,
    lineHeight: 1.643,
  },
  label: {
    ...commonBodyStyles,
    fontWeight: fontWeights.secondary.semibold,
    fontSize: 12,
    lineHeight: 1.583,
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
  interactive: {
    ...commonInteractiveStyles,
    fontSize: 14,
  },
};

export default mobile;
