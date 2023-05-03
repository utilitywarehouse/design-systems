import * as React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../../packages/web-ui/src/ThemeProvider/ThemeProvider';

const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
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
