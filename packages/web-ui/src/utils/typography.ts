// 16px is the default font-size used by browsers.
export const htmlFontSize = 16; // px
/* converts a pixel font size to rems */
export const pxToRem = (size: number) => `${size / htmlFontSize}rem`;
