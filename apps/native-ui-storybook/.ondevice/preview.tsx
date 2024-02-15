import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';
import { GluestackUIProvider, Box, config } from '@utilitywarehouse/native-ui';
import { useColorScheme } from 'react-native';
import { useArgs, useStoryContext } from '@storybook/preview-api';
import { Linking } from 'react-native';
import { navigate } from './utils';

const preview: Preview = {
  decorators: [
    withBackgrounds,
    Story => {
      const theme = useColorScheme() === 'dark' ? 'dark' : 'light';
      const [args, updateArgs] = useArgs();
      const { id } = useStoryContext();
      useEffect(() => {
        Linking.addEventListener('url', event => {
          const url = new URL(event.url ?? '');
          const params = new URLSearchParams(url.search);
          const { storyId, ...rest } = Object.fromEntries(params.entries());

          navigate({ storyId });
          updateArgs({
            ...args,
            ...rest,
          });
        });
        return () => Linking.removeAllListeners('url');
      }, []);

      return (
        <GluestackUIProvider colorMode={theme} config={config}>
          <Box flex={1} m="$10">
            <Story />
          </Box>
        </GluestackUIProvider>
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
