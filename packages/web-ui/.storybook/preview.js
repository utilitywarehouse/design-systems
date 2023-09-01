import '@utilitywarehouse/fontsource';
import '@utilitywarehouse/css-reset';
import { useEffect } from 'react';
import { ThemeProvider, useTheme, breakpoints, Box } from '../src';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { colorsCommon } from '@utilitywarehouse/colour-system';

const customerUiViewports = {
  mobile: {
    name: 'Web UI mobile',
    styles: {
      width: `${breakpoints.tablet / 2}px`,
      height: '100vh',
    },
  },
  tablet: {
    name: 'Web UI tablet',
    styles: {
      width: `${breakpoints.tablet}px`,
      height: '100vh',
    },
  },
  desktop: {
    name: 'Web UI desktop',
    styles: {
      width: `${breakpoints.desktop}px`,
      height: '100vh',
    },
  },
  wide: {
    name: 'Web UI wide',
    styles: {
      width: `${breakpoints.wide}px`,
      height: '100vh',
    },
  },
  ...INITIAL_VIEWPORTS,
};

const StoriesContainer = props => {
  const theme = useTheme();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(
        `%c
    ░█▒█░█░░▒█░░░█░░▒█▒██▀░██▄░░░█▒█░█
    ░▀▄█░▀▄▀▄▀▒░░▀▄▀▄▀░█▄▄▒█▄█▒░░▀▄█░█

    Tip: you can access the documentation \`theme\` object directly in the console.
    `,
        `font-family:monospace;color:${colorsCommon.brandPrimaryPurple};font-size:16px;`
      );
      // Expose the theme as a global variable so people can play with it.
      window.parent.window.theme = theme;
    }
  }, [theme]);
  return <Box {...props} />;
};

const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Web UI',
          ['Introduction', 'Guides', 'Tokens', 'Layout', 'Typography', 'Components', 'Lab'],
          'CSS Reset',
          'Colour System',
          ['Introduction', 'Common', 'Colors'],
        ],
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: colorsCommon.brandWhite,
        },
      ],
    },
    viewport: {
      viewports: customerUiViewports,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => {
      return (
        <ThemeProvider>
          <StoriesContainer>
            <Story />
          </StoriesContainer>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
