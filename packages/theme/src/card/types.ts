import { Breakpoint } from "../types";

export interface CardStylesNonColor {
  padding: string;
  borderRadius: string;
  borderWidth: string;
  borderStyle: string;
}

export interface CardStylesColor {
  backgroundColor: string;
  borderColor: string;
}

export type CardVariant = "transparent" | "opaque";

export type CardPalette = {
  [key in CardVariant]: CardStylesColor;
};

export type CardStyles = {
  [key in CardVariant]: {
    [key in Breakpoint]: CardStylesNonColor & CardStylesColor;
  };
};
