import { LinkStylesNonColor } from "./types";
import {
  commonDefaultIdleStyles,
  commonDefaultHoverStyles,
  commonActiveIdleStyles,
  commonActiveHoverStyles,
  commonSecondaryIdleStyles,
  commonSecondaryHoverStyles,
  commonDefaultDisabledStyles,
  commonActiveDisabledStyles,
  commonSecondaryDisabledStyles,
} from "./common";

export const desktopDefaultIdle: LinkStylesNonColor = {
  ...(commonDefaultIdleStyles as LinkStylesNonColor),
};

export const desktopDefaultHover: LinkStylesNonColor = {
  ...(commonDefaultHoverStyles as LinkStylesNonColor),
};

export const desktopDefaultDisabled: LinkStylesNonColor = {
  ...(commonDefaultDisabledStyles as LinkStylesNonColor),
};

export const desktopActiveIdle: LinkStylesNonColor = {
  ...(commonActiveIdleStyles as LinkStylesNonColor),
};

export const desktopActiveHover: LinkStylesNonColor = {
  ...(commonActiveHoverStyles as LinkStylesNonColor),
};

export const desktopActiveDisabled: LinkStylesNonColor = {
  ...(commonActiveDisabledStyles as LinkStylesNonColor),
};

export const desktopSecondaryIdle: LinkStylesNonColor = {
  ...(commonSecondaryIdleStyles as LinkStylesNonColor),
};

export const desktopSecondaryHover: LinkStylesNonColor = {
  ...(commonSecondaryHoverStyles as LinkStylesNonColor),
};

export const desktopSecondaryDisabled: LinkStylesNonColor = {
  ...(commonSecondaryDisabledStyles as LinkStylesNonColor),
};
