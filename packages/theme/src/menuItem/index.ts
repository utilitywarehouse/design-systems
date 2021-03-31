import { ColorScheme, BackdropLevel } from "../types";
import { getMenuItemPalette } from "./palette";
import desktopStyles from "./desktop";
import tabletStyles from "./tablet";
import mobileStyles from "./mobile";
import { MenuItemStyles } from "./types";

export { MenuItemStyles } from "./types";

export const getMenuItemStyles = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): MenuItemStyles => {
  const menuItemPalette = getMenuItemPalette(colorScheme, backdrop);
  return {
    desktop: {
      ...desktopStyles,
      ...menuItemPalette,
    },
    tablet: {
      ...tabletStyles,
      ...menuItemPalette,
    },
    mobile: {
      ...mobileStyles,
      ...menuItemPalette,
    },
  };
};
