import { spacingBase } from "@utilitywarehouse/customer-ui-design-tokens";
import { CommonMenuStyles, CommonMenuStylesCSS } from "./types";

const commonStyles: Partial<CommonMenuStylesCSS> = {
  borderRadius: `${spacingBase * 1}px`,
  borderStyle: "solid",
  borderWidth: "2px",
  padding: "0",
  boxShadow: "none",
};

export const getCommonStyles = (): CommonMenuStyles => ({
  desktop: {
    ...(commonStyles as CommonMenuStylesCSS),
  },
  tablet: {
    ...(commonStyles as CommonMenuStylesCSS),
  },
  mobile: {
    ...(commonStyles as CommonMenuStylesCSS),
  },
});
