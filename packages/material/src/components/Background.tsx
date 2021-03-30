import {
  BackdropLevel,
  Theme,
  getTheme,
} from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import { Box, BoxProps, MuiThemeProvider } from "../";
import { DarkModeContext } from "./DarkModeProvider";
import { ThemeContext } from "./ThemeProvider";

interface BackgroundContextValue {
  theme: Theme;
}

export const BackgroundContext = React.createContext<BackgroundContextValue>({
  theme: getTheme("light", "level3"),
});

export const BackgroundConsumer = BackgroundContext.Consumer;

export interface BackgroundProps extends BoxProps {
  children?: React.ReactNode;
  backgroundColor: BackdropLevel;
}

const Background: React.FunctionComponent<BackgroundProps> = ({
  children,
  backgroundColor,
  ...props
}) => {
  const { getCustomerUITheme, getMuiTheme } = React.useContext(ThemeContext);
  const { darkModeEnabled } = React.useContext(DarkModeContext);

  const customerUITheme = React.useMemo(() => {
    return getCustomerUITheme(backgroundColor);
  }, [getCustomerUITheme, darkModeEnabled, backgroundColor]);

  const backgroundColorStyle = React.useMemo(() => {
    return customerUITheme.components.backdrop.backgroundColor;
  }, [backgroundColor, customerUITheme]);

  const muiTheme = React.useMemo(() => {
    return getMuiTheme(backgroundColor);
  }, [getMuiTheme, darkModeEnabled, backgroundColor]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <BackgroundContext.Provider value={{ theme: customerUITheme }}>
        <Box
          {...props}
          sx={{
            ...props.sx,
            backgroundColor: backgroundColorStyle,
          }}
        >
          {children}
        </Box>
      </BackgroundContext.Provider>
    </MuiThemeProvider>
  );
};

export default Background;
