import { classNamePrefix } from '../src/utils';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';

ClassNameGenerator.configure(componentName => componentName.replace('Mui', classNamePrefix));

import '@utilitywarehouse/fontsource';
import { ThemeProvider } from '../src/ThemeProvider';
import { breakpoints } from '../src/tokens';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { MDXProvider } from '@mdx-js/react';
import { DocsContainer as StorybookDocsContainer } from '@storybook/blocks';
import { Heading } from '../src/Heading';
import { Text } from '../src/Text';
import { Box } from '../src/Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';

const components = {
  h1: props => <Heading component="h1" variant="h1" gutterBottom {...props} />,
  h2: props => <Heading component="h2" variant="h2" gutterBottom marginTop={2} {...props} />,
  h3: props => <Heading component="h3" variant="h3" gutterBottom {...props} />,
  h4: props => <Heading component="h4" variant="h4" gutterBottom {...props} />,
  p: props => <Text paragraph component="p" variant="body" {...props} />,
};

export const DocsContainer = props => (
  <ThemeProvider>
    <MDXProvider components={components}>
      <StorybookDocsContainer {...props} />
    </MDXProvider>
  </ThemeProvider>
);

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
  // TODO: get this working!
  // const theme = useTheme();
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     console.log(
  //       `%c
  //   ░█▒█░█░░▒█░░░█░░▒█▒██▀░██▄░░░█▒█░█
  //   ░▀▄█░▀▄▀▄▀▒░░▀▄▀▄▀░█▄▄▒█▄█▒░░▀▄█░█
  //
  //   Tip: you can access the documentation \`theme\` object directly in the console.
  //   `,
  //       `font-family:monospace;color:${colorsCommon.brandPrimaryPurple};font-size:16px;`
  //     );
  //     // Expose the theme as a global variable so people can play with it.
  //     window.theme = theme;
  //   }
  // }, [theme]);
  return <Box padding={4} {...props} />;
};

const preview = {
  parameters: {
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
    docs: {
      container: DocsContainer,
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
