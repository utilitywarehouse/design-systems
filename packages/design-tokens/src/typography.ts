const fonts = {
  primary: "Aeonik, Arial, sans-serif",
  secondary: "Work Sans, Arial, sans-serif",
};

const fontWeights = {
  primary: 700,
  secondary: {
    semibold: 600,
    regular: 400,
  },
  data: 300,
};

type Fonts = typeof fonts;
type FontWeights = typeof fontWeights;

export { fonts, Fonts, fontWeights, FontWeights };
