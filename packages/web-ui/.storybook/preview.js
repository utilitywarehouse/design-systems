import '@utilitywarehouse/fontsource';
import '@utilitywarehouse/css-reset';
import { breakpoints } from '../src';
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

const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Web UI',
          ['Introduction', 'Guides', 'Tokens', 'Layout', 'Typography', 'Components'],
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
};

export default preview;
