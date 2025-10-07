import { useUnistyles } from 'react-native-unistyles';
import { themes } from '../types';

const useTheme = (): themes['light'] | themes['dark'] => {
  const { theme } = useUnistyles();
  return theme as themes['light'] | themes['dark'];
};

export default useTheme;
