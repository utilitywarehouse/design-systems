import { UnistylesRuntime } from 'react-native-unistyles';

const useTheme = () => {
  const theme = UnistylesRuntime.getTheme();
  return theme;
};

export default useTheme;
