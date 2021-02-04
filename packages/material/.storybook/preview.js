import React from "react";
import "./global.css";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";
import DarkModeProvider from "../src/components/DarkModeProvider";
import { designTokens } from "../src/lib/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  darkMode: {
    dark: {
      ...themes.dark,
      appContentBg: designTokens.colors.backdrops.dark.base,
    },
  },
};

export const decorators = [
  (Story) => {
    const mode = useDarkMode();
    return (
      <DarkModeProvider
        useSystemColorScheme={false}
        value={mode ? "on" : "off"}
      >
        <Story />
      </DarkModeProvider>
    );
  },
];
