
// 16px is the default font-size used by browsers.
export const htmlFontSize = 16; // px
export const pxToRem = (size: number) => `${size / htmlFontSize}rem`;

export const isHeadingVariant = (variant: string): boolean => {
  const headingVariants = ['displayHeading', 'h1', 'h2', 'h3', 'h4'];
  return headingVariants.includes(variant);
};
