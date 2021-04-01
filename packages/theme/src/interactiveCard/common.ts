import { spacingBase } from "@utilitywarehouse/customer-ui-design-tokens";
import { InteractiveCardStylesNonColor } from "./types";
import { duration, easingFunction } from "../transitions";

const commonStyles = {
  borderRadius: `${spacingBase * 2}px`,
  transition: `all ${duration}ms ${easingFunction}`,
  transitionProperty: "background-color",
};

export const commonIdleStyles: Partial<InteractiveCardStylesNonColor> = {
  ...commonStyles,
};

export const commonActiveStyles: Partial<InteractiveCardStylesNonColor> = {
  ...commonStyles,
};

export const commonDisabledStyles: Partial<InteractiveCardStylesNonColor> = {
  ...commonStyles,
};
