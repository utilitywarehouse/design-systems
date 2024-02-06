import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import type { Preview } from '@storybook/react';
import React from 'react';
import { GluestackUIProvider, Box, config } from '@utilitywarehouse/native-ui';
import { useColorScheme } from 'react-native';

const preview: Preview = {
  decorators: [
    withBackgrounds,
    Story => {
      const theme = useColorScheme() === 'dark' ? 'dark' : 'light';
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
