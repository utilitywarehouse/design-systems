import useTheme from './useTheme';

const useColorMode = () => {
  const { colorMode } = useTheme();
  return colorMode;
};

export default useColorMode;
