import type { Preview, Decorator } from '@storybook/react';
import React from 'react';
import { Center, GluestackUIProvider, config } from '@utilitywarehouse/native-ui';

import '../assets/style.css';

export const decorators: Decorator[] = [
  (Story, args) => {
    const theme = args.globals.backgrounds?.value ?? '#F8F8F8' === '#F8F8F8' ? 'light' : 'dark';
    return (
      <GluestackUIProvider colorMode={theme} config={config}>
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
