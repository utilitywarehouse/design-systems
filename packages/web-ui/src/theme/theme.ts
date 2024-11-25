import { Theme as MuiTheme, createTheme } from '@mui/material/styles';

import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

import { breakpoints, fontWeights, fonts } from '../tokens';
import { htmlFontSize, pxToRem, spacing } from '../utils';

const theme: MuiTheme = createTheme({
  breakpoints: { values: breakpoints },
  spacing,
});

theme.typography = {
  ...theme.typography,
  pxToRem,
  fontSize: htmlFontSize,
  htmlFontSize,
  fontFamily: fonts,
  fontWeights,
};

export const customPalette = {
  colorsCommon,
  colors,
};

theme.palette = {
  ...theme.palette,
  ...customPalette,
};

export { theme };
export type Theme = typeof theme;
