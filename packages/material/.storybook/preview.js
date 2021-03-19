import React from "react";
import "./global.css";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";
import DarkModeProvider from "../src/components/DarkModeProvider";
import { backdropGroup } from "@utilitywarehouse/customer-ui-theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  darkMode: {
    dark: {
      ...themes.dark,
      appContentBg: backdropGroup.dark.level0,
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
