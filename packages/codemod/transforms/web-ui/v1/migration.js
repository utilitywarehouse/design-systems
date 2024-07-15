/* eslint-disable no-undef */
const transformRenameLabButtonSize = require('./rename-lab-button-size');
const transformRenameIconButtonSize = require('./rename-icon-button-size');

function transformer(file, api, options) {
  // run this before migrating Button out of lab submodule
  file.source = transformRenameLabButtonSize(file, api, options);
  file.source = transformRenameIconButtonSize(file, api, options);
  return file.source;
}

module.exports = transformer;
