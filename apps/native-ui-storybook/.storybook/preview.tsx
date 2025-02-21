import React, { useEffect, useState } from 'react';
import { ScrollView, useColorScheme } from 'react-native';
import { useArgs } from '@storybook/preview-api';
import { Linking } from 'react-native';
import { navigate } from './utils';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { UnistylesRuntime } from 'react-native-unistyles';

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => {
      const theme = useColorScheme() === 'dark' ? 'dark' : 'light';
      const [args, updateArgs] = useArgs();
      const [themeColourMode, setColourMode] = useState<'dark' | 'light'>(theme);
      useEffect(() => {
        Linking.addEventListener('url', event => {
          const url = new URL(event.url ?? '');
          const params = new URLSearchParams(url.search);
          const { colourMode, storyId, ...rest } = Object.fromEntries(params.entries());

          // Convert "true" and "false" strings in args to boolean values
          const convertedArgs = Object.fromEntries(
            Object.entries(rest).map(([key, value]) => [
              key,
              value === 'true' ? true : value === 'false' ? false : value,
            ])
          );

          navigate({ storyId });
          updateArgs({
            ...args,
            ...convertedArgs,
          });
          if (colourMode) {
            setColourMode(colourMode as 'dark' | 'light');
            if (UnistylesRuntime.themeName !== colourMode) {
              UnistylesRuntime.setTheme(colourMode as 'dark' | 'light');
            }
          }
        });
        return () => Linking.removeAllListeners('url');
      }, []);

      useEffect(() => {
        setColourMode(theme);
        if (UnistylesRuntime.themeName !== theme) {
          UnistylesRuntime.setTheme(theme);
        }
      }, [theme]);

      const bg = (() => {
        switch (args.surface) {
          case 'midnight':
            return colorsCommon.brandMidnight;
          case 'purple':
            return colorsCommon.brandPrimaryPurple;
          default:
            return themeColourMode === 'dark' ? '#1D1D1D' : '$brandWhite';
        }
      })();

      return (
        <ScrollView style={{ flex: 1, backgroundColor: bg }} contentContainerStyle={{ padding: 8 }}>
          <Story />
        </ScrollView>
      );
    },
  ],
};

export default preview;
