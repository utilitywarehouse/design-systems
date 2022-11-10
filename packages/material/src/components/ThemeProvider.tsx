import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache, { Options as CreateCacheOptions } from '@emotion/cache';
import { StylesProvider, StylesProviderProps } from '..';
import { getRandomString } from '../utils';
import { StyledEngineProvider } from '@mui/styled-engine';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';

export interface ThemeProviderProps {
  styleProviderProps?: StylesProviderProps;
  emotionCacheOptions?: CreateCacheOptions;
  children?: React.ReactNode;
}

const ThemeProvider = ({
  styleProviderProps,
  emotionCacheOptions,
  children,
}: ThemeProviderProps) => {
  return (
    <CacheProvider
      value={createCache({
        key: getRandomString(),
        ...emotionCacheOptions,
      })}
    >
      <StylesProvider {...styleProviderProps}>
        <StyledEngineProvider injectFirst>
          <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </StyledEngineProvider>
      </StylesProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
