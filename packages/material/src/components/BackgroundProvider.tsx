import { BackdropLevel, Theme } from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import {
  BackgroundContext,
  DarkModeContext,
  MuiThemeProvider,
  StyledEngineProvider,
} from "..";
import { ThemeVariantsContext } from "./ThemeVariantsProvider";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

export interface BackgroundProviderProps {
  backgroundColor: BackdropLevel;
}

const BackgroundProvider: React.FunctionComponent<BackgroundProviderProps> = ({
  backgroundColor,
  children,
}) => {
  const { getCustomerUITheme, getMuiTheme } = React.useContext(
    ThemeVariantsContext
  );
  const { darkModeEnabled } = React.useContext(DarkModeContext);

  const customerUITheme = React.useMemo(() => {
    return getCustomerUITheme(backgroundColor);
  }, [getCustomerUITheme, darkModeEnabled, backgroundColor]);

  const muiTheme = React.useMemo(() => {
    return getMuiTheme(backgroundColor);
  }, [getMuiTheme, darkModeEnabled, backgroundColor]);

  return (
    <StyledEngineProvider injectFirst>
      {/* https://github.com/mui-org/material-ui/issues/24282 */}
      <EmotionThemeProvider theme={muiTheme}>
        <MuiThemeProvider theme={muiTheme}>
          <BackgroundContext.Provider value={{ theme: customerUITheme }}>
            {children}
          </BackgroundContext.Provider>
        </MuiThemeProvider>
      </EmotionThemeProvider>
    </StyledEngineProvider>
  );
};

export const useTheme = (): Theme => {
  const { theme } = React.useContext(BackgroundContext);
  return theme;
};

export default BackgroundProvider;
