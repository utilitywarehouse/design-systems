import { fontWeights } from "@utilitywarehouse/customer-ui-design-tokens";
import { CommonTypographyStyles } from "./types";
import {
  commonHeadingStyles,
  commonBodyStyles,
  commonHeadlineStyles,
  commonSubheadingStyles,
  commonFootnoteStyles,
  commonCaptionStyles,
  commonInteractiveStyles,
} from "./common";

const desktop: CommonTypographyStyles = {
  h1: {
    ...commonHeadingStyles,
    fontSize: 64,
    lineHeight: 1.125,
  },
  h2: {
    ...commonHeadingStyles,
    fontSize: 40,
    lineHeight: 1.125,
  },
  h3: {
    ...commonHeadingStyles,
    fontSize: 33,
    lineHeight: 1.121,
  },
  h4: {
    ...commonHeadingStyles,
    fontSize: 20,
    lineHeight: 1.15,
  },
  h5: {
    ...commonHeadingStyles,
    fontSize: 16,
    lineHeight: 1.125,
  },
  body: {
    ...commonBodyStyles,
    fontSize: 20,
    lineHeight: 1.6,
  },
  bodySmall: {
    ...commonBodyStyles,
    fontSize: 16,
    lineHeight: 1.615,
  },
  label: {
    ...commonBodyStyles,
    fontWeight: fontWeights.secondary.semibold,
    fontSize: 13,
    lineHeight: 1.625,
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
  },
};

export default desktop;
