import { Theme, BackdropLevel, ColorScheme } from "./types";
import { getButtonStyles } from "./button";
import { getTypographyStyles } from "./typography";
import { getBackdropStyles } from "./backdrop";
import spacing from "./spacing";

export * from "./typography";

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
  };
};
