import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import type { Preview } from '@storybook/react';
import React from 'react';
import { GluestackUIProvider, Box, config } from '@utilitywarehouse/native-ui';

const preview: Preview = {
  decorators: [
    withBackgrounds,
    Story => {
      return (
        <GluestackUIProvider config={config}>
          <Box flex={1} p="$10">
            <Story />
          </Box>
        </GluestackUIProvider>
      );
    },
  ],

  parameters: {
    backgrounds: {
      default: 'plain',
      values: [
        { name: 'plain', value: 'white' },
        { name: 'warm', value: 'hotpink' },
        { name: 'cool', value: 'deepskyblue' },
      ],
    },
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
