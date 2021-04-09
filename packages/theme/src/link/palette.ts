import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { TinyColor } from "@ctrl/tinycolor";
import { LinkPalette } from "./types";
import { ColorScheme, BackdropLevel } from "../types";

const lightModeLevel0 = {
  default: {
    idle: {
      color: colors.white,
      textDecorationColor: colors.cyan,
    },
    hover: {
      color: colors.white,
      textDecorationColor: colors.cyan,
    },
  },
  active: {
    idle: {
      color: colors.cyan,
      textDecorationColor: colors.cyan,
    },
    hover: {
      color: colors.cyan,
      textDecorationColor: colors.cyan,
    },
  },
  secondary: {
    idle: {
      color: colors.white,
      textDecorationColor: colors.cyan,
    },
    hover: {
      color: colors.cyan,
      textDecorationColor: colors.cyan,
    },
  },
};

const lightModeLevel1 = lightModeLevel0;

const lightModeLevel2 = {
  default: {
    idle: {
      color: colors.midnight,
      textDecorationColor: colors.cyan,
    },
    hover: {
      color: colors.midnight,
      textDecorationColor: colors.cyan,
    },
  },
  active: {
    idle: {
      color: colors.cyan,
      textDecorationColor: colors.cyan,
    },
    hover: {
      color: colors.cyan,
      textDecorationColor: colors.cyan,
    },
  },
  secondary: {
    idle: {
      color: colors.cyan,
      textDecorationColor: colors.cyan,
    },
    hover: {
      color: new TinyColor(colors.cyan).setAlpha(0.5).toRgbString(),
      textDecorationColor: colors.cyan,
    },
  },
};

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

export const getLinkPalette = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): LinkPalette => {
  return palettes[colorScheme][backdrop];
};
