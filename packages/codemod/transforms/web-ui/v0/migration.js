const transformImportPaths = require('./import-paths');
const transformBackgroundToBox = require('./background-to-box');

function transformer(file, api, options) {
  file.source = transformImportPaths(file, api, options);
  file.source = transformBackgroundToBox(file, api, options);
  return file.source;
}

module.exports = transformer;
