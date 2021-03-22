import { BackdropStyles } from "./backdrop";
import { ButtonStyles } from "./button";
import { TypographyStyles } from "./typography";

export type BackdropLevel = "level0" | "level1" | "level2" | "level3";

export type ColorScheme = "light" | "dark";

export type Spacing = (multiplier: number) => number;

export interface Theme {
  components: {
    backdrop: BackdropStyles;
    button: ButtonStyles;
    typography: TypographyStyles;
  };
  spacing: Spacing;
  colorScheme: ColorScheme;
  backdropLevel: BackdropLevel;
}
