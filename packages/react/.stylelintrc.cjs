module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-media-use-custom-media'],
  rules: {
    'csstools/media-use-custom-media': ['known', { importFrom: ['./src/styles/breakpoints.css'] }],
    'at-rule-no-unknown': [true, { ignoreAtRules: ['breakpoints'] }],
    // Enforce prefixes on classnames and keyframes
    'selector-class-pattern': /^((mobile|tablet|desktop|wide):)?-?uw-([a-zA-Z\d]|-)+$/,
    'custom-property-pattern': /([a-zA-Z\d]|-)+$/,
    'keyframes-name-pattern': /^uw-([a-z]|-)+$/,
  },
};
