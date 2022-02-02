import { BackdropLevel, ColorScheme } from "./types";

export const clsx = (
  ...classNames: Array<string | undefined | false>
): string => {
  return classNames.filter((className) => !!className).join(" ");
};

export const isDarkColorScheme = (colorScheme: ColorScheme): boolean =>
  colorScheme === "dark";

export const isBrandBackdropLevel = (backdropLevel: BackdropLevel): boolean => {
  const brandBackdropLevels = ["level0", "level1"];
  return brandBackdropLevels.includes(backdropLevel);
};
