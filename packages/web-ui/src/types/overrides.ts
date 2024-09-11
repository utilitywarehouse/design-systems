import { customPalette } from '../theme';
import { FontWeights, Fonts } from '../tokens';
import { Palette as MuiPalette } from '@mui/material/styles/createPalette';
import { TypographyOptions, TypographyUtils } from '@mui/material/styles/createTypography';

interface CustomTypography
  extends TypographyUtils,
    Omit<
      TypographyOptions,
      'fontFamily' | 'fontWeightBold' | 'fontWeightLight' | 'fontWeightMedium' | 'fontWeightRegular'
    > {
  fontFamily: Fonts;
  fontWeights: FontWeights;
}
type CustomPalette = typeof customPalette;
interface Palette extends MuiPalette, CustomPalette {}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
    wide: true;
  }

  interface Theme {
    typography: CustomTypography;
    palette: Palette;
  }
}
