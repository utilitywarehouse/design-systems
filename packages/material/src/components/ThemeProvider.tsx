import React from "react";
import MUIThemeProvider from "@material-ui/core/styles/ThemeProvider";
import { DefaultTheme } from "@material-ui/styles";
import { getDefaultMUITheme } from "../lib/theme";

export interface ThemeProviderProps<Theme = DefaultTheme> {
  children?: React.ReactNode;
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const resolveTheme = () => {
    if (theme) return theme;
    return getDefaultMUITheme();
  };

  return <MUIThemeProvider theme={resolveTheme()}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
