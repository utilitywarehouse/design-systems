import '@utilitywarehouse/fontsource';
import ThemeProvider from '../src/ThemeProvider';

export const parameters = {
  backgrounds: {
    default: 'light',
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

