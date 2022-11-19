import { TypographyOptions, TypographyUtils } from '@mui/material/styles/createTypography';
import { Fonts, FontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import * as React from 'react';
import { customPalette } from '../theme';

interface CustomTypogaphy
  extends TypographyUtils,
    Omit<
      TypographyOptions,
      'fontFamily' | 'fontWeightBold' | 'fontWeightLight' | 'fontWeightMedium' | 'fontWeightRegular'
    > {
  fontFamily: Fonts;
  fontWeights: FontWeights;
}

type CustomPalette = typeof customPalette;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    tablet: true;
    mobile: true;
    desktop: true;
  }

  interface TypographyVariants {
    displayHeading: React.CSSProperties;
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
    typography: CustomTypogaphy;
    palette: CustomPalette;
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

export {};
