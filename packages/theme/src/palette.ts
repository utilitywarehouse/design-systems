import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { BackdropLevel, ColorScheme, Palette } from "./types";

const lightModeLevel0: Palette = {
  common: {
    white: colors.white,
    black: colors.black,
  },
  brand: {
    primary: colors.purple,
    action: colors.cyan,
    line: colors.pink,
  },
  messaging: {
    alert: colors.rose,
    info: colors.midnight,
    success: colors.apple,
    warning: colors.gold,
  },
  input: {
    error: colors.maroonFlush,
    success: colors.jewel,
    focus: colors.blueRibbon,
  },
  backdrops: {
    light: {
      level0: colors.midnight,
      level1: colors.darkTint,
      level3: colors.lightTint,
      level4: colors.whiteOwl,
      level5: colors.white,
    },
    dark: {
      level0: colors.codGray,
      level1: colors.codGray,
      level3: colors.codGray,
      level4: colors.codGray,
      level5: colors.codGray,
    },
  },
  services: {
    gas: colors.cyan,
    electricity: colors.apple,
    insurance: colors.rose,
    mobile: colors.gold,
    landline: colors.grape,
  },
};

const lightModeLevel1 = lightModeLevel0;
const lightModeLevel3 = lightModeLevel0;
const lightModeLevel4 = lightModeLevel0;
const lightModeLevel5 = lightModeLevel0;

const darkModeLevel0: Palette = lightModeLevel0;

const darkModeLevel1 = darkModeLevel0;
const darkModeLevel3 = darkModeLevel0;
const darkModeLevel4 = darkModeLevel0;
const darkModeLevel5 = darkModeLevel0;

const palettes = {
  light: {
    level0: lightModeLevel0,
    level1: lightModeLevel1,
    level3: lightModeLevel3,
    level4: lightModeLevel4,
    level5: lightModeLevel5,
  },
  dark: {
    level0: darkModeLevel0,
    level1: darkModeLevel1,
    level3: darkModeLevel3,
    level4: darkModeLevel4,
    level5: darkModeLevel5,
  },
};

export const getPalette = (
  colorScheme: ColorScheme,
  backdropLevel: BackdropLevel
): Palette => {
  return palettes[colorScheme][backdropLevel];
};
