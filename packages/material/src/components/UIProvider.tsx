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

export interface UIProviderProps {
  styleProviderProps?: StylesProviderProps;
  darkModeProviderProps?: DarkModeProviderProps;
  emotionCacheOptions?: CreateCacheOptions;
}

const UIProvider: React.FunctionComponent<UIProviderProps> = ({
  styleProviderProps,
  darkModeProviderProps,
  emotionCacheOptions,
  children,
}) => (
  <CacheProvider
    value={createCache({
      key: getRandomString(),
      ...emotionCacheOptions,
    })}
  >
    <StylesProvider {...styleProviderProps}>
      <DarkModeProvider {...darkModeProviderProps}>{children}</DarkModeProvider>
    </StylesProvider>
  </CacheProvider>
);

export default UIProvider;
