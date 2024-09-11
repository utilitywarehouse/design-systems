import { StackProps } from '../Stack';

import { breakpoints } from '../tokens';

function convert(c: string) {
  return `repeat(${c}, minmax(10px, 1fr))`;
}

export function getColumns(columns: StackProps['spacing']) {
  if (Array.isArray(columns)) {
    return columns.map(s => convert(s as string));
  }
  if (typeof columns === 'object') {
    return Object.keys(breakpoints).reduce((acc: { [key: string]: string }, breakpoint: string) => {
      const breakpointValue = columns[breakpoint];
      if (breakpointValue !== undefined && breakpointValue !== null) {
        acc[breakpoint] = convert(breakpointValue as string);
      }
      return acc;
    }, {});
  }
  return convert(columns as string);
}
