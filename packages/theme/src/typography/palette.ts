import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { TypographyPalette } from "./types";
import { ColorScheme, BackdropLevel } from "../types";

const lightModeLevel0: TypographyPalette = {
  displayHeading: {
    primary: {
      color: colors.white,
    },
    secondary: {
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
    primary: {
      color: colors.white,
    },
    secondary: {
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
    primary: {
      color: colors.white,
    },
    secondary: {
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
    primary: {
      color: colors.white,
    },
    secondary: {
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
    primary: {
      color: colors.white,
    },
    secondary: {
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
    primary: {
      color: colors.white,
    },
    secondary: {
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
    primary: {
      color: colors.white,
    },
    secondary: {
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
    primary: {
      color: colors.white,
    },
    secondary: {
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
    primary: {
      color: colors.white,
    },
    secondary: {
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
    primary: {
      color: colors.purple,
    },
    secondary: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  h1: {
    primary: {
      color: colors.purple,
    },
    secondary: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  h2: {
    primary: {
      color: colors.purple,
    },
    secondary: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  h3: {
    primary: {
      color: colors.purple,
    },
    secondary: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  h4: {
    primary: {
      color: colors.purple,
    },
    secondary: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  subtitle: {
    primary: {
      color: colors.midnight,
    },
    secondary: {
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
    primary: {
      color: colors.midnight,
    },
    secondary: {
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
    primary: {
      color: colors.midnight,
    },
    secondary: {
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
    primary: {
      color: colors.midnight,
    },
    secondary: {
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
