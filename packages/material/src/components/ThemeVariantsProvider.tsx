import React from "react";
import { getTheme } from "@utilitywarehouse/customer-ui-theme";
import { MuiTheme, CustomerUITheme, buildTheme } from "../lib/theme";
import { DarkModeContext } from "./DarkModeProvider";
import { BackdropLevel, ColorScheme } from "..";

const backdropLevels: BackdropLevel[] = [
  "level0",
  "level1",
  "level3",
  "level4",
  "level5",
];

interface Theme {
  customerUITheme: CustomerUITheme;
  muiTheme: MuiTheme;
}

type Themes = Record<BackdropLevel, Theme>;

interface ThemeVariantsContextValue {
  getCustomerUITheme: (level: BackdropLevel) => CustomerUITheme;
  getMuiTheme: (level: BackdropLevel) => MuiTheme;
}

const getThemes = (colorScheme: ColorScheme): Themes => {
  const themes: Partial<Themes> = {};
  backdropLevels.forEach((level: BackdropLevel) => {
    const customerUITheme = getTheme(colorScheme, level);
    const muiTheme = buildTheme();
    themes[level] = {
      customerUITheme,
      muiTheme,
    };
  });

  return themes as Themes;
};

export const ThemeVariantsContext =
  React.createContext<ThemeVariantsContextValue>({
    getCustomerUITheme: () => ({} as CustomerUITheme),
    getMuiTheme: () => ({} as MuiTheme),
  });

export interface ThemeVariantsProviderProps {
  children?: React.ReactNode;
}

const ThemeVariantsProvider: React.FunctionComponent<
  ThemeVariantsProviderProps
> = ({ children }) => {
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
    <ThemeVariantsContext.Provider value={{ getCustomerUITheme, getMuiTheme }}>
      {children}
    </ThemeVariantsContext.Provider>
  );
};

export default ThemeVariantsProvider;
