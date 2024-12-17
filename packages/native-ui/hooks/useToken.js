import useTheme from './useTheme';
/**
 *
 * @param tokenScale Token scale ex: colors, space, fontSizes, etc
 * @param token Token name ex: primary200, red500, 1, 2, sm, etc
 * @returns
 */
const useToken = (tokenScale, token) => {
    const theme = useTheme();
    // @ts-expect-error - This is a valid check
    return theme?.[tokenScale]?.[token] ?? token;
};
export default useToken;
