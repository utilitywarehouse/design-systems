import { UnistylesBreakpoints, useStyles } from 'react-native-unistyles';

const useMedia = (): Partial<Record<keyof typeof breakpoints, boolean>> => {
  const {
    theme: { breakpoints },
    breakpoint,
  } = useStyles();

  type BreakPointKeys = keyof typeof breakpoints;
  const mediaBreakpoints: Partial<Record<BreakPointKeys, boolean>> = {};

  // Type guard function to check if 'breakpoint' is a key of 'breakpoints'
  function isBreakpointKey(
    value: keyof UnistylesBreakpoints,
    breakpointsObj: typeof breakpoints
  ): value is BreakPointKeys {
    return value in breakpointsObj;
  }

  if (isBreakpointKey(breakpoint, breakpoints)) {
    (Object.keys(breakpoints) as Array<BreakPointKeys>).forEach(currentBreakPoint => {
      mediaBreakpoints[currentBreakPoint] =
        breakpoints[currentBreakPoint] === breakpoints[breakpoint];
    });
  } else {
    // Handle the case where 'breakpoint' is not a valid key
    throw new Error(`Invalid breakpoint: ${breakpoint}`);
  }

  return mediaBreakpoints;
};

export default useMedia;
