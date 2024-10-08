import React, { ComponentProps, useEffect } from 'react';
import { GluestackUIProvider, useColorMode } from '@gluestack-ui/themed';
import { config } from '../config';
import { breakpoints } from './breakpoints';
import { darkTheme, lightTheme } from './themes';
import {
  UnistylesRegistry,
  UnistylesRuntime,
  UnistylesThemes,
  useInitialTheme,
} from 'react-native-unistyles';

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  })
  .addConfig({
    adaptiveThemes: false,
  });

const NativeUIProvider: React.FC<
  Omit<ComponentProps<typeof GluestackUIProvider>, 'config'> & { colorMode?: keyof UnistylesThemes }
> = ({ children, colorMode, ...props }) => {
  const systemColorMode = useColorMode();
  useInitialTheme(colorMode ?? (systemColorMode as 'light' | 'dark'));
  useEffect(() => {
    UnistylesRuntime.setTheme(colorMode === 'dark' ? 'dark' : 'light');
  }, [colorMode]);
  return (
    <GluestackUIProvider config={config} colorMode={colorMode} {...props}>
      {children}
    </GluestackUIProvider>
  );
};

export default NativeUIProvider;
