const purple = "#550091";

const palette = {
  purple,
  primary: purple,
  white: "#ffffff",
  black: "#000000",
  pink: "#f495f9",
  cyan: "#75a7fd",
  apple: "#62dd99",
  rose: "#f25192",
  gold: "#ffd76f",
  grape: "#a66de8",
  midnight: "#1e0a46",
  maroonFlush: "#ce2261",
  jewel: "#1b7d47",
  blueRibbon: "#1d60fe",
  codGray: "#111111",
  accents: {
    pink: "#f495f9",
    cyan: "#75a7fd",
    apple: "#62dd99",
    rose: "#f25192",
    gold: "#ffd76f",
    grape: "#a66de8",
  },
  tints: {
    light: "#f5f0f8",
    mid: "#c4a5db",
    dark: "#905ab9",
    midnight: "#1e0a46",
  },
};

type Palette = typeof palette;

const colors = {
  primary: palette.primary,
  action: palette.cyan,
  line: palette.pink,
  backdrops: {
    light: {
      level0: palette.midnight,
      level1: palette.primary,
      level2: palette.tints.light,
      level3: palette.white,
    },
    dark: { base: palette.codGray },
  },
  messaging: {
    info: palette.midnight,
    alert: palette.rose,
    success: palette.apple,
    warning: palette.gold,
  },
  services: {
    gas: palette.cyan,
    electricity: palette.apple,
    insurance: palette.rose,
    mobile: palette.gold,
    landline: palette.grape,
    broadband: palette.purple,
  },
  inputs: {
    light: {
      error: palette.maroonFlush,
      success: palette.jewel,
      focus: palette.blueRibbon,
    },
    dark: {
      error: palette.rose,
      success: palette.apple,
      focus: palette.cyan,
    },
  },
};

type Colors = typeof colors;

export { palette, Palette, colors, Colors };
