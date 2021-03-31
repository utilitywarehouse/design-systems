import { Breakpoint } from "../types";

export interface MenuStylesNonColor {
  borderRadius: string;
  padding: string;
  borderStyle: string;
  borderWidth: string;
  boxShadow: string;
}

export interface MenuStylesColor {
  borderColor: string;
}

export type MenuPalette = MenuStylesColor;

export type CommonMenuStylesCSS = MenuStylesNonColor;

export type CommonMenuStyles = {
  [key in Breakpoint]: CommonMenuStylesCSS;
};

export type MenuStyles = {
  [key in Breakpoint]: MenuStylesNonColor & MenuStylesColor;
};
