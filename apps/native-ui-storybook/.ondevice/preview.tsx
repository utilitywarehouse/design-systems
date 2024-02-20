import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import type { Preview } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { NativeUIProvider, Box, config } from '@utilitywarehouse/native-ui';
import { useColorScheme } from 'react-native';
import { useArgs } from '@storybook/preview-api';
import { Linking } from 'react-native';
import { navigate } from './utils';

const preview: Preview = {
  decorators: [
    withBackgrounds,
    Story => {
      const theme = useColorScheme() === 'dark' ? 'dark' : 'light';
      const [args, updateArgs] = useArgs();
      const [theneColourMode, setColourMode] = useState<'dark' | 'light'>(theme);
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
          }
        });
        return () => Linking.removeAllListeners('url');
      }, []);

      useEffect(() => {
        setColourMode(theme);
      }, [theme]);

      return (
        <NativeUIProvider colorMode={theneColourMode} config={config}>
          <Box flex={1} backgroundColor={theneColourMode === 'dark' ? '#1D1D1D' : '$brandWhite'}>
            <Box m="$10">
              <Story />
            </Box>
          </Box>
        </NativeUIProvider>
      );
    },
  ],

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
