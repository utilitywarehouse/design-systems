import { API, FileInfo, Options } from 'jscodeshift';
import transformCwuiImportPaths from './cwui-import-paths';

export default function transformer(file: FileInfo, api: API, options: Options) {
  file.source = transformCwuiImportPaths(file, api, options);
  return file.source;
}
