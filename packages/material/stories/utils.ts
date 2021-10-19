import type { BackdropLevel } from "@utilitywarehouse/customer-ui-theme";

export const backgroundLevels = [0, 1, 2, 3, 4, 5].map(
  (level) => `level${level}` as BackdropLevel
);
