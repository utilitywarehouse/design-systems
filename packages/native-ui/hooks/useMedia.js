import { UnistylesRuntime } from 'react-native-unistyles';
const useMedia = () => {
    const breakpoint = UnistylesRuntime.breakpoint ?? 'xs';
    const breakpoints = UnistylesRuntime.breakpoints;
    const mediaBreakpoints = {};
    // Type guard function to check if 'breakpoint' is a key of 'breakpoints'
    function isBreakpointKey(value, breakpointsObj) {
        return value in breakpointsObj;
    }
    if (isBreakpointKey(breakpoint, breakpoints)) {
        Object.keys(breakpoints).forEach(currentBreakPoint => {
            mediaBreakpoints[currentBreakPoint] =
                breakpoints[currentBreakPoint] === breakpoints[breakpoint];
        });
    }
    else {
        // Handle the case where 'breakpoint' is not a valid key
        throw new Error(`Invalid breakpoint: ${String(breakpoint)}`);
    }
    return mediaBreakpoints;
};
export default useMedia;
