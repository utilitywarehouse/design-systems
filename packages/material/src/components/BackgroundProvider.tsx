import { BackdropLevel } from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import {
  BackgroundContext,
  DarkModeContext,
  MuiThemeProvider,
  ThemeContext,
} from "..";

interface BackgroundProviderProps {
  backgroundColor: BackdropLevel;
}

const BackgroundProvider: React.FunctionComponent<BackgroundProviderProps> = ({
  backgroundColor,
  children,
}) => {
  const { getCustomerUITheme, getMuiTheme } = React.useContext(ThemeContext);
  const { darkModeEnabled } = React.useContext(DarkModeContext);

  const customerUITheme = React.useMemo(() => {
    return getCustomerUITheme(backgroundColor);
  }, [getCustomerUITheme, darkModeEnabled, backgroundColor]);

  const muiTheme = React.useMemo(() => {
    return getMuiTheme(backgroundColor);
  }, [getMuiTheme, darkModeEnabled, backgroundColor]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <BackgroundContext.Provider value={{ theme: customerUITheme }}>
        {children}
      </BackgroundContext.Provider>
    </MuiThemeProvider>
  );
};

export default BackgroundProvider;
