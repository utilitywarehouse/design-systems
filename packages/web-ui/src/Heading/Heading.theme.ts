import { colors, fonts } from '@utilitywarehouse/customer-ui-design-tokens';
import { Theme } from '@mui/material/styles';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import { dataAttributes } from '../utils';

export const headingThemeOverrides = (
  theme: Theme
): {
  displayHeading: TypographyStyleOptions;
  h1: TypographyStyleOptions;
  h2: TypographyStyleOptions;
  h3: TypographyStyleOptions;
  h4: TypographyStyleOptions;
} => {
  const { secondary, inverse } = dataAttributes;
  const headingStyles = {
    fontFamily: fonts.primary,
    color: colors.purple,
    [`&[data-${secondary}=true]`]: {
      color: colors.midnight,
    },
    [`[data-${inverse}=true] &`]: {
      color: colors.white,
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
  };
};
