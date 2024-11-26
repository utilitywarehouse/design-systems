import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { SyntaxHighlighter } from '@storybook/components';
import { Analytics } from '@vercel/analytics/react';

import { colorsCommon } from '@utilitywarehouse/colour-system';
import '@utilitywarehouse/css-reset';
import '@utilitywarehouse/fontsource';

import { breakpoints, Box, Text, Strong, TextLink, Heading } from '../src';
import diff from 'react-syntax-highlighter/dist/esm/languages/prism/diff';

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
    docs: {
      components: {
        p: props => <Text {...props} />,
        strong: props => <Strong {...props} />,
        li: props => <Text component="li" {...props} />,
        a: props => <TextLink {...props} />,
        h1: props => <Heading variant="h1" {...props} />,
        h2: props => <Heading variant="h2" {...props} />,
        h3: props => <Heading variant="h3" {...props} />,
        h4: props => <Heading variant="h4" {...props} />,
      },
    },
    options: {
      storySort: {
        order: [
          'Web UI',
          ['Introduction', 'Guides', 'Documentation', 'Design Guidelines', 'Stories'],
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
        <Box>
          <Analytics />
          <Story />
        </Box>
      );
    },
  ],
};

export default preview;
