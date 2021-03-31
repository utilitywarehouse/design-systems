import { spacingBase } from "@utilitywarehouse/customer-ui-design-tokens";
import { CommonMenuItemStyles, CommonMenuItemStylesCSS } from "./types";

const commonStyles: Partial<CommonMenuItemStylesCSS> = {
  padding: `${spacingBase * 2}px`,
};

export const getCommonStyles = (): CommonMenuItemStyles => ({
  desktop: {
    ...(commonStyles as CommonMenuItemStylesCSS),
  },
  tablet: {
    ...(commonStyles as CommonMenuItemStylesCSS),
  },
  mobile: {
    ...(commonStyles as CommonMenuItemStylesCSS),
  },
});
