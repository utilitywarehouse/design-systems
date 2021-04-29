import { LinkStylesNonColor } from "./types";
import { duration, easingFunction } from "../transitions";

const commonStyles = {
  transition: `all ${duration}ms ${easingFunction}`,
  transitionProperty: "text-decoration, color, opacity",
  textDecoration: "underline",
  opacity: 1,
  textDecorationThickness: 2,
  textUnderlineOffset: 4,
  cursor: "pointer",
};

export const commonDefaultIdleStyles: Partial<LinkStylesNonColor> = {
  ...commonStyles,
};

export const commonDefaultHoverStyles: Partial<LinkStylesNonColor> = {
  ...commonStyles,
  opacity: 0.5,
};

export const commonDefaultDisabledStyles: Partial<LinkStylesNonColor> = {
  ...commonStyles,
  opacity: 0.15,
  cursor: "not-allowed",
};

export const commonActiveIdleStyles: Partial<LinkStylesNonColor> = {
  ...commonStyles,
  textDecoration: "none",
};

export const commonActiveHoverStyles: Partial<LinkStylesNonColor> = {
  ...commonStyles,
  textDecoration: "none",
};

export const commonActiveDisabledStyles: Partial<LinkStylesNonColor> = {
  ...commonStyles,
  textDecoration: "none",
  opacity: 0.15,
  cursor: "not-allowed",
};

export const commonSecondaryIdleStyles: Partial<LinkStylesNonColor> = {
  ...commonStyles,
  textDecoration: "none",
};

export const commonSecondaryHoverStyles: Partial<LinkStylesNonColor> = {
  ...commonStyles,
  textDecoration: "none",
};

export const commonSecondaryDisabledStyles: Partial<LinkStylesNonColor> = {
  ...commonStyles,
  textDecoration: "none",
  opacity: 0.15,
  cursor: "not-allowed",
};
