/* eslint-disable no-undef */
const transformRenameLabButtonSize = require('./rename-lab-button-size');

function transformer(file, api, options) {
  // run this before migrating Button out of lab submodule
  file.source = transformRenameLabButtonSize(file, api, options);
  return file.source;
}

module.exports = transformer;
