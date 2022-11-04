import * as React from 'react';
import { breakpoints } from '@utilitywarehouse/customer-ui-design-tokens';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from '@utilitywarehouse/uw-web-ui-react';
import '@utilitywarehouse/uw-ui-fonts';

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
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: customerUiViewports,
  },
  chromatic: { disableSnapshot: false },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
