import { createTheme, Theme as MuiTheme } from '@mui/material/styles';
import { baseTypographyTheme } from './Typography.theme';
import { htmlFontSize, pxToRem, spacing } from '../utils';
import { breakpoints, fonts, fontWeights } from '../tokens';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

const theme: MuiTheme = createTheme({
  breakpoints: { values: breakpoints },
  spacing,
});

theme.typography = {
  pxToRem,
  fontSize: htmlFontSize,
  htmlFontSize,
  fontFamily: fonts,
  fontWeights,
  ...baseTypographyTheme,
};

export const customPalette = {
  colorsCommon,
  colors,
  text: {
    primary: colorsCommon.brandMidnight, // TODO: remove when refactor Button
  },
};

theme.palette = {
  // TODO: the mui/material Button component relies on certain palette properties, remove when refactor Button.
  ...theme.palette,
  ...customPalette,
};

export { theme };
export type Theme = typeof theme;
