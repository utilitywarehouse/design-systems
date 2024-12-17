import { UnistylesBreakpoints } from 'react-native-unistyles';
type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
type BreakpointValues<T> = {
    default?: T;
} & PartialRecord<keyof UnistylesBreakpoints, T>;
declare function useBreakpointValue<T>(values: BreakpointValues<T>): T | undefined;
export default useBreakpointValue;
