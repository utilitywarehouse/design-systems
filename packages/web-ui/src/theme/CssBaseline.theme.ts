import { Components } from '@mui/material/styles';
import { fontWeights } from '@utilitywarehouse/design-tokens';

/* https://github.com/hankchizljaw/modern-css-reset/blob/master/src/reset.css */
export const cssBaselineThemeOverrides: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      /* https://github.com/hankchizljaw/modern-css-reset/issues/30 */
      "ul[role='list'], ol[role='list']": {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
      /* Set core root defaults */
      'html:focus-within': {
        scrollBehavior: 'smooth',
      },
      /* Set core body defaults */
      body: {
        minHeight: '100vh',
        textRendering: 'optimizeSpeed',
      },
      /* Make images easier to work with */
      'img, picture': {
        maxWidth: '100%',
        display: 'block',
      },
      /* Inherit fonts for inputs and buttons */
      'input, button, textarea, select': {
        font: 'inherit',
      },
      /* Remove all animations and transitions for people that prefer not to see them */
      '@media (prefers-reduced-motion: reduce)': {
        'html:focus-within': {
          scrollBehavior: 'auto',
        },
        '*, *::before, *::after': {
          boxSizing: 'inherit',
          animationDuration: '0.01ms !important',
          animationIterationCount: '1 !important',
          transitionDuration: '0.01ms !important',
          scrollBehavior: 'auto !important',
        },
      },
      'strong, b': {
        fontWeight: fontWeights.secondary.semibold,
      },
    },
  },
};
