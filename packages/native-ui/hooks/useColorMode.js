import { useUnistyles } from 'react-native-unistyles';
const useColorMode = () => {
    const { theme: { colorMode }, } = useUnistyles();
    return colorMode;
};
export default useColorMode;
