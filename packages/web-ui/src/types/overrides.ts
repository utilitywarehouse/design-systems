import { Palette as MuiPalette } from '@mui/material/styles/createPalette';
import { TypographyOptions, TypographyUtils } from '@mui/material/styles/createTypography';
import { Fonts, FontWeights } from '../tokens';
import * as React from 'react';
import { customPalette } from '../theme';

// TODO: v1 see https://linear.app/utilitywarehouse/issue/UWDS-1082/refactor-types
interface CustomTypography extends TypographyUtils, Omit<TypographyOptions, 'fontFamily'> {
  fontFamily: Fonts;
  fontWeights: FontWeights;
}
type CustomPalette = typeof customPalette;
interface Palette extends Omit<MuiPalette, 'text'>, CustomPalette {}

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

  interface TypographyVariants {
    displayHeading: React.CSSProperties;
    h1: React.CSSProperties;
    subtitle: React.CSSProperties;
    body: React.CSSProperties;
    legalNote: React.CSSProperties;
    caption: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    displayHeading?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    body?: React.CSSProperties;
    legalNote?: React.CSSProperties;
    caption?: React.CSSProperties;
  }

  interface Theme {
    typography: CustomTypography;
    palette: Palette;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayHeading: true;
    subtitle: true;
    body: true;
    legalNote: true;
    caption: true;
    h5: false;
    h6: false;
    body1: false;
    body2: false;
    button: false;
    overline: false;
    subtitle1: false;
    subtitle2: false;
  }
}
