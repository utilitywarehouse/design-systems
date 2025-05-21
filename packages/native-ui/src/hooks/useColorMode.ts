import { useUnistyles } from 'react-native-unistyles';

const useColorMode = (): 'light' | 'dark' => {
  const {
    theme: { colorMode },
  } = useUnistyles();

  return colorMode;
};

export default useColorMode;
