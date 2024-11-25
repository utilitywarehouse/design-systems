import { useStyles } from 'react-native-unistyles';

const useTheme = () => {
  const { theme } = useStyles();
  return theme;
};

export default useTheme;
