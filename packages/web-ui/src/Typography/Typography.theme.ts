import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { fonts, fontWeights } from '../tokens';
import { dataAttributes, mediaQueries, pxToRem } from '../utils';

const { legacy, primary, secondary, inverse, success, error } = dataAttributes;

const baseTextStyles = {
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
  color: colorsCommon.brandMidnight,
};

const legacyTextStyles = {
  [`&[${legacy}="true"][${primary}="true"]`]: {
    color: colorsCommon.brandMidnight,
  },
  [`[${inverse}=true] &`]: {
    [`&[${legacy}=true]`]: {
      color: colorsCommon.brandWhite,
    },
  },
  [`&[${legacy}=true][${success}=true]`]: {
    color: colors.green700,
    [`[${inverse}=true] &`]: {
      color: colors.apple400,
    },
  },
  [`&[${legacy}=true][${error}=true]`]: {
    color: colors.red600,
    [`[${inverse}=true] &`]: {
      color: colors.rose400,
    },
  },
};

const baseHeadingStyles = {
  fontFamily: fonts.primary,
  color: colorsCommon.brandPrimaryPurple,
};

const legacyHeadingStyles = {
  [`&[${legacy}=true][${primary}=true]`]: {
    color: colorsCommon.brandPrimaryPurple,
  },
  [`&[${legacy}=true][${secondary}=true]`]: {
    color: colorsCommon.brandMidnight,
  },
  [`&[${legacy}=true][${error}=true]`]: {
    color: colorsCommon.brandPrimaryPurple,
  },
  [`[${inverse}=true] &`]: {
    [`&[${legacy}=true]`]: {
      color: colorsCommon.brandWhite,
    },
  },
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

// and then this is for the components styles.
// We'll be able to unify this in v1, when we no longer support the legacy color styles.
export const legacyTypographyThemeOverrides = {
  body: { ...legacyTextStyles },
  subtitle: { ...legacyTextStyles },
  legalNote: { ...legacyTextStyles },
  caption: { ...legacyTextStyles },
  displayHeading: { ...legacyHeadingStyles },
  h1: { ...legacyHeadingStyles },
  h2: { ...legacyHeadingStyles },
  h3: { ...legacyHeadingStyles },
  h4: { ...legacyHeadingStyles },
};
