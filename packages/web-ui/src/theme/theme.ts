import { createTheme, Theme as MuiTheme } from '@mui/material/styles';
import { buttonThemeOverrides } from '../Button';
import { textFieldThemeOverrides } from '../TextField';
import { textLinkThemeOverrides } from '../TextLink';
import { legacyTypographyThemeOverrides, baseTypographyTheme } from '../Typography';
import { menuThemeOverrides } from '../Menu';
import { cssBaselineThemeOverrides } from './CssBaseline.theme';
import { htmlFontSize, pxToRem, spacing } from '../utils';
import { breakpoints, fonts, fontWeights } from '../tokens';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

const theme: MuiTheme = createTheme({
  breakpoints: { values: breakpoints },
  spacing,
  components: {
    ...cssBaselineThemeOverrides,
    ...buttonThemeOverrides,
    ...textLinkThemeOverrides,
    ...textFieldThemeOverrides,
    ...menuThemeOverrides,
    MuiTypography: {
      styleOverrides: legacyTypographyThemeOverrides,
    },
  },
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
  // TODO: we have to do this because the mui/material Button component relies on certain palette properties.
  // I'm guessing we can remove this when we refactor to use the unstyled mui/base Button
  ...theme.palette,
  ...customPalette,
};

const DEV =
  typeof window !== 'undefined' &&
  (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
window.theme = theme;
if (DEV) {
  console.log(
    `%c
░█▒█░█░░▒█░░░█░░▒█▒██▀░██▄░░░█▒█░█
░▀▄█░▀▄▀▄▀▒░░▀▄▀▄▀░█▄▄▒█▄█▒░░▀▄█░█

Tip: you can access the documentation \`theme\` object directly in the console.
`,
    `font-family:monospace;color:${colorsCommon.brandPrimaryPurple};font-size:16px;`
  );
}

export { theme };
export type Theme = typeof theme;
