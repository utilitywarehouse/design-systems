import { colors } from '@utilitywarehouse/design-tokens';
import { dataAttributes } from '../utils';

const { legacy, secondary, inverse, success, error } = dataAttributes;
export const bodyStyles = {
  [`&[data-${legacy}=true]`]: {
    color: colors.midnight,
  },
  [`[data-${inverse}=true] &`]: {
    [`&[data-${legacy}=true]`]: {
      color: colors.white,
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
const headingStyles = {
  [`&[data-${legacy}=true]`]: {
    color: colors.purple,
  },
  [`&[data-${legacy}=true][data-${secondary}=true]`]: {
    color: colors.midnight,
  },
  [`[data-${inverse}=true] &`]: {
    [`&[data-${legacy}=true]`]: {
      color: colors.white,
    },
  },
};

export const typographyThemeOverrides = {
  body: bodyStyles,
  subtitle: bodyStyles,
  caption: bodyStyles,
  legalNote: bodyStyles,
  displayHeading: headingStyles,
  h1: headingStyles,
  h2: headingStyles,
  h3: headingStyles,
  h4: headingStyles,
};
