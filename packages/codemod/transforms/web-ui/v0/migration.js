import transformImportPaths from './import-paths';

export default function transformer(file, api, options) {
  file.source = transformImportPaths(file, api, options);
  return file.source;
}
