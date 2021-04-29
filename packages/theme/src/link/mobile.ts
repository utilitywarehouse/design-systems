import { LinkStylesNonColor } from "./types";
import {
  commonDefaultIdleStyles,
  commonDefaultHoverStyles,
  commonActiveIdleStyles,
  commonActiveHoverStyles,
  commonSecondaryIdleStyles,
  commonSecondaryHoverStyles,
  commonActiveDisabledStyles,
  commonDefaultDisabledStyles,
  commonSecondaryDisabledStyles,
} from "./common";

export const mobileDefaultIdle: LinkStylesNonColor = {
  ...(commonDefaultIdleStyles as LinkStylesNonColor),
};

export const mobileDefaultHover: LinkStylesNonColor = {
  ...(commonDefaultHoverStyles as LinkStylesNonColor),
};

export const mobileDefaultDisabled: LinkStylesNonColor = {
  ...(commonDefaultDisabledStyles as LinkStylesNonColor),
};

export const mobileActiveIdle: LinkStylesNonColor = {
  ...(commonActiveIdleStyles as LinkStylesNonColor),
};

export const mobileActiveHover: LinkStylesNonColor = {
  ...(commonActiveHoverStyles as LinkStylesNonColor),
};

export const mobileActiveDisabled: LinkStylesNonColor = {
  ...(commonActiveDisabledStyles as LinkStylesNonColor),
};

export const mobileSecondaryIdle: LinkStylesNonColor = {
  ...(commonSecondaryIdleStyles as LinkStylesNonColor),
};

export const mobileSecondaryHover: LinkStylesNonColor = {
  ...(commonSecondaryHoverStyles as LinkStylesNonColor),
};

export const mobileSecondaryDisabled: LinkStylesNonColor = {
  ...(commonSecondaryDisabledStyles as LinkStylesNonColor),
};
