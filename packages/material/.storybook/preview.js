import React from "react";
import "./global.css";
import { breakpoints } from "@utilitywarehouse/customer-ui-design-tokens";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "../src";
import { px } from "../src/utils";

const customerUiViewports = {
  mobile: {
    name: "Customer UI mobile",
    styles: {
      width: px(breakpoints.tablet),
      height: "100vh",
    },
  },
  desktop: {
    name: "Customer UI desktop",
    styles: {
      width: px(breakpoints.desktop),
      height: "100vh",
    },
  },
  ...INITIAL_VIEWPORTS,
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: customerUiViewports,
  },
  chromatic: { disableSnapshot: false },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
