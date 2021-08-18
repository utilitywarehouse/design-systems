import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { TypographyPalette } from "./types";
import { ColorScheme, BackdropLevel } from "../types";

const lightModeLevel0: TypographyPalette = {
  displayHeading: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  h1: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  h2: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  h3: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  h4: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  subtitle: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  body: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  legalNote: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  caption: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
};

const lightModeLevel1 = lightModeLevel0;

const lightModeLevel2: TypographyPalette = {
  displayHeading: {
    default: {
      color: colors.purple,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  h1: {
    default: {
      color: colors.purple,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  h2: {
    default: {
      color: colors.purple,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  h3: {
    default: {
      color: colors.purple,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  h4: {
    default: {
      color: colors.purple,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  subtitle: {
    default: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  body: {
    default: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  legalNote: {
    default: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  caption: {
    default: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
};

const lightModeLevel3 = lightModeLevel2;
const lightModeLevel4 = lightModeLevel3;
const lightModeLevel5 = lightModeLevel4;

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
    level0: lightModeLevel0,
    level1: lightModeLevel1,
    level2: lightModeLevel2,
    level3: lightModeLevel3,
    level4: lightModeLevel4,
    level5: lightModeLevel5,
  },
};

export const getTypographyPalette = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): TypographyPalette => {
  return palettes[colorScheme][backdrop];
};
