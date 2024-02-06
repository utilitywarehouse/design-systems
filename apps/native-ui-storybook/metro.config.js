const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { FileStore } = require('metro-cache');
const { generate } = require('@storybook/react-native/scripts/generate');

const projectRoot = __dirname;

generate({
  configPath: path.resolve(projectRoot, './.ondevice'),
});

const defaultConfig = getDefaultConfig(projectRoot);

defaultConfig.transformer.unstable_allowRequireContext = true;

defaultConfig.cacheStores = [
  new FileStore({ root: path.join(projectRoot, 'node_modules', '.cache', 'metro') }),
];

defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
  const defaultResolveResult = context.resolveRequest(context, moduleName, platform);

  if (
    process.env.STORYBOOK_ENABLED !== 'true' &&
    defaultResolveResult?.filePath?.includes?.('.ondevice/')
  ) {
    return {
      type: 'empty',
    };
  }

  return defaultResolveResult;
};

// This can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(projectRoot, '../..');

// 1. Watch all files within the monorepo
defaultConfig.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages and in what order
defaultConfig.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
defaultConfig.resolver.disableHierarchicalLookup = true;

module.exports = defaultConfig;
