import { Theme, BackdropLevel, ColorScheme } from "./types";
import { getButtonStyles } from "./button";
import { getLinkStyles } from "./link";
import { getTypographyStyles } from "./typography";
import { getBackdropStyles } from "./backdrop";
import gridConfiguration from "./grid";
import { getInteractiveCardStyles } from "./interactiveCard";
import { getMenuStyles } from "./menu";
import { getMenuItemStyles } from "./menuItem";
import spacing from "./spacing";
import { breakpoints } from "./breakpoint";
import { getPalette } from "./palette";
import { getTextFieldStyles } from "./textField";

export * from "./types";
export * from "./backdrop/types";
export * from "./button/types";
export * from "./grid/types";
export * from "./interactiveCard/types";
export * from "./link/types";
export * from "./menu/types";
export * from "./menuItem/types";
export * from "./textField/types";
export * from "./typography/types";

export { default as gridConfiguration } from "./grid";

export const getTheme = (
  colorScheme: ColorScheme,
  backdropLevel: BackdropLevel
): Theme => {
  const palette = getPalette(colorScheme, backdropLevel);
  return {
    components: {
      backdrop: getBackdropStyles(colorScheme, backdropLevel),
      button: getButtonStyles(colorScheme, backdropLevel),
      interactiveCard: getInteractiveCardStyles(colorScheme, backdropLevel),
      grid: gridConfiguration,
      link: getLinkStyles(colorScheme, backdropLevel),
      menu: getMenuStyles(colorScheme, backdropLevel),
      menuItem: getMenuItemStyles(colorScheme, backdropLevel),
      textField: getTextFieldStyles(colorScheme, backdropLevel),
      typography: getTypographyStyles(colorScheme, backdropLevel),
    },
    spacing,
    colorScheme,
    backdropLevel,
    breakpoints,
    palette,
  };
};
