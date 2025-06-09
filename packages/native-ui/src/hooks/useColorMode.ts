import { useEffect, useState } from 'react';
import { UnistylesRuntime, useUnistyles } from 'react-native-unistyles';

const useColorMode = () => {
  const {
    theme: { colorMode: themeColorMode },
  } = useUnistyles();

  const [colorMode, setColorMode] = useState<'light' | 'dark'>(
    UnistylesRuntime.themeName as 'light' | 'dark'
  );

  useEffect(() => {
    if (colorMode === themeColorMode) return;
    setColorMode(themeColorMode);
  }, [themeColorMode, colorMode]);

  return [colorMode, setColorMode] as const;
};

export default useColorMode;
