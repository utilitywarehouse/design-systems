import StorybookUIRoot from './.ondevice';

import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { UnistylesRuntime } from 'react-native-unistyles';

const App = () => {
  const [loaded] = useFonts({
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    'Aeonik-Bold': require('../../node_modules/@utilitywarehouse/fontsource/files/truetype/Aeonik/Aeonik-Bold.otf'),
    'Aeonik-Regular': require('../../node_modules/@utilitywarehouse/fontsource/files/truetype/Aeonik/Aeonik-Regular.otf'),
    'WorkSans-Black': require('../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-Black.ttf'),
    'WorkSans-Bold': require('../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-Bold.ttf'),
    'WorkSans-ExtraBold': require('../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-ExtraBold.ttf'),
    'WorkSans-ExtraLight': require('../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-ExtraLight.ttf'),
    'WorkSans-Light': require('../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-Medium.ttf'),
    'WorkSans-Regular': require('../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-Regular.ttf'),
    'WorkSans-SemiBold': require('../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-SemiBold.ttf'),
    'WorkSans-Thin': require('../../node_modules/@utilitywarehouse/fontsource/files/truetype/WorkSans/WorkSans-Thin.ttf'),
  });

  useEffect(() => {
    console.log('theme', UnistylesRuntime.themeName);
  }, []);

  if (!loaded) return null;
  return <StorybookUIRoot />;
};

export default App;
