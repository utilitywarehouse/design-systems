export default ({ config }) => ({
  ...config,
  name: 'Native UI',
  slug: 'native-ui',
  scheme: 'native-ui',
  owner: 'utilitywarehouse',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  plugins: [
    [
      'expo-xml-font',
      [
        {
          name: 'Aeonik',
          folder: './assets/fonts',
          variants: [
            { fontFile: 'aeonik_bold', fontWeight: 700 },
            { fontFile: 'aeonik_regular', fontWeight: 400 },
          ],
        },
        {
          name: 'Work Sans',
          folder: './assets/fonts',
          variants: [
            { fontFile: 'worksans_black', fontWeight: 900 },
            { fontFile: 'worksans_bold', fontWeight: 700 },
            { fontFile: 'worksans_extrabold', fontWeight: 800 },
            { fontFile: 'worksans_extralight', fontWeight: 200 },
            { fontFile: 'worksans_light', fontWeight: 300 },
            { fontFile: 'worksans_medium', fontWeight: 500 },
            { fontFile: 'worksans_regular', fontWeight: 400 },
            { fontFile: 'worksans_semibold', fontWeight: 600 },
            { fontFile: 'worksans_thin', fontWeight: 100 },
          ],
        },
      ],
    ],
  ],
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
