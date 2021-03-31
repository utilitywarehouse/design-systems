import { Breakpoint } from "../types";

export interface MenuItemStylesNonColor {
  padding: string;
}

export interface MenuItemStylesColor {
  backgroundColor: string;
}

export type MenuItemPalette = MenuItemStylesColor;

export type CommonMenuItemStylesCSS = MenuItemStylesNonColor;

export type CommonMenuItemStyles = {
  [key in Breakpoint]: CommonMenuItemStylesCSS;
};

export type MenuItemStyles = {
  [key in Breakpoint]: MenuItemStylesNonColor & MenuItemStylesColor;
};
