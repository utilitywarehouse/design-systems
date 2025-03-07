import { useUnistyles } from 'react-native-unistyles';

const useTheme = () => {
  const { theme } = useUnistyles();
  return theme;
};

export default useTheme;
