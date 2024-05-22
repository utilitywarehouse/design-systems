/* eslint-disable no-undef */
const transformTypography = require('./typography-to-heading-and-text');

function transformer(file, api, options) {
  file.source = transformTypography(file, api, options);
  return file.source;
}

module.exports = transformer;
