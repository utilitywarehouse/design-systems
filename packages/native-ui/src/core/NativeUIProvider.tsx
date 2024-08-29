import React, { ComponentProps, useEffect } from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '../config';
import { breakpoints } from './breakpoints';
import { darkTheme, lightTheme } from './themes';
import { UnistylesRegistry, UnistylesRuntime } from 'react-native-unistyles';

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  })
  .addConfig({
    adaptiveThemes: true,
  });

const NativeUIProvider: React.FC<Omit<ComponentProps<typeof GluestackUIProvider>, 'config'>> = ({
  children,
  ...props
}) => {
  useEffect(() => {
    UnistylesRuntime.setTheme(props.colorMode === 'dark' ? 'dark' : 'light');
  }, [props.colorMode]);
  return (
    <GluestackUIProvider config={config} {...props}>
      {children}
    </GluestackUIProvider>
  );
};

export default NativeUIProvider;
