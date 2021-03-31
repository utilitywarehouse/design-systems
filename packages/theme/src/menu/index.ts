import { ColorScheme, BackdropLevel } from "../types";
import { getMenuPalette } from "./palette";
import desktopStyles from "./desktop";
import tabletStyles from "./tablet";
import mobileStyles from "./mobile";
import { MenuStyles } from "./types";

export { MenuStyles } from "./types";

export const getMenuStyles = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): MenuStyles => {
  const menuPalette = getMenuPalette(colorScheme, backdrop);
  return {
    desktop: {
      ...desktopStyles,
      ...menuPalette,
    },
    tablet: {
      ...tabletStyles,
      ...menuPalette,
    },
    mobile: {
      ...mobileStyles,
      ...menuPalette,
    },
  };
};
