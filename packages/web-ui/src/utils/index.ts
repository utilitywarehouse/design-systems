import { breakpoints, spacingBase } from '@utilitywarehouse/design-tokens';
import { type BackgroundColor, inverseBackgroundColors } from '../types';

export const px = (value: string | number): string => `${value}px`;

// 16px is the default font-size used by browsers.
export const htmlFontSize = 16; // px
export const pxToRem = (size: number) => `${size / htmlFontSize}rem`;

export const spacing = (multiplier: number) => multiplier * spacingBase;

const unit = 'px';
const mq = (breakpoint: number) => `@media (min-width:${breakpoint}${unit})`;
export const mediaQueries = {
  mobile: mq(breakpoints.mobile),
  tablet: mq(breakpoints.tablet),
  desktop: mq(breakpoints.desktop),
};

export const isInverseBackgroundColor = (backgroundColor: BackgroundColor): boolean => {
  return (inverseBackgroundColors as ReadonlyArray<string>).includes(backgroundColor);
};

export const isHeadingVariant = (variant: string): boolean => {
  const headingVariants = ['displayHeading', 'h1', 'h2', 'h3', 'h4'];
  return headingVariants.includes(variant);
};

export const dataAttributes = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  error: 'error',
  bold: 'text-bold',
  variant: 'variant',
  size: 'size',
  inverse: 'inverse-background',
  disableCapitalizeFirstLetter: 'disable-capitalize-first-letter',
  multiline: 'multiline',
  heading: 'heading',
};
