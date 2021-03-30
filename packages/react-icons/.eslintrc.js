module.exports = {
  root: true,
  globals: {
    module: "readonly",
    jest: "readonly",
  },
  env: {
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest"],
};
