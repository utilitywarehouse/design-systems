import React from "react";
import MUIThemeProvider from "@material-ui/core/styles/ThemeProvider";
import { DefaultTheme } from "@material-ui/styles";
import { getTheme } from "../lib/theme";
import { DarkModeContext } from "./DarkModeProvider";

export interface ThemeProviderProps<Theme = DefaultTheme> {
  children?: React.ReactNode;
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const { darkModeEnabled } = React.useContext(DarkModeContext);
  const muiTheme = React.useMemo(() => {
    if (theme) return theme;
    return getTheme(darkModeEnabled);
  }, [theme, darkModeEnabled]);

  return <MUIThemeProvider theme={muiTheme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
