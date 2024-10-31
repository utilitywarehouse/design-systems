import type { Preview, Decorator } from '@storybook/react';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Center, NativeUIProvider } from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import { PlatformContextProvider } from '../contexts/PlatformContext';
import { useStoryContext, useArgs, useGlobals, getQueryParams } from '@storybook/preview-api';
import '../assets/style.css';
import StoryWrap from '../docs/components/StoryWrap';
import { useDarkMode, DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { addons } from '@storybook/addons';
import { UPDATE_GLOBALS } from '@storybook/core-events';
import { DocsContainer as BaseContainer, DocsContainerProps } from '@storybook/blocks';
import { themeDark, themeLight } from './themes';
import { Analytics } from '@vercel/analytics/react';
import { Platform } from 'react-native';

const lightColour = '#fff';
const darkColour = '#1d1d1d';

export const decorators: Decorator[] = [
  Story => {
    const [globals] = useGlobals();
    const [args] = useArgs();
    const colorScheme = useDarkMode() ? 'dark' : 'light';
    const { id, viewMode } = useStoryContext();
    const device = globals.device;

    return viewMode === 'story' ? (
      <NativeUIProvider colorMode={colorScheme}>
        <Analytics endpoint={window.top?.location?.href} />
        <PlatformContextProvider
          args={args}
          id={id}
          viewMode={viewMode}
          colourMode={colorScheme}
          platform={globals.device}
        >
          {/* @ts-expect-error */}
          <Box
            bg={colorScheme === 'light' ? lightColour : darkColour}
            p={device !== 'web' ? 0 : 20}
            position={'absolute'}
            top={0}
            left={0}
            {...(Platform.OS === 'web'
              ? {
                  width: '100vw',
                  height: '100vh',
                  zIndex: device !== 'web' ? -1 : 0,
                }
              : {})}
          >
            <Center>
              <StoryWrap>
                <Story />
              </StoryWrap>
            </Center>
          </Box>
        </PlatformContextProvider>
      </NativeUIProvider>
    ) : (
      <NativeUIProvider colorMode={colorScheme}>
        <Center padding={20} bg={colorScheme === 'light' ? lightColour : darkColour}>
          <Story />
        </Center>
      </NativeUIProvider>
    );
  },
];

let channel = addons.getChannel();

const storyListener = darkMode => {
  const { viewMode } = getQueryParams();
  if (viewMode === 'story') {
    channel.emit(UPDATE_GLOBALS, {
      globals: {
        theme: darkMode ? 'dark' : 'light',
      },
    });
  }
};

function setupBackgroundListener() {
  channel.removeListener(DARK_MODE_EVENT_NAME, storyListener);
  channel.addListener(DARK_MODE_EVENT_NAME, storyListener);
}

setupBackgroundListener();

export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = ({ children, context }) => {
  const [isDark, setDark] = useState(false);
  const colorScheme = useDarkMode() ? 'dark' : 'light';

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel]);

  return (
    <NativeUIProvider colorMode={colorScheme}>
      <BaseContainer theme={isDark ? themeDark : themeLight} context={context}>
        <Analytics endpoint={window.top?.location?.href} />
        {children}
      </BaseContainer>
    </NativeUIProvider>
  );
};

const preview: Preview = {
  globals: {
    device: 'web',
  },

  parameters: {
    docs: {
      container: DocsContainer,
    },
    layout: 'fullscreen',
    darkMode: {
      stylePreview: true,
      dark: {
        ...themeDark,
      },
      light: {
        ...themeLight,
      },
    },
    options: {
      storySort: {
        order: [
          'Native UI',
          [
            'Introduction',
            'Guides',
            [
              'Using Storybook',
              'Tokens',
              'Styling',
              [
                'Overview',
                'Theme Tokens',
                'createStyleSheet',
                'useStyles',
                'Dynamic Functions',
                'Color Mode',
                'Fonts',
              ],
            ],
            'Components',
            [
              'All',
              'Alert',
              'Badge',
              'Box',
              'Button',
              'Center',
              'Checkbox',
              'Divider',
              'Form Field',
              'Heading',
              'HStack',
              'Icons',
              'Input',
              'IconButton',
              'List',
              'Pressable',
              'Radio',
              'Skeleton',
              'Spinner',
              'Text',
              'VStack',
              'Lab',
            ],
          ],
          'Colour System',
          ['Introduction', 'Common', 'Colors Light'],
        ],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
};

export default preview;
