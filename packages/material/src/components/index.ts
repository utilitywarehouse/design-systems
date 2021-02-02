import { getComponentThemeConfiguration as getButtonComponentThemeConfiguration } from "./Button";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  params
) => ({
  ...getButtonComponentThemeConfiguration(params),
});
