import { BackdropLevel, ColorScheme } from "./types";

export const isDarkColorScheme = (colorScheme: ColorScheme): boolean =>
  colorScheme === "dark";

// TODO: ensure the name of this function ends up inline with any design token naming for Backdrops
// because I don't think `brand` is going to be the signifier for darker backgrounds.
export const isBrandBackdropLevel = (backdropLevel: BackdropLevel): boolean => {
  const brandBackdropLevels = ["level0", "level1"];
  return brandBackdropLevels.includes(backdropLevel);
};
