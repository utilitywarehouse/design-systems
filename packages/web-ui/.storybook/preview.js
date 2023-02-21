import '@utilitywarehouse/fontsource';
import ThemeProvider from '../src/ThemeProvider';
import { breakpoints } from '@utilitywarehouse/customer-ui-design-tokens';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customerUiViewports = {
  mobile: {
    name: 'Customer UI mobile',
    styles: {
      width: `${breakpoints.tablet}px`,
      height: '100vh',
    },
  },
  desktop: {
    name: 'Customer UI desktop',
    styles: {
      width: `${breakpoints.desktop}px`,
      height: '100vh',
    },
  },
  ...INITIAL_VIEWPORTS,
};

export const parameters = {
  backgrounds: {
    default: 'light',
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
};

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
