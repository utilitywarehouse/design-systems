import { spacingBase } from "@utilitywarehouse/customer-ui-design-tokens";
import { InteractiveCardStylesNonColor } from "./types";
import { commonIdleStyles } from "./common";

export const mobilePrimarySmallIdle: InteractiveCardStylesNonColor = {
  ...(commonIdleStyles as InteractiveCardStylesNonColor),
  padding: `${spacingBase}px`,
  borderRadius: `${spacingBase}px`,
};

export const mobilePrimaryRegularIdle: InteractiveCardStylesNonColor = {
  ...(commonIdleStyles as InteractiveCardStylesNonColor),
  padding: `${spacingBase * 2}px`,
};

export const mobilePrimaryLargeIdle: InteractiveCardStylesNonColor = {
  ...(commonIdleStyles as InteractiveCardStylesNonColor),
  padding: `${spacingBase * 2}px ${spacingBase * 3}px`,
};

export const mobilePrimarySmallActive: InteractiveCardStylesNonColor = {
  ...mobilePrimarySmallIdle,
};

export const mobilePrimaryRegularActive: InteractiveCardStylesNonColor = {
  ...mobilePrimaryRegularIdle,
};

export const mobilePrimaryLargeActive: InteractiveCardStylesNonColor = {
  ...mobilePrimaryLargeIdle,
};

export const mobileSecondarySmallIdle: InteractiveCardStylesNonColor = {
  ...mobilePrimarySmallIdle,
};

export const mobileSecondaryRegularIdle: InteractiveCardStylesNonColor = {
  ...mobilePrimaryRegularIdle,
};

export const mobileSecondaryLargeIdle: InteractiveCardStylesNonColor = {
  ...mobilePrimaryLargeIdle,
};

export const mobileSecondarySmallActive: InteractiveCardStylesNonColor = {
  ...mobilePrimarySmallActive,
};

export const mobileSecondaryRegularActive: InteractiveCardStylesNonColor = {
  ...mobilePrimaryRegularActive,
};

export const mobileSecondaryLargeActive: InteractiveCardStylesNonColor = {
  ...mobilePrimaryLargeActive,
};
