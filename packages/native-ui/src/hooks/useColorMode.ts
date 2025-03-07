import { useUnistyles } from 'react-native-unistyles';

const useColorMode = (): 'light' | 'dark' => {
  const {
    theme: { colorMode },
  } = useUnistyles();

  return colorMode as 'light' | 'dark';
};

export default useColorMode;
