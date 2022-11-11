import { colors, fonts, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import { Theme } from '@mui/material/styles';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import { typographyClasses } from './Typography';

export const getTypographyThemeOverrides = (
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
  const headingStyles = {
    fontFamily: fonts.primary,
    color: colors.purple,
    [`&.${typographyClasses.secondary}`]: {
      color: colors.midnight,
    },
    [`&.${typographyClasses.inverse}`]: {
      color: colors.white,
    },
  };
  const bodyStyles = {
    fontFamily: fonts.secondary,
    color: colors.midnight,
    fontWeight: fontWeights.secondary.regular,
    [`&.${typographyClasses.bold}`]: {
      fontWeight: fontWeights.secondary.semibold,
    },
    [`&.${typographyClasses.inverse}`]: {
      color: colors.white,
    },
    [`&.${typographyClasses.success}`]: {
      color: colors.jewel,
    },
    [`&.${typographyClasses.success}.${typographyClasses.inverse}`]: {
      color: colors.apple,
    },
    [`&.${typographyClasses.error}`]: {
      color: colors.maroonFlush,
    },
    [`&.${typographyClasses.error}.${typographyClasses.inverse}`]: {
      color: colors.rose,
    },
  };

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
