import React, { ComponentProps, useEffect } from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '../config';
import { breakpoints } from './breakpoints';
import { darkTheme, lightTheme } from './themes';
import {
  UnistylesRegistry,
  UnistylesRuntime,
  UnistylesThemes,
  useInitialTheme,
  UnistylesProvider,
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
> = ({ children, colorMode = 'light', ...props }) => {
  useInitialTheme(colorMode);
  useEffect(() => {
    UnistylesRuntime.setTheme(colorMode === 'dark' ? 'dark' : 'light');
  }, [colorMode]);
  return (
    <UnistylesProvider>
      <GluestackUIProvider config={config} colorMode={colorMode} {...props}>
        {children}
      </GluestackUIProvider>
    </UnistylesProvider>
  );
};

export default NativeUIProvider;
