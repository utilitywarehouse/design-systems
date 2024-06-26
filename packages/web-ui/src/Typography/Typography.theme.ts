import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { fonts, fontWeights } from '../tokens';
import { mediaQueries, pxToRem } from '../utils';
import { typographyClasses } from './Typography';

const textStyles = {
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
  [`&.${typographyClasses.primary}`]: {
    color: colorsCommon.brandMidnight,
  },
  [`&.${typographyClasses.semibold}`]: {
    fontWeight: fontWeights.secondary.semibold,
  },
  [`&.${typographyClasses.inverse}`]: {
    color: colorsCommon.brandWhite,
  },
  [`&.${typographyClasses.success}`]: {
    color: colors.green700,
  },
  [`&.${typographyClasses.success}.${typographyClasses.inverse}`]: {
    color: colors.apple400,
  },
  [`&.${typographyClasses.error}`]: {
    color: colors.red600,
  },
  [`&.${typographyClasses.error}.${typographyClasses.inverse}`]: {
    color: colors.rose400,
  },
};

const headingStyles = {
  fontFamily: fonts.primary,
  [`&.${typographyClasses.primary}`]: {
    color: colorsCommon.brandPrimaryPurple,
  },
  [`&.${typographyClasses.secondary}`]: {
    color: colorsCommon.brandMidnight,
  },
  [`&.${typographyClasses.inverse}`]: {
    color: colorsCommon.brandWhite,
  },
};

// we do this so that consumers can access this separately to the components.
// ie sx={{ ...theme.typography.body }}
export const baseTypographyTheme = {
  body: {
    ...textStyles,
    fontSize: pxToRem(16),
    lineHeight: 1.5,
  },
  subtitle: {
    ...textStyles,
    fontSize: pxToRem(18),
    lineHeight: 1.5,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(20),
    },
  },
  legalNote: {
    ...textStyles,
    fontSize: pxToRem(14),
    lineHeight: 1.5,
  },
  caption: {
    ...textStyles,
    fontSize: pxToRem(12),
    lineHeight: 2,
  },
  displayHeading: {
    ...headingStyles,
    fontSize: pxToRem(42),
    lineHeight: 1,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(64),
    },
  },
  h1: {
    ...headingStyles,
    fontSize: pxToRem(32),
    lineHeight: 1.2,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(42),
    },
  },
  h2: {
    ...headingStyles,
    fontSize: pxToRem(28),
    lineHeight: 1.5,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(32),
      lineHeight: 1.2,
    },
  },
  h3: {
    ...headingStyles,
    fontSize: pxToRem(22),
    lineHeight: 1.5,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(24),
    },
  },
  h4: {
    ...headingStyles,
    fontSize: pxToRem(18),
    lineHeight: 1.5,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(20),
    },
  },
};

// and then this is for the components styles.
// We'll be able to unify this in v1, when we no longer support the Typography component
export const legacyTypographyThemeOverrides = {
  body: { ...textStyles },
  subtitle: { ...textStyles },
  legalNote: { ...textStyles },
  caption: { ...textStyles },
  displayHeading: { ...headingStyles },
  h1: { ...headingStyles },
  h2: { ...headingStyles },
  h3: { ...headingStyles },
  h4: { ...headingStyles },
};
