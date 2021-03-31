import { Breakpoint } from "../types";

export interface TypographyStylesNonColor {
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: number;
}

export interface TypographyStylesColor {
  color: string;
}

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "bodySmall"
  | "label"
  | "headline"
  | "subheading"
  | "footnote"
  | "caption"
  | "interactive";

export type TypographyState = "default" | "success" | "error";

export type TypographyPalette = {
  [key in TypographyVariant]: {
    [key in TypographyState]: TypographyStylesColor;
  };
};

export type CommonTypographyStyles = {
  [key in TypographyVariant]: TypographyStylesNonColor;
};

export type CommonTypographyStylesWithBreakpoint = {
  [key in Breakpoint]: CommonTypographyStyles;
};

export type TypographyStyles = {
  [key in Breakpoint]: {
    [key in TypographyVariant]: {
      [key in TypographyState]: TypographyStylesNonColor &
        TypographyStylesColor;
    };
  };
};
