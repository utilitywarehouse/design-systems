import type { Preview } from '@storybook/react';
import React from 'react';
import { Center, GluestackUIProvider, config } from '@utilitywarehouse/native-ui';

export const decorators = [
  Story => {
    return (
      <GluestackUIProvider config={config}>
        <Center>
          <Story />
        </Center>
      </GluestackUIProvider>
    );
  },
];

const preview: Preview = {
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
