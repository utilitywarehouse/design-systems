import { Theme, BackdropLevel, ColorScheme } from "./types";
import { getButtonStyles } from "./button";
import { getLinkStyles } from "./link";
import { getTypographyStyles } from "./typography";
import { getBackdropStyles } from "./backdrop";
import gridConfiguration from "./grid";
import spacing from "./spacing";
import { breakpoints } from "./breakpoint";
import { getPalette } from "./palette";

export * from "./types";
export * from "./button/types";
export * from "./grid/types";
export * from "./link/types";
export * from "./typography/types";

export { default as gridConfiguration } from "./grid";

export const getTheme = (
  colorScheme: ColorScheme,
  backdropLevel: BackdropLevel
): Theme => {
  return {
    components: {
      backdrop: getBackdropStyles(colorScheme, backdropLevel),
      button: getButtonStyles(colorScheme, backdropLevel),
      grid: gridConfiguration,
      link: getLinkStyles(colorScheme, backdropLevel),
      typography: getTypographyStyles(colorScheme, backdropLevel),
    },
    spacing,
    colorScheme,
    backdropLevel,
    breakpoints,
    palette: getPalette(colorScheme, backdropLevel),
  };
};
