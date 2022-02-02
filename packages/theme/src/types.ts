import { BackdropStyles } from "./backdrop";
import { ButtonStyles } from "./button";
import { GridConfiguration } from "./grid";
import { InteractiveCardStyles } from "./interactiveCard";
import { LinkStyles } from "./link";
import { MenuStyles } from "./menu";
import { MenuItemStyles } from "./menuItem";
import { TextFieldStyles } from "./textField/types";
import { TypographyStyles } from "./typography";

export type Breakpoint = "desktop" | "tablet" | "mobile";

export type Breakpoints = { [key in Breakpoint]: number };

export type BackdropLevel =
  | "level0"
  | "level1"
  | "level2"
  | "level3"
  | "level4"
  | "level5";

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
  backdrops: {
    light: {
      level0: string;
      level1: string;
      level2: string;
      level3: string;
      level4: string;
      level5: string;
    };
    dark: {
      level0: string;
      level1: string;
      level2: string;
      level3: string;
      level4: string;
      level5: string;
    };
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
    grid: GridConfiguration;
    interactiveCard: InteractiveCardStyles;
    link: LinkStyles;
    menu: MenuStyles;
    menuItem: MenuItemStyles;
    textField: TextFieldStyles;
    typography: TypographyStyles;
  };
  spacing: Spacing;
  colorScheme: ColorScheme;
  backdropLevel: BackdropLevel;
  breakpoints: Breakpoints;
  palette: Palette;
}
