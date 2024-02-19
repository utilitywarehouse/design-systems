import type { Preview, Decorator } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Center, GluestackUIProvider, config } from '@utilitywarehouse/native-ui';
import { PlatformContextProvider } from '../contexts/PlatformContext';
import { useStoryContext, useArgs, useGlobals } from '@storybook/preview-api';
import '../assets/style.css';
import StoryWrap from '../components/StoryWrap';

const lightColour: string = '#fff';
const darkColour: string = '#1d1d1d';

export const decorators: Decorator[] = [
  Story => {
    const [globals, updateGlobals] = useGlobals();
    const theme = globals.backgrounds?.value === lightColour ? 'light' : 'dark';
    const [args] = useArgs();
    const { id, viewMode } = useStoryContext();

    console.log(theme);

    return (
      <GluestackUIProvider colorMode={theme} config={config}>
        <PlatformContextProvider
          args={args}
          id={id}
          viewMode={viewMode}
          colourMode={theme}
          platform={globals.device}
        >
          <Center>{viewMode === 'story' ? <StoryWrap>{<Story />}</StoryWrap> : <Story />}</Center>
        </PlatformContextProvider>
      </GluestackUIProvider>
    );
  },
];

const preview: Preview = {
  globals: {
    device: 'web',
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    native: {
      clickHome: false,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: lightColour,
        },
        {
          name: 'dark',
          value: darkColour,
        },
      ],
    },
  },
};

export default preview;
