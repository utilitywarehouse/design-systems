import React from "react";
import MUIThemeProvider from "@material-ui/core/styles/ThemeProvider";
import { getTheme } from "../lib/theme";
import { DarkModeContext } from "./DarkModeProvider";

export interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const { darkModeEnabled } = React.useContext(DarkModeContext);
  const muiTheme = React.useMemo(() => {
    return getTheme(darkModeEnabled);
  }, [darkModeEnabled]);

  return <MUIThemeProvider theme={muiTheme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
