import { px } from "./helpers";

const fonts = {
  primary: "Aeonik, sans-serif",
  secondary: "Work Sans, sans-serif",
  data: "Roboto Mono, monospace",
  alternative: "Arial, sans-serif",
};

const fontWeights = {
  primary: 700,
  secondary: {
    semibold: 600,
    regular: 400,
  },
  data: 300,
  alternative: {
    regular: 400,
    bold: 700,
  },
};

const typography = {
  fonts: {
    ...fonts,
    heading: fonts.primary,
    subheading: fonts.secondary,
    body: fonts.secondary,
    monospace: fonts.data,
  },
  fontWeights: {
    ...fontWeights,
    heading: fontWeights.primary,
    subheading: fontWeights.secondary.semibold,
    body: fontWeights.secondary.regular,
  },
  fontSizes: {
    desktop: {
      headings: {
        h1: px(64),
        h2: px(40),
        h3: px(33),
        h4: px(20),
        h5: px(16),
      },
      body: {
        p: px(20),
        label: px(13),
        small: px(16),
      },
    },
    tablet: {
      headings: {
        h1: px(52),
        h2: px(32),
        h3: px(24),
        h4: px(16),
        h5: px(12),
      },
      body: {
        p: px(18),
        label: px(15),
        small: px(12),
      },
    },
    mobile: {
      headings: {
        h1: px(40),
        h2: px(28),
        h3: px(18),
        h4: px(14),
        h5: px(12),
      },
      body: {
        p: px(16),
        label: px(14),
        small: px(12),
      },
    },
  },
  lineHeight: {
    desktop: {
      headings: {
        h1: 1.125,
        h2: 1.125,
        h3: 1.121,
        h4: 1.15,
        h5: 1.125,
      },
      body: {
        p: 1.6,
        label: 1.615,
        small: 1.625,
      },
    },
    tablet: {
      headings: {
        h1: 1.115,
        h2: 1.125,
        h3: 1.125,
        h4: 1.125,
        h5: 1.167,
      },
      body: {
        p: 1.611,
        label: 1.733,
        small: 1.667,
      },
    },
    mobile: {
      headings: {
        h1: 1.125,
        h2: 1.143,
        h3: 1.111,
        h4: 1.143,
        h5: 1.167,
      },
      body: {
        p: 1.625,
        label: 1.643,
        small: 1.583,
      },
    },
  },
};

type Typography = typeof typography;

export { typography, Typography };
