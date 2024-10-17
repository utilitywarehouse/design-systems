/* eslint-disable no-undef */
const transformRenameLabButtonSize = require('./rename-lab-button-size');
const transformRenameIconButtonSize = require('./rename-icon-button-size');
const transformUpdateLabImports = require('./update-lab-imports');
const transformTypography = require('./typography-to-heading-and-text');
const transformButton = require('./migrate-button');

function transformer(file, api, options) {
  file.source = transformRenameLabButtonSize(file, api, options); // run this before migrating Button out of lab submodule
  file.source = transformRenameIconButtonSize(file, api, options);
  file.source = transformUpdateLabImports(file, api, options);
  file.source = transformTypography(file, api, options);
  file.source = transformButton(file, api, options);
  return file.source;
}

module.exports = transformer;
