import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { CardPalette } from "./types";
import { ColorScheme, BackdropLevel } from "../types";

const lightModeLevel0 = {
  opaque: {
    backgroundColor: colors.midnight,
    borderColor: colors.midnight,
  },
  transparent: {
    borderColor: colors.white,
    backgroundColor: "transparent",
  },
};

const lightModeLevel1 = {
  opaque: {
    backgroundColor: colors.purple,
    borderColor: colors.purple,
  },
  transparent: {
    borderColor: colors.white,
    backgroundColor: "transparent",
  },
};

const lightModeLevel2 = {
  opaque: {
    backgroundColor: colors.midTint,
    borderColor: colors.midTint,
  },
  transparent: {
    borderColor: colors.midnight,
    backgroundColor: "transparent",
  },
};

const lightModeLevel3 = {
  opaque: {
    backgroundColor: colors.lightTint,
    borderColor: colors.lightTint,
  },
  transparent: {
    borderColor: colors.purple,
    backgroundColor: "transparent",
  },
};

const lightModeLevel4 = {
  opaque: {
    backgroundColor: colors.whiteOwl,
    borderColor: colors.whiteOwl,
  },
  transparent: {
    borderColor: colors.purple,
    backgroundColor: "transparent",
  },
};

const lightModeLevel5 = {
  opaque: {
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  transparent: {
    borderColor: colors.purple,
    backgroundColor: "transparent",
  },
};

const darkModeLevel0 = {
  opaque: {
    backgroundColor: colors.codGray,
    borderColor: colors.codGray,
  },
  transparent: {
    borderColor: colors.white,
    backgroundColor: "transparent",
  },
};

const darkModeLevel1 = darkModeLevel0;
const darkModeLevel2 = darkModeLevel1;
const darkModeLevel3 = darkModeLevel2;
const darkModeLevel4 = darkModeLevel3;
const darkModeLevel5 = darkModeLevel4;

const palettes = {
  light: {
    level0: lightModeLevel0,
    level1: lightModeLevel1,
    level2: lightModeLevel2,
    level3: lightModeLevel3,
    level4: lightModeLevel4,
    level5: lightModeLevel5,
  },
  dark: {
    level0: darkModeLevel0,
    level1: darkModeLevel1,
    level2: darkModeLevel2,
    level3: darkModeLevel3,
    level4: darkModeLevel4,
    level5: darkModeLevel5,
  },
};

export const getCardPalette = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): CardPalette => {
  return palettes[colorScheme][backdrop];
};
