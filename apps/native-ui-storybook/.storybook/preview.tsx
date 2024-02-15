import type { Preview, Decorator } from '@storybook/react';
import React from 'react';
import { Center, GluestackUIProvider, config } from '@utilitywarehouse/native-ui';
import { PlatformContextProvider } from '../contexts/PlatformContext';
import { useStoryContext, useArgs } from '@storybook/preview-api';
import '../assets/style.css';
import StoryWrap from '../components/StoryWrap';

export const decorators: Decorator[] = [
  (Story, { globals }) => {
    const theme = globals.backgrounds?.value ?? '#F8F8F8' === '#F8F8F8' ? 'light' : 'dark';
    const [args] = useArgs();
    const { id, viewMode } = useStoryContext();
    return (
      <GluestackUIProvider colorMode={theme} config={config}>
        <PlatformContextProvider args={args} id={id} viewMode={viewMode}>
          <Center>{viewMode === 'story' ? <StoryWrap>{<Story />}</StoryWrap> : <Story />}</Center>
        </PlatformContextProvider>
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
