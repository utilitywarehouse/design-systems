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
  return {
    desktop: {
      padding: `${spacingBase * 3}px`,
      borderRadius: `${spacingBase * 2}px`,
      ...cardPalette,
    },
    tablet: {
      padding: `${spacingBase * 3}px`,
      borderRadius: `${spacingBase * 2}px`,
      ...cardPalette,
    },
    mobile: {
      padding: `${spacingBase * 3}px`,
      borderRadius: `${spacingBase * 2}px`,
      ...cardPalette,
    },
  };
};
