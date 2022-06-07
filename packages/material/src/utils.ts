import { BackdropLevel } from "./types";

export const customerUiPrefix = "uw-cui";

export const isHeadingVariant = (variant: string): boolean => {
  const headingVariants = ["displayHeading", "h1", "h2", "h3", "h4"];
  return headingVariants.includes(variant);
};

// TODO: ensure the name of this function ends up inline with any design token naming for Backdrops
// because I don't think `brand` is going to be the signifier for darker backgrounds.
export const isBrandBackdropLevel = (backdropLevel: BackdropLevel): boolean => {
  const brandBackdropLevels = ["level0", "level1"];
  return brandBackdropLevels.includes(backdropLevel);
};

// get the hexadecimal value for an opacity value, primarily for use with CSS colour hex values
// ie. to have the midnight colour with 10% opacity:
// backgroundColor: `${colors.midnight}${getHexOpacity(0.1)}`
export const getHexOpacity = (opacity: number): string => {
  if (opacity < 0 || opacity > 1) {
    throw new Error(
      `Value for opacity is out of bounds, opacity >= 0 and opacity <= 1; received ${opacity}`
    );
  }

  return Math.round(255 * opacity).toString(16);
};
