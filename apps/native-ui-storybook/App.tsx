import StorybookUIRoot from './.ondevice';

import React from 'react';
import { useFonts } from 'expo-font';

export default () => {
  const [loaded] = useFonts({
    'Aeonik-Bold': require('./assets/fonts/Aeonik/Aeonik-Bold.otf'),
    'Aeonik-Regular': require('./assets/fonts/Aeonik/Aeonik-Regular.otf'),

    'WorkSans-Black': require('./assets/fonts/WorkSans/WorkSans-Black.ttf'),
    'WorkSans-Bold': require('./assets/fonts/WorkSans/WorkSans-Bold.ttf'),
    'WorkSans-ExtraBold': require('./assets/fonts/WorkSans/WorkSans-ExtraBold.ttf'),
    'WorkSans-ExtraLight': require('./assets/fonts/WorkSans/WorkSans-ExtraLight.ttf'),
    'WorkSans-Light': require('./assets/fonts/WorkSans/WorkSans-Light.ttf'),
    'WorkSans-Meium': require('./assets/fonts/WorkSans/WorkSans-Medium.ttf'),
    'WorkSans-Regular': require('./assets/fonts/WorkSans/WorkSans-Regular.ttf'),
    'WorkSans-SemiBold': require('./assets/fonts/WorkSans/WorkSans-SemiBold.ttf'),
    'WorkSans-Thin': require('./assets/fonts/WorkSans/WorkSans-Thin.ttf'),
  });

  if (!loaded) return null;
  return <StorybookUIRoot />;
};
