import { colors, fonts, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import { Theme } from '@mui/material/styles';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import { dataAttributes } from '../utils';

const { secondary, inverse, bold, success, error } = dataAttributes;
export const headingStyles = {
  fontFamily: fonts.primary,
  color: colors.purple,
  [`&[data-${secondary}=true]`]: {
    color: colors.midnight,
  },
  [`[data-${inverse}=true] &`]: {
    color: colors.white,
  },
};
export const bodyStyles = {
  fontFamily: fonts.secondary,
  color: colors.midnight,
  fontWeight: fontWeights.secondary.regular,
  [`&[data-${bold}=true]`]: {
    fontWeight: fontWeights.secondary.semibold,
  },
  [`[data-${inverse}=true] &`]: {
    color: colors.white,
  },
  [`&[data-${success}=true]`]: {
    color: colors.jewel,
    [`[data-${inverse}=true] &`]: {
      color: colors.apple,
    },
  },
  [`&[data-${error}=true]`]: {
    color: colors.maroonFlush,
    [`[data-${inverse}=true] &`]: {
      color: colors.rose,
    },
  },
};

export const typographyThemeOverrides = (
  theme: Theme
): {
  displayHeading: TypographyStyleOptions;
  h1: TypographyStyleOptions;
  h2: TypographyStyleOptions;
  h3: TypographyStyleOptions;
  h4: TypographyStyleOptions;
  subtitle: TypographyStyleOptions;
  body: TypographyStyleOptions;
  legalNote: TypographyStyleOptions;
  caption: TypographyStyleOptions;
} => {
  return {
    displayHeading: {
      ...headingStyles,
      fontSize: theme.typography.pxToRem(42),
      lineHeight: 1,
      [theme.breakpoints.up('desktop')]: {
        fontSize: theme.typography.pxToRem(64),
      },
    },
    h1: {
      ...headingStyles,
      fontSize: theme.typography.pxToRem(32),
      lineHeight: 1.2,
      [theme.breakpoints.up('desktop')]: {
        fontSize: theme.typography.pxToRem(42),
      },
    },
    h2: {
      ...headingStyles,
      fontSize: theme.typography.pxToRem(28),
      lineHeight: 1.5,
      [theme.breakpoints.up('desktop')]: {
        fontSize: theme.typography.pxToRem(32),
        lineHeight: 1.2,
      },
    },
    h3: {
      ...headingStyles,
      fontSize: theme.typography.pxToRem(22),
      lineHeight: 1.5,
      [theme.breakpoints.up('desktop')]: {
        fontSize: theme.typography.pxToRem(24),
      },
    },
    h4: {
      ...headingStyles,
      fontSize: theme.typography.pxToRem(18),
      lineHeight: 1.5,
      [theme.breakpoints.up('desktop')]: {
        fontSize: theme.typography.pxToRem(20),
      },
    },
    body: {
      ...bodyStyles,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 1.5,
    },
    subtitle: {
      ...bodyStyles,
      fontSize: theme.typography.pxToRem(18),
      lineHeight: 1.5,
      [theme.breakpoints.up('desktop')]: {
        fontSize: theme.typography.pxToRem(20),
      },
    },
    legalNote: {
      ...bodyStyles,
      fontSize: theme.typography.pxToRem(14),
      lineHeight: 1.5,
    },
    caption: {
      ...bodyStyles,
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 2,
    },
  };
};
