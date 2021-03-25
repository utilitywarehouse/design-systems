import React from "react";
import {
  getTheme,
  BackdropLevel,
  ColorScheme,
} from "@utilitywarehouse/customer-ui-theme";
import { MuiTheme, CustomerUITheme, buildTheme } from "../lib/theme";
import { DarkModeContext } from "./DarkModeProvider";

const backdropLevels: BackdropLevel[] = [
  "level0",
  "level1",
  "level2",
  "level3",
  "level4",
];

interface Theme {
  customerUITheme: CustomerUITheme;
  muiTheme: MuiTheme;
}

type Themes = Record<BackdropLevel, Theme>;

interface ThemeContextValue {
  getCustomerUITheme: (level: BackdropLevel) => CustomerUITheme;
  getMuiTheme: (level: BackdropLevel) => MuiTheme;
}

const getThemes = (colorScheme: ColorScheme): Themes => {
  const themes: Partial<Themes> = {};
  backdropLevels.forEach((level) => {
    const customerUITheme = getTheme(colorScheme, level);
    const muiTheme = buildTheme(customerUITheme);
    themes[level] = {
      customerUITheme,
      muiTheme,
    };
  });

  return themes as Themes;
};

export const ThemeContext = React.createContext<ThemeContextValue>({
  getCustomerUITheme: () => ({} as CustomerUITheme),
  getMuiTheme: () => ({} as MuiTheme),
});

export interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const { darkModeEnabled } = React.useContext(DarkModeContext);
  const colorScheme = React.useMemo(() => {
    return darkModeEnabled ? "dark" : "light";
  }, [darkModeEnabled]);

  const themes: Themes = React.useMemo(() => {
    return getThemes(colorScheme);
  }, [darkModeEnabled]);

  const getCustomerUITheme = React.useCallback(
    (level: BackdropLevel): CustomerUITheme => {
      return themes[level].customerUITheme;
    },
    [themes]
  );

  const getMuiTheme = React.useCallback(
    (level: BackdropLevel): MuiTheme => {
      return themes[level].muiTheme;
    },
    [themes]
  );

  return (
    <ThemeContext.Provider value={{ getCustomerUITheme, getMuiTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
