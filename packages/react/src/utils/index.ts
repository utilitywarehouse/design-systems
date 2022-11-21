import { type BackgroundColor, inverseBackgroundColors } from '../types';

export const globalClassPrefix = 'uw-web-ui';

export const px = (value: string | number): string => `${value}px`;

export const isInverseBackgroundColor = (backgroundColor: BackgroundColor): boolean => {
  return (inverseBackgroundColors as ReadonlyArray<string>).includes(backgroundColor);
};

export const isHeadingVariant = (variant: string): boolean => {
  const headingVariants = ['displayHeading', 'h1', 'h2', 'h3', 'h4'];
  return headingVariants.includes(variant);
};

export const dataAttributes = {
  variant: 'variant',
  size: 'size',
  inverse: 'on-inverse-background',
  disableCapitalizeFirstLetter: 'disable-capitalize-first-letter',
  multiline: 'multiline',
};
