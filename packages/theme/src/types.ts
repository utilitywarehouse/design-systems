import { BackdropStyles } from "./backdrop";
import { ButtonStyles } from "./button";
import { CardStyles } from "./card";
import { GridConfiguration } from "./grid";
import { InteractiveCardStyles } from "./interactiveCard";
import { LinkStyles } from "./link";
import { MenuStyles } from "./menu";
import { MenuItemStyles } from "./menuItem";
import { TypographyStyles } from "./typography";

export type Breakpoint = "desktop" | "tablet" | "mobile";

export type Breakpoints = { [key in Breakpoint]: number };

export type BackdropLevel =
  | "level0"
  | "level1"
  | "level2"
  | "level3"
  | "level4";

export type ColorScheme = "light" | "dark";

export type Spacing = (multiplier: number) => number;

export interface Palette {
  common: {
    black: string;
    white: string;
  };
  brand: {
    primary: string;
    action: string;
    line: string;
  };
  messaging: {
    alert: string;
    warning: string;
    info: string;
    success: string;
  };
  input: {
    error: string;
    success: string;
    focus: string;
  };
  services: {
    gas: string;
    electricity: string;
    insurance: string;
    mobile: string;
    landline: string;
  };
}

export interface Theme {
  components: {
    backdrop: BackdropStyles;
    button: ButtonStyles;
    card: CardStyles;
    grid: GridConfiguration;
    interactiveCard: InteractiveCardStyles;
    link: LinkStyles;
    menu: MenuStyles;
    menuItem: MenuItemStyles;
    typography: TypographyStyles;
  };
  spacing: Spacing;
  colorScheme: ColorScheme;
  backdropLevel: BackdropLevel;
  breakpoints: Breakpoints;
  palette: Palette;
}
