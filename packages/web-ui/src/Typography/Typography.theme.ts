import { colorsCommon } from '@utilitywarehouse/colour-system';
import { fonts, fontWeights } from '../tokens';
import { mediaQueries, pxToRem } from '../utils';

const baseTextStyles = {
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
  color: colorsCommon.brandMidnight,
};

const baseHeadingStyles = {
  fontFamily: fonts.primary,
  color: colorsCommon.brandPrimaryPurple,
};

// we do this so that consumers can access this separately to the components.
// ie sx={{ ...theme.typography.body }}
export const baseTypographyTheme = {
  body: {
    ...baseTextStyles,
    fontSize: pxToRem(16),
    lineHeight: 1.5,
  },
  subtitle: {
    ...baseTextStyles,
    fontSize: pxToRem(18),
    lineHeight: 1.5,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(20),
    },
  },
  legalNote: {
    ...baseTextStyles,
    fontSize: pxToRem(14),
    lineHeight: 1.5,
  },
  caption: {
    ...baseTextStyles,
    fontSize: pxToRem(12),
    lineHeight: 2,
  },
  displayHeading: {
    ...baseHeadingStyles,
    fontSize: pxToRem(42),
    lineHeight: 1,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(64),
    },
  },
  h1: {
    ...baseHeadingStyles,
    fontSize: pxToRem(32),
    lineHeight: 1.2,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(42),
    },
  },
  h2: {
    ...baseHeadingStyles,
    fontSize: pxToRem(28),
    lineHeight: 1.5,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(32),
      lineHeight: 1.2,
    },
  },
  h3: {
    ...baseHeadingStyles,
    fontSize: pxToRem(22),
    lineHeight: 1.5,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(24),
    },
  },
  h4: {
    ...baseHeadingStyles,
    fontSize: pxToRem(18),
    lineHeight: 1.5,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(20),
    },
  },
};
