import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { MenuPalette } from "./types";
import { ColorScheme, BackdropLevel } from "../types";

const lightModeLevel0 = {
  borderColor: colors.cyan,
};

const lightModeLevel1 = lightModeLevel0;
const lightModeLevel2 = lightModeLevel1;
const lightModeLevel3 = lightModeLevel2;
const lightModeLevel4 = lightModeLevel3;

const palettes = {
  light: {
    level0: lightModeLevel0,
    level1: lightModeLevel1,
    level2: lightModeLevel2,
    level3: lightModeLevel3,
    level4: lightModeLevel4,
  },
  dark: {
    level0: lightModeLevel0,
    level1: lightModeLevel1,
    level2: lightModeLevel2,
    level3: lightModeLevel3,
    level4: lightModeLevel4,
  },
};

export const getMenuPalette = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): MenuPalette => {
  return palettes[colorScheme][backdrop];
};
