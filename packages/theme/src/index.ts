import { Theme, BackdropLevel, ColorScheme } from "./types";
import spacing from "./spacing";
import { breakpoints } from "./breakpoint";
import { getPalette } from "./palette";

export * from "./types";

export const getTheme = (
  colorScheme: ColorScheme,
  backdropLevel: BackdropLevel
): Theme => {
  const palette = getPalette(colorScheme, backdropLevel);
  return {
    spacing,
    colorScheme,
    backdropLevel,
    breakpoints,
    palette,
  };
};
