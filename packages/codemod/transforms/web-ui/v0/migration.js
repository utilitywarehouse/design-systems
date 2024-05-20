import transformImportPaths from './import-paths';
import transformBackgroundToBox from './background-to-box';

export default function transformer(file, api, options) {
  file.source = transformImportPaths(file, api, options);
  file.source = transformBackgroundToBox(file, api, options);
  return file.source;
}
