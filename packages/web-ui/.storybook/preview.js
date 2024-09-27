import { Analytics } from '@vercel/analytics/react';
import diff from 'react-syntax-highlighter/dist/esm/languages/prism/diff';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { SyntaxHighlighter } from '@storybook/components';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import '@utilitywarehouse/css-reset';
import '@utilitywarehouse/fontsource';
import { breakpoints, Box } from '../src';

SyntaxHighlighter.registerLanguage('diff', diff);

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

const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Web UI',
          ['Introduction', 'Guides', 'Helpers', 'Layout', 'Typography', 'Components', 'Lab'],
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
        <Box>
          <Analytics />
          <Story />
        </Box>
      );
    },
  ],
};

export default preview;
