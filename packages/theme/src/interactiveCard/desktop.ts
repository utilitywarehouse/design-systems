import { spacingBase } from "@utilitywarehouse/customer-ui-design-tokens";
import { InteractiveCardStylesNonColor } from "./types";
import { commonIdleStyles } from "./common";

export const desktopPrimarySmallIdle: InteractiveCardStylesNonColor = {
  ...(commonIdleStyles as InteractiveCardStylesNonColor),
  padding: `${spacingBase}px ${spacingBase * 2}px`,
  borderRadius: `${spacingBase}px`,
};

export const desktopPrimaryRegularIdle: InteractiveCardStylesNonColor = {
  ...(commonIdleStyles as InteractiveCardStylesNonColor),
  padding: `${spacingBase * 2}px`,
};

export const desktopPrimaryLargeIdle: InteractiveCardStylesNonColor = {
  ...(commonIdleStyles as InteractiveCardStylesNonColor),
  padding: `${spacingBase * 2}px ${spacingBase * 3}px`,
};

export const desktopPrimarySmallActive: InteractiveCardStylesNonColor = {
  ...desktopPrimarySmallIdle,
};

export const desktopPrimaryRegularActive: InteractiveCardStylesNonColor = {
  ...desktopPrimaryRegularIdle,
};

export const desktopPrimaryLargeActive: InteractiveCardStylesNonColor = {
  ...desktopPrimaryLargeIdle,
};

export const desktopSecondarySmallIdle: InteractiveCardStylesNonColor = {
  ...desktopPrimarySmallIdle,
};

export const desktopSecondaryRegularIdle: InteractiveCardStylesNonColor = {
  ...desktopPrimaryRegularIdle,
};

export const desktopSecondaryLargeIdle: InteractiveCardStylesNonColor = {
  ...desktopPrimaryLargeIdle,
};

export const desktopSecondarySmallActive: InteractiveCardStylesNonColor = {
  ...desktopPrimarySmallActive,
};

export const desktopSecondaryRegularActive: InteractiveCardStylesNonColor = {
  ...desktopPrimaryRegularActive,
};

export const desktopSecondaryLargeActive: InteractiveCardStylesNonColor = {
  ...desktopPrimaryLargeActive,
};
