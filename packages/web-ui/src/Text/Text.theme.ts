import { colors, fonts, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import { dataAttributes, mediaQueries, pxToRem } from '../utils';

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

export const textThemeOverrides = {
  body: {
    ...bodyStyles,
    fontSize: pxToRem(16),
    lineHeight: 1.5,
  },
  subtitle: {
    ...bodyStyles,
    fontSize: pxToRem(18),
    lineHeight: 1.5,
    [mediaQueries.desktop]: {
      fontSize: pxToRem(20),
    },
  },
  legalNote: {
    ...bodyStyles,
    fontSize: pxToRem(14),
    lineHeight: 1.5,
  },
  caption: {
    ...bodyStyles,
    fontSize: pxToRem(12),
    lineHeight: 2,
  },
};
