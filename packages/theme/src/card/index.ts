import { spacingBase } from "@utilitywarehouse/customer-ui-design-tokens";
import { ColorScheme, BackdropLevel } from "..";
import { CardStyles } from "./types";
import { getCardPalette } from "./palette";

export { CardStyles } from "./types";

export const getCardStyles = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): CardStyles => {
  const cardPalette = getCardPalette(colorScheme, backdrop);
  const commonStyles = {
    padding: `${spacingBase * 3}px`,
    borderRadius: `${spacingBase * 1.75}px`,
    borderWidth: `${spacingBase * 0.25}px`,
    borderStyle: "solid",
  };

  return {
    transparent: {
      desktop: {
        ...commonStyles,
        ...cardPalette.transparent,
        borderStyle: "dashed",
      },
      tablet: {
        ...commonStyles,
        ...cardPalette.transparent,
        borderStyle: "dashed",
      },
      mobile: {
        ...commonStyles,
        ...cardPalette.transparent,
        borderStyle: "dashed",
      },
    },
    opaque: {
      desktop: {
        ...commonStyles,
        ...cardPalette.opaque,
      },
      tablet: {
        ...commonStyles,
        ...cardPalette.opaque,
      },
      mobile: {
        ...commonStyles,
        ...cardPalette.opaque,
      },
    },
  };
};
