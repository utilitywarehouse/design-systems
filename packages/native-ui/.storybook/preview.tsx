import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import type { Decorator, Preview } from '@storybook/react';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { themes, breakpoints, StyleSheet } from '../src/core';
import '@utilitywarehouse/fontsource';
import { themeDark, themeLight } from './themes';
import { DocsContainer as BaseContainer, DocsContainerProps } from '@storybook/blocks';
import { DARK_MODE_EVENT_NAME, useDarkMode } from 'storybook-dark-mode';
import { addons, useArgs, useGlobals, useStoryContext } from 'storybook/internal/preview-api';
import { EmulatorRenderer } from '@storybook/native-components';
import { Box } from '../build';
import { UnistylesRuntime } from 'react-native-unistyles';

const lightColour = '#fff';
const darkColour = '#1d1d1d';

const ANDROID_API_KEY = process.env.ANDROID_API_KEY; // || 'ncapxlszjomiyae42o3hr2hr34';
const IOS_API_KEY = process.env.IOS_API_KEY; // || 'w7k6nlib4xevw7fxrqp6now7iu';

const urlParams = new URLSearchParams(window.location.search);
const args = urlParams.get('args');
const argsArray = args?.split(',');
const darkModeArg = argsArray?.find(arg => arg.startsWith('darkMode:'));
const [, darkModeValue] = darkModeArg?.split(':') ?? [];

StyleSheet.configure({
  breakpoints,
  themes: themes,
  settings: {
    initialTheme: darkModeValue === '!true' ? 'dark' : 'light',
    adaptiveThemes: false,
    CSSVars: false,
  },
});

let channel = addons.getChannel();

export const decorators: Decorator[] = [
  Story => {
    const [globals] = useGlobals();
    const [args, setArgs] = useArgs();
    const colorScheme = useDarkMode() ? 'dark' : 'light';
    const { id, viewMode } = useStoryContext();

    const storyListener = darkMode => {
      const theme = darkMode ? 'dark' : 'light';
      if (UnistylesRuntime.themeName !== theme) {
        UnistylesRuntime.setTheme(theme);
      }

      setArgs({
        ...args,
        darkMode,
      });
    };

    useEffect(() => {
      const storybookContainer = document.getElementsByTagName('body')[0];
      if (storybookContainer) {
        if (args.surface === 'midnight' || args.inverted) {
          storybookContainer.style.backgroundColor = colorsCommon.brandMidnight;
        } else if (args.surface === 'purple') {
          storybookContainer.style.backgroundColor = colorsCommon.brandPrimaryPurple;
        } else {
          storybookContainer.style.backgroundColor = !args.darkMode ? lightColour : darkColour;
        }
      }
    }, [args.darkMode, args.surface, args.inverted]);

    useEffect(() => {
      if (UnistylesRuntime.themeName !== colorScheme) {
        UnistylesRuntime.setTheme(colorScheme);
      }
      channel.addListener(DARK_MODE_EVENT_NAME, storyListener);
      setArgs({
        ...args,
        darkMode: colorScheme === 'dark',
      });
      return () => channel.removeListener(DARK_MODE_EVENT_NAME, storyListener);
    }, [colorScheme]);

    return viewMode === 'story' ? (
      <Box>
        {globals.device !== 'web' ? (
          <EmulatorRenderer
            platform={globals.device}
            deepLinkBaseUrl="native-ui://story"
            apiKey={(globals.device === 'android' ? ANDROID_API_KEY : IOS_API_KEY) || ''}
            storyParams={{ storyId: id, colourMode: args.darkMode ? 'dark' : 'light' }}
            extraParams={{ ...args }}
          />
        ) : (
          <Story />
        )}
      </Box>
    ) : (
      <Box>
        <Story />
      </Box>
    );
  },
];

export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = ({ children, context }) => {
  const [isDark, setDark] = useState(false);

  const updateDark = dark => {
    setDark(dark);
    const theme = dark ? 'dark' : 'light';
    if (UnistylesRuntime.themeName !== theme) {
      UnistylesRuntime.setTheme(theme);
    }
  };

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, updateDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, updateDark);
  }, [channel]);

  return (
    <BaseContainer theme={isDark ? themeDark : themeLight} context={context}>
      {children}
    </BaseContainer>
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
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
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
          'Introduction',
          'Getting Started',
          'All components',
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
            'Colour System',
            ['Introduction', 'Common', 'Colors Light'],
          ],
          'Components',
          [
            'Alert',
            'Badge',
            'Box',
            'Button',
            'Card',
            'Center',
            'Checkbox',
            'Divider',
            'Form Field',
            'Heading',
            'HStack',
            'Icon Button',
            'Icons',
            'Input',
            'List',
            'Pressable',
            'Radio',
            'Skeleton',
            'Spinner',
            'Switch',
            'Text',
            'VStack',
          ],
          'Lab Components',
        ],
      },
    },
  },
};

export default preview;
