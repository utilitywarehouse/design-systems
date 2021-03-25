import {
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { ButtonStylesNonColor } from "./types";
import { duration, easingFunction } from "../transitions";

const commonStyles = {
  transition: `all ${duration}ms ${easingFunction}`,
  transitionProperty: "background-color, border-color, color, opacity",
};

export const commonIdleStyles: Partial<ButtonStylesNonColor> = {
  borderStyle: "solid",
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.semibold,
  textTransform: "none",
  opacity: 1,
  ...commonStyles,
};

export const commonActiveStyles: Partial<ButtonStylesNonColor> = {
  ...commonStyles,
};

export const commonDisabledStyles: Partial<ButtonStylesNonColor> = {
  opacity: 0.5,
  ...commonStyles,
};
