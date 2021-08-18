import { CommonTypographyStyles } from "./types";
import { commonHeadingStyles, commonBodyStyles } from "./common";

const desktop: CommonTypographyStyles = {
  displayHeading: {
    ...commonHeadingStyles,
    fontSize: 64,
    lineHeight: 1,
  },
  h1: {
    ...commonHeadingStyles,
    fontSize: 42,
    lineHeight: 1.2,
  },
  h2: {
    ...commonHeadingStyles,
    fontSize: 32,
    lineHeight: 1.2,
  },
  h3: {
    ...commonHeadingStyles,
    fontSize: 24,
    lineHeight: 1.5,
  },
  h4: {
    ...commonHeadingStyles,
    fontSize: 20,
    lineHeight: 1.5,
  },
  subtitle: {
    ...commonBodyStyles,
    fontSize: 20,
    lineHeight: 1.5,
  },
  body: {
    ...commonBodyStyles,
    fontSize: 16,
    lineHeight: 1.5,
  },
  legalNote: {
    ...commonBodyStyles,
    fontSize: 14,
    lineHeight: 1.5,
  },
  caption: {
    ...commonBodyStyles,
    fontSize: 12,
    lineHeight: 2,
  },
};

export default desktop;
