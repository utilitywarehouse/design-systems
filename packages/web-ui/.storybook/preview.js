import '@utilitywarehouse/fontsource';
import ThemeProvider from '../src/ThemeProvider';
import { breakpoints } from '@utilitywarehouse/customer-ui-design-tokens';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { MDXProvider } from '@mdx-js/react';
import { DocsContainer as StorybookDocsContainer } from '@storybook/blocks';
import Heading from '../src/Heading';
import Text from '../src/Text';

const H1 = props => (
  <Heading component="h1" variant="h1" color="secondary" gutterBottom {...props} />
);
const H2 = props => (
  <Heading component="h2" variant="h2" color="secondary" gutterBottom {...props} />
);
const H3 = props => (
  <Heading component="h3" variant="h3" color="secondary" gutterBottom {...props} />
);
const H4 = props => (
  <Heading component="h4" variant="h4" color="secondary" gutterBottom {...props} />
);
const Paragraph = props => <Text paragraph component="p" variant="body" {...props} />;

export const DocsContainer = props => (
  <ThemeProvider>
    <MDXProvider
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        p: Paragraph,
      }}
    >
      <StorybookDocsContainer {...props} />
    </MDXProvider>
  </ThemeProvider>
);

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
  docs: {
    container: DocsContainer,
  },
};

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
