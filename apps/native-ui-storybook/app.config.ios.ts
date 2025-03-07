export default ({ config }) => ({
  ...config,
  name: 'Native UI',
  slug: 'native-ui',
  scheme: 'native-ui',
  owner: 'utilitywarehouse',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  extra: {
    storybookEnabled: 'true',
    eas: {
      projectId: '5d5d04e2-5607-4d40-84a9-4d1bdf331ae3',
      owner: 'utilitywarehouse',
    },
  },
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.utilitywarehouse.native-ui',
    infoPlist: {
      LSApplicationQueriesSchemes: ['native-ui'],
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    package: 'com.utilitywarehouse.nativeui',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
});
