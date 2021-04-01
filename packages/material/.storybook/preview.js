import React from "react";
import "./global.css";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { UIProvider } from "../src";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  darkMode: {
    dark: {
      ...themes.dark,
      appContentBg: "#000000",
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  (Story) => {
    const mode = useDarkMode();
    return (
      <UIProvider
        darkModeProviderProps={{
          useSystemColorScheme: false,
          value: mode ? "on" : "off",
        }}
      >
        <Story />
      </UIProvider>
    );
  },
];
