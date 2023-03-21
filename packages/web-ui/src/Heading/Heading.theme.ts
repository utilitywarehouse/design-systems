import { colors, fonts } from '@utilitywarehouse/customer-ui-design-tokens';
import { dataAttributes, mediaQueries, pxToRem } from '../utils';

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

export const headingThemeOverrides = {
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
