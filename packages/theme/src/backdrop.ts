import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { ColorScheme } from "./colorScheme";

export type BackdropLevel = "level0" | "level1" | "level2" | "level3";

export type Backdrop = {
  [key in BackdropLevel]: string;
};

export type BackdropGroup = {
  [key in ColorScheme]: Backdrop;
};

export const backdropGroup: BackdropGroup = {
  light: {
    level0: colors.midnight,
    level1: colors.purple,
    level2: colors.lightTint,
    level3: colors.white,
  },
  dark: {
    level0: colors.codGray,
    level1: colors.codGray,
    level2: colors.codGray,
    level3: colors.codGray,
  },
};
