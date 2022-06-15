import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache, { Options as CreateCacheOptions } from "@emotion/cache";
import {
  StylesProvider,
  StylesProviderProps,
  DarkModeProvider,
  DarkModeProviderProps,
} from "..";
import { getRandomString } from "../lib/random";
import { buildTheme } from "../lib/theme";
import { StyledEngineProvider } from "@mui/styled-engine";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export interface CustomerUIProviderProps {
  styleProviderProps?: StylesProviderProps;
  darkModeProviderProps?: DarkModeProviderProps;
  emotionCacheOptions?: CreateCacheOptions;
}

const CustomerUIProvider: React.FunctionComponent<CustomerUIProviderProps> = ({
  styleProviderProps,
  darkModeProviderProps,
  emotionCacheOptions,
  children,
}) => {
  const muiTheme = buildTheme();
  return (
    <CacheProvider
      value={createCache({
        key: getRandomString(),
        ...emotionCacheOptions,
      })}
    >
      <StylesProvider {...styleProviderProps}>
        <DarkModeProvider {...darkModeProviderProps}>
          <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
          </StyledEngineProvider>
        </DarkModeProvider>
      </StylesProvider>
    </CacheProvider>
  );
};

export default CustomerUIProvider;
