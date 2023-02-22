import { colors, fonts, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import { Theme } from '@mui/material/styles';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import { dataAttributes } from '../utils';

export const textThemeOverrides = (
  theme: Theme
): {
  subtitle: TypographyStyleOptions;
  body: TypographyStyleOptions;
  legalNote: TypographyStyleOptions;
  caption: TypographyStyleOptions;
} => {
  const { inverse, bold, success, error } = dataAttributes;
  const bodyStyles = {
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

  return {
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
