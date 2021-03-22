import { spacingBase } from "@utilitywarehouse/customer-ui-design-tokens";
import { Spacing } from "./types";

const spacing: Spacing = (multiplier: number) => multiplier * spacingBase;

export default spacing;
