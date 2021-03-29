import { LinkStylesNonColor } from "./types";
import {
  commonDefaultIdleStyles,
  commonDefaultHoverStyles,
  commonActiveIdleStyles,
  commonActiveHoverStyles,
  commonSecondaryIdleStyles,
  commonSecondaryHoverStyles,
} from "./common";

export const mobileDefaultIdle: LinkStylesNonColor = {
  ...(commonDefaultIdleStyles as LinkStylesNonColor),
};

export const mobileDefaultHover: LinkStylesNonColor = {
  ...(commonDefaultHoverStyles as LinkStylesNonColor),
};

export const mobileActiveIdle: LinkStylesNonColor = {
  ...(commonActiveIdleStyles as LinkStylesNonColor),
};

export const mobileActiveHover: LinkStylesNonColor = {
  ...(commonActiveHoverStyles as LinkStylesNonColor),
};

export const mobileSecondaryIdle: LinkStylesNonColor = {
  ...(commonSecondaryIdleStyles as LinkStylesNonColor),
};

export const mobileSecondaryHover: LinkStylesNonColor = {
  ...(commonSecondaryHoverStyles as LinkStylesNonColor),
};
