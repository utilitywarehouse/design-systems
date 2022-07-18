import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache, { Options as CreateCacheOptions } from "@emotion/cache";
import { StylesProvider, StylesProviderProps } from "..";
import { getRandomString } from "../lib/random";
import { buildTheme } from "../lib/theme";
import { StyledEngineProvider } from "@mui/styled-engine";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export interface CustomerUIProviderProps {
  styleProviderProps?: StylesProviderProps;
  emotionCacheOptions?: CreateCacheOptions;
}

const CustomerUIProvider: React.FunctionComponent<CustomerUIProviderProps> = ({
  styleProviderProps,
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
        <StyledEngineProvider injectFirst>
          <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
        </StyledEngineProvider>
      </StylesProvider>
    </CacheProvider>
  );
};

export default CustomerUIProvider;
