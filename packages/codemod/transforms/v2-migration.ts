import { API, FileInfo, Options } from 'jscodeshift';
import transformBackgroundColorLevelName from './background-color-level-name';
import transformButtonVariantProp from './button-variant-prop';
import transformButtonSizeProp from './button-size-prop';
import transformTopLevelImports from './top-level-imports';
import transformUseThemeHook from './use-theme-hook';

/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 * @param {import('jscodeshift').Options} options
 */
export default function transformer(file: FileInfo, api: API, options: Options) {
  file.source = transformUseThemeHook(file, api, options); // this should be run before transforming top level imports
  file.source = transformTopLevelImports(file, api, options);
  file.source = transformBackgroundColorLevelName(file, api, options);
  file.source = transformButtonVariantProp(file, api, options);
  file.source = transformButtonSizeProp(file, api, options);
  return file.source;
}
