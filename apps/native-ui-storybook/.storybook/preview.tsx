import type { Preview } from '@storybook/react';
import React from 'react';
import { Center, GluestackUIProvider, config } from '@utilitywarehouse/native-ui';

const preview: Preview = {
  decorators: [
    Story => {
      return (
        <GluestackUIProvider config={config}>
          <Center>
            <Story />
          </Center>
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
