import { useStyles } from 'react-native-unistyles';

const useColorMode = () => {
  const {
    theme: { colorMode },
  } = useStyles();
  return colorMode;
};

export default useColorMode;
