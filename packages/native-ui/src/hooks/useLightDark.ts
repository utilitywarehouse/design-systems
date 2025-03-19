/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UnistylesRuntime } from 'react-native-unistyles';

const useLightDark = (light: any, dark: any) => {
  return UnistylesRuntime.getTheme() === 'light' ? light : dark;
};

export default useLightDark;
