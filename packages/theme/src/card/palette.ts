import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { CardPalette } from "./types";
import { ColorScheme, BackdropLevel } from "../types";

const lightModeLevel0 = {
  backgroundColor: colors.midnight,
};

const lightModeLevel1 = {
  backgroundColor: colors.purple,
};

const lightModeLevel2 = {
  backgroundColor: colors.midTint,
};

const lightModeLevel3 = {
  backgroundColor: colors.lightTint,
};

const lightModeLevel4 = {
  backgroundColor: colors.white,
};

const darkModeLevel0 = {
  backgroundColor: colors.codGray,
};

const darkModeLevel1 = darkModeLevel0;
const darkModeLevel2 = darkModeLevel1;
const darkModeLevel3 = darkModeLevel2;
const darkModeLevel4 = darkModeLevel3;

const palettes = {
  light: {
    level0: lightModeLevel0,
    level1: lightModeLevel1,
    level2: lightModeLevel2,
    level3: lightModeLevel3,
    level4: lightModeLevel4,
  },
  dark: {
    level0: darkModeLevel0,
    level1: darkModeLevel1,
    level2: darkModeLevel2,
    level3: darkModeLevel3,
    level4: darkModeLevel4,
  },
};

export const getCardPalette = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): CardPalette => {
  return palettes[colorScheme][backdrop];
};
