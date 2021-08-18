import { CommonTypographyStyles } from "./types";
import { commonHeadingStyles, commonBodyStyles } from "./common";

const tablet: CommonTypographyStyles = {
  displayHeading: {
    ...commonHeadingStyles,
    fontSize: 42,
    lineHeight: 1,
  },
  h1: {
    ...commonHeadingStyles,
    fontSize: 32,
    lineHeight: 1.2,
  },
  h2: {
    ...commonHeadingStyles,
    fontSize: 28,
    lineHeight: 1.5,
  },
  h3: {
    ...commonHeadingStyles,
    fontSize: 22,
    lineHeight: 1.5,
  },
  h4: {
    ...commonHeadingStyles,
    fontSize: 18,
    lineHeight: 1.5,
  },
  subtitle: {
    ...commonBodyStyles,
    fontSize: 18,
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

export default tablet;
