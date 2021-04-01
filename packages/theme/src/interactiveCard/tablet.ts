import { spacingBase } from "@utilitywarehouse/customer-ui-design-tokens";
import { InteractiveCardStylesNonColor } from "./types";
import { commonIdleStyles } from "./common";

export const tabletPrimarySmallIdle: InteractiveCardStylesNonColor = {
  ...(commonIdleStyles as InteractiveCardStylesNonColor),
  padding: `${spacingBase}px`,
  borderRadius: `${spacingBase}px`,
};

export const tabletPrimaryRegularIdle: InteractiveCardStylesNonColor = {
  ...(commonIdleStyles as InteractiveCardStylesNonColor),
  padding: `${spacingBase * 2}px`,
};

export const tabletPrimaryLargeIdle: InteractiveCardStylesNonColor = {
  ...(commonIdleStyles as InteractiveCardStylesNonColor),
  padding: `${spacingBase * 2}px ${spacingBase * 3}px`,
};

export const tabletPrimarySmallActive: InteractiveCardStylesNonColor = {
  ...tabletPrimarySmallIdle,
};

export const tabletPrimaryRegularActive: InteractiveCardStylesNonColor = {
  ...tabletPrimaryRegularIdle,
};

export const tabletPrimaryLargeActive: InteractiveCardStylesNonColor = {
  ...tabletPrimaryLargeIdle,
};

export const tabletSecondarySmallIdle: InteractiveCardStylesNonColor = {
  ...tabletPrimarySmallIdle,
};

export const tabletSecondaryRegularIdle: InteractiveCardStylesNonColor = {
  ...tabletPrimaryRegularIdle,
};

export const tabletSecondaryLargeIdle: InteractiveCardStylesNonColor = {
  ...tabletPrimaryLargeIdle,
};

export const tabletSecondarySmallActive: InteractiveCardStylesNonColor = {
  ...tabletPrimarySmallActive,
};

export const tabletSecondaryRegularActive: InteractiveCardStylesNonColor = {
  ...tabletPrimaryRegularActive,
};

export const tabletSecondaryLargeActive: InteractiveCardStylesNonColor = {
  ...tabletPrimaryLargeActive,
};
