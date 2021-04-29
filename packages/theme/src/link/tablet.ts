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

export const tabletDefaultIdle: LinkStylesNonColor = {
  ...(commonDefaultIdleStyles as LinkStylesNonColor),
};

export const tabletDefaultHover: LinkStylesNonColor = {
  ...(commonDefaultHoverStyles as LinkStylesNonColor),
};

export const tabletDefaultDisabled: LinkStylesNonColor = {
  ...(commonDefaultDisabledStyles as LinkStylesNonColor),
};

export const tabletActiveIdle: LinkStylesNonColor = {
  ...(commonActiveIdleStyles as LinkStylesNonColor),
};

export const tabletActiveHover: LinkStylesNonColor = {
  ...(commonActiveHoverStyles as LinkStylesNonColor),
};

export const tabletActiveDisabled: LinkStylesNonColor = {
  ...(commonActiveDisabledStyles as LinkStylesNonColor),
};

export const tabletSecondaryIdle: LinkStylesNonColor = {
  ...(commonSecondaryIdleStyles as LinkStylesNonColor),
};

export const tabletSecondaryHover: LinkStylesNonColor = {
  ...(commonSecondaryHoverStyles as LinkStylesNonColor),
};

export const tabletSecondaryDisabled: LinkStylesNonColor = {
  ...(commonSecondaryDisabledStyles as LinkStylesNonColor),
};
