import { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@utilitywarehouse/fontsource';
import '@utilitywarehouse/css-reset';
import '@utilitywarehouse/colour-system/css/colours.css';
import '../styles.css';
import '../src/storybook/styles.css';
import { breakpoints } from '../../web-ui/src/tokens';

const customViewports = {
  mobile: {
    name: 'mobile',
    styles: {
      width: `${breakpoints.tablet / 2}px`,
      height: '100vh',
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: `${breakpoints.tablet}px`,
      height: '100vh',
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: `${breakpoints.desktop}px`,
      height: '100vh',
    },
  },
  wide: {
    name: 'wide',
    styles: {
      width: `${breakpoints.wide}px`,
      height: '100vh',
    },
  },
  ...INITIAL_VIEWPORTS,
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: customViewports,
    },
  },
};

export default preview;
