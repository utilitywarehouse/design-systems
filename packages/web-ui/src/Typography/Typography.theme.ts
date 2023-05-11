import { colorsCommon } from '@utilitywarehouse/colour-system';
import { colors } from '@utilitywarehouse/design-tokens';
import { fonts, fontWeights } from '../tokens';
import { dataAttributes, mediaQueries, pxToRem } from '../utils';

const { legacy, secondary, inverse, success, error } = dataAttributes;

const baseTextStyles = {
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
  color: colorsCommon.brandMidnight,
};

const legacyTextStyles = {
  [`[data-${inverse}=true] &`]: {
    [`&[data-${legacy}=true]`]: {
      color: colorsCommon.brandWhite,
    },
  },
  [`&[data-${legacy}=true][data-${success}=true]`]: {
    color: colors.jewel,
    [`[data-${inverse}=true] &`]: {
      color: colors.apple,
    },
  },
  [`&[data-${legacy}=true][data-${error}=true]`]: {
    color: colors.maroonFlush,
    [`[data-${inverse}=true] &`]: {
      color: colors.rose,
    },
  },
};

const baseHeadingStyles = {
  fontFamily: fonts.primary,
  color: colorsCommon.brandPrimaryPurple,
};

const legacyHeadingStyles = {
  [`&[data-${legacy}=true][data-${secondary}=true]`]: {
    color: colorsCommon.brandMidnight,
  },
  [`[data-${inverse}=true] &`]: {
    [`&[data-${legacy}=true]`]: {
      color: colorsCommon.brandWhite,
    },
  },
};

const body = {
  ...baseTextStyles,
  fontSize: pxToRem(16),
  lineHeight: 1.5,
};
const subtitle = {
  ...baseTextStyles,
  fontSize: pxToRem(18),
  lineHeight: 1.5,
  [mediaQueries.desktop]: {
    fontSize: pxToRem(20),
  },
};
const legalNote = {
  ...baseTextStyles,
  fontSize: pxToRem(14),
  lineHeight: 1.5,
};
const caption = {
  ...baseTextStyles,
  fontSize: pxToRem(12),
  lineHeight: 2,
};
const displayHeading = {
  ...baseHeadingStyles,
  fontSize: pxToRem(42),
  lineHeight: 1,
  [mediaQueries.desktop]: {
    fontSize: pxToRem(64),
  },
};
const h1 = {
  ...baseHeadingStyles,
  fontSize: pxToRem(32),
  lineHeight: 1.2,
  [mediaQueries.desktop]: {
    fontSize: pxToRem(42),
  },
};
const h2 = {
  ...baseHeadingStyles,
  fontSize: pxToRem(28),
  lineHeight: 1.5,
  [mediaQueries.desktop]: {
    fontSize: pxToRem(32),
    lineHeight: 1.2,
  },
};
const h3 = {
  ...baseHeadingStyles,
  fontSize: pxToRem(22),
  lineHeight: 1.5,
  [mediaQueries.desktop]: {
    fontSize: pxToRem(24),
  },
};
const h4 = {
  ...baseHeadingStyles,
  fontSize: pxToRem(18),
  lineHeight: 1.5,
  [mediaQueries.desktop]: {
    fontSize: pxToRem(20),
  },
};

// we do this so that consumers can access this separately to the components.
// ie sx={{ ...theme.typography.body }}
export const baseTypographyTheme = {
  body,
  subtitle,
  legalNote,
  caption,
  displayHeading,
  h1,
  h2,
  h3,
  h4,
};

// and then this is for the components styles.
// We'll be able to unify this in v1, when we no longer support the legacy color styles.
export const typographyThemeOverrides = {
  body: { ...body, ...legacyTextStyles },
  subtitle: { ...subtitle, ...legacyTextStyles },
  legalNote: { ...legalNote, ...legacyTextStyles },
  caption: { ...caption, ...legacyTextStyles },
  displayHeading: { ...displayHeading, ...legacyHeadingStyles },
  h1: { ...h1, ...legacyHeadingStyles },
  h2: { ...h2, ...legacyHeadingStyles },
  h3: { ...h3, ...legacyHeadingStyles },
  h4: { ...h4, ...legacyHeadingStyles },
};
