import { Breakpoint } from "../types";

export interface CardStylesNonColor {
  padding: string;
  borderRadius: string;
}

export interface CardStylesColor {
  backgroundColor: string;
}

export type CardPalette = CardStylesColor;

export type CardStyles = {
  [key in Breakpoint]: CardStylesNonColor & CardStylesColor;
};
