import React from "react";
import {
  StylesProvider,
  StylesProviderProps,
  ThemeProvider,
  DarkModeProvider,
  DarkModeProviderProps,
} from "..";

export interface UIProviderProps {
  styleProviderProps?: StylesProviderProps;
  darkModeProviderProps?: DarkModeProviderProps;
}

const UIProvider: React.FunctionComponent<UIProviderProps> = ({
  styleProviderProps,
  darkModeProviderProps,
  children,
}) => (
  <StylesProvider {...styleProviderProps}>
    <DarkModeProvider {...darkModeProviderProps}>
      <ThemeProvider>{children}</ThemeProvider>
    </DarkModeProvider>
  </StylesProvider>
);

export default UIProvider;
