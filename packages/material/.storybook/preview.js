import React from "react";
import "./global.css";
import { UIProvider, Background } from "../src";
import {
  breakpoints,
  helpers,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const { px } = helpers;

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
};

export const decorators = [
  (Story) => {
    return (
      <UIProvider>
        <Background backgroundColor="level5">
          <Story />
        </Background>
      </UIProvider>
    )
  }
]
