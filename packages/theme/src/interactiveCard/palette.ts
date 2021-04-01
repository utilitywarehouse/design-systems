import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { InteractiveCardPalette } from "./types";
import { TinyColor } from "@ctrl/tinycolor";
import { ColorScheme, BackdropLevel } from "../types";

const lightModeLevel0 = {
  primary: {
    idle: {
      backgroundColor: colors.midnight,
    },
    active: {
      backgroundColor: new TinyColor(colors.white).setAlpha(0.1).toString(),
    },
  },
  secondary: {
    idle: {
      backgroundColor: colors.midnight,
    },
    active: {
      backgroundColor: new TinyColor(colors.white).setAlpha(0.1).toString(),
    },
  },
};

const lightModeLevel1 = {
  primary: {
    idle: {
      backgroundColor: colors.purple,
    },
    active: {
      backgroundColor: new TinyColor(colors.white).setAlpha(0.1).toRgbString(),
    },
  },
  secondary: {
    idle: {
      backgroundColor: colors.purple,
    },
    active: {
      backgroundColor: new TinyColor(colors.white).setAlpha(0.1).toRgbString(),
    },
  },
};

const lightModeLevel2 = {
  primary: {
    idle: {
      backgroundColor: colors.midTint,
    },
    active: {
      backgroundColor: new TinyColor(colors.midnight).setAlpha(0.1).toString(),
    },
  },
  secondary: {
    idle: {
      backgroundColor: colors.midTint,
    },
    active: {
      backgroundColor: new TinyColor(colors.midnight).setAlpha(0.1).toString(),
    },
  },
};

const lightModeLevel3 = {
  primary: {
    idle: {
      backgroundColor: colors.lightTint,
    },
    active: {
      backgroundColor: new TinyColor(colors.midnight).setAlpha(0.1).toString(),
    },
  },
  secondary: {
    idle: {
      backgroundColor: colors.lightTint,
    },
    active: {
      backgroundColor: new TinyColor(colors.midnight).setAlpha(0.1).toString(),
    },
  },
};

const lightModeLevel4 = {
  primary: {
    idle: {
      backgroundColor: colors.white,
    },
    active: {
      backgroundColor: new TinyColor(colors.midnight).setAlpha(0.1).toString(),
    },
  },
  secondary: {
    idle: {
      backgroundColor: colors.white,
    },
    active: {
      backgroundColor: new TinyColor(colors.midnight).setAlpha(0.1).toString(),
    },
  },
};

const darkModeLevel0 = {
  primary: {
    idle: {
      backgroundColor: colors.codGray,
    },
    active: {
      backgroundColor: new TinyColor(colors.white).setAlpha(0.1).toString(),
    },
  },
  secondary: {
    idle: {
      backgroundColor: colors.codGray,
    },
    active: {
      backgroundColor: new TinyColor(colors.white).setAlpha(0.1).toString(),
    },
  },
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

export const getInteractiveCardPalette = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): InteractiveCardPalette => {
  return palettes[colorScheme][backdrop];
};
