import { Theme, BackdropLevel, ColorScheme } from "./types";
import { getButtonStyles } from "./button";
import { getTypographyStyles } from "./typography";
import { getBackdropStyles } from "./backdrop";
import spacing from "./spacing";
import { breakpoints } from "./breakpoint";
import { getPalette } from "./palette";

export * from "./types";
export * from "./button/types";
export * from "./typography/types";

export const getTheme = (
  colorScheme: ColorScheme,
  backdropLevel: BackdropLevel
): Theme => {
  return {
    components: {
      backdrop: getBackdropStyles(colorScheme, backdropLevel),
      button: getButtonStyles(colorScheme, backdropLevel),
      typography: getTypographyStyles(colorScheme, backdropLevel),
    },
    spacing,
    colorScheme,
    backdropLevel,
    breakpoints,
    palette: getPalette(colorScheme, backdropLevel),
  };
};
