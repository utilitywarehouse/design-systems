/* eslint-disable @typescript-eslint/no-explicit-any */
import { UnistylesBreakpoints, UnistylesRuntime } from 'react-native-unistyles';

interface InputValueWithIndex<T> {
  name: string;
  value: T;
  index: number;
}

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

type BreakpointValues<T> = { default?: T } & PartialRecord<keyof UnistylesBreakpoints, T>;

function useBreakpointValue<T>(values: BreakpointValues<T>): T | undefined {
  const currentBreakpointName = UnistylesRuntime.breakpoint ?? 'base';
  const breakpoints = UnistylesRuntime.breakpoints;

  // Convert breakpoints to an array sorted by their pixel values
  const sortedBreakpoints = Object.entries(breakpoints).sort((a, b) => a[1] - b[1]);

  // Create a mapping of breakpoint names to their indices
  const breakpointOrder = sortedBreakpoints.map(([name]) => name);
  const breakpointIndices = breakpointOrder.reduce<Record<string, number>>(
    (acc, name, index) => ({ ...acc, [name]: index }),
    {}
  );

  // Get the index of the current breakpoint
  const currentBreakpointIndex = breakpointIndices[currentBreakpointName];

  // Map input values to breakpoint indices
  const inputValuesWithIndices: Array<InputValueWithIndex<T>> = Object.entries(values).map(
    ([name, value]) => {
      const index = name === 'default' ? -1 : (breakpointIndices[name] ?? -1);
      return { name, value, index };
    }
  );

  // Sort the input values by their breakpoint indices
  inputValuesWithIndices.sort((a, b) => a.index - b.index);

  // Find the value corresponding to the largest breakpoint less than or equal to the current one
  let matchedValue: T | undefined;
  for (let i = inputValuesWithIndices.length - 1; i >= 0; i--) {
    const { index, value } = inputValuesWithIndices[i];
    if (index <= currentBreakpointIndex) {
      matchedValue = value;
      break;
    }
  }

  // Fallback to 'default' if no breakpoint matched
  if (matchedValue === undefined) {
    matchedValue = values['default'];
  }

  return matchedValue;
}

export default useBreakpointValue;
