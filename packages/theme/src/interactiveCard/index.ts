import { spacingBase } from "@utilitywarehouse/customer-ui-design-tokens";
import { ColorScheme, BackdropLevel } from "..";
import { InteractiveCardStyles } from "./types";
import { getInteractiveCardPalette } from "./palette";
import { duration, easingFunction } from "../transitions";

export { InteractiveCardStyles } from "./types";

export const getInteractiveCardStyles = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): InteractiveCardStyles => {
  const interactiveCardPalette = getInteractiveCardPalette(
    colorScheme,
    backdrop
  );

  const padding = `${spacingBase * 3}px`;
  const borderRadius = `${spacingBase * 2}px`;
  const transition = `all ${duration}ms ${easingFunction}`;
  const transitionProperty = "background-color";
  return {
    desktop: {
      idle: {
        padding,
        borderRadius,
        transition,
        transitionProperty,
        ...interactiveCardPalette.idle,
      },
      active: {
        padding,
        borderRadius,
        transition,
        transitionProperty,
        ...interactiveCardPalette.active,
      },
    },
    tablet: {
      idle: {
        padding,
        borderRadius,
        transition,
        transitionProperty,
        ...interactiveCardPalette.idle,
      },
      active: {
        padding,
        borderRadius,
        transition,
        transitionProperty,
        ...interactiveCardPalette.active,
      },
    },
    mobile: {
      idle: {
        padding,
        borderRadius,
        transition,
        transitionProperty,
        ...interactiveCardPalette.idle,
      },
      active: {
        padding,
        borderRadius,
        transition,
        transitionProperty,
        ...interactiveCardPalette.active,
      },
    },
  };
};
