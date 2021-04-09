import React from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createCache from "@emotion/cache";
import {
  StylesProvider,
  StylesProviderProps,
  ThemeProvider,
  DarkModeProvider,
  DarkModeProviderProps,
} from "..";
import { getRandomString } from "../lib/random";

export interface UIProviderProps {
  styleProviderProps?: StylesProviderProps;
  darkModeProviderProps?: DarkModeProviderProps;
  cacheProviderProps?: React.ProviderProps<EmotionCache>;
}

const UIProvider: React.FunctionComponent<UIProviderProps> = ({
  styleProviderProps,
  darkModeProviderProps,
  cacheProviderProps,
  children,
}) => (
  <CacheProvider
    value={createCache({ key: getRandomString("css") })}
    {...cacheProviderProps}
  >
    <StylesProvider {...styleProviderProps}>
      <DarkModeProvider {...darkModeProviderProps}>
        <ThemeProvider>{children}</ThemeProvider>
      </DarkModeProvider>
    </StylesProvider>
  </CacheProvider>
);

export default UIProvider;
