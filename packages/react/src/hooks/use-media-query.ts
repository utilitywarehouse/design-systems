import * as React from 'react';

// gratefully copied from MUI -> https://github.com/mui/material-ui/blob/master/packages/mui-system/src/useMediaQuery/useMediaQuery.ts

export interface UseMediaQueryOptions {
  /**
   * As `window.matchMedia()` is unavailable on the server,
   * this is the default value to return.
   * @default false
   */
  defaultValue?: boolean;
  /**
   * To perform the server-side hydration, the hook needs to render twice.
   * A first time with `defaultValue`, the value of the server, and a second time with the resolved value.
   * This double pass rendering cycle comes with a drawback: it's slower.
   * In SSR, you should set it to `true`, returning `options.defaultValue` or `false` initially.
   * @default false
   */
  initializeWithDefaultValue?: boolean;
}

/**
 * Custom hook that tracks the state of a media query using the [`Match Media API`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).
 * @param {string} query - The media query to track.
 * @param {?UseMediaQueryOptions} [options] - The options for customizing the behavior of the hook (optional).
 * @returns {boolean} The current state of the media query (true if the query matches, false otherwise).
 * @see [Documentation](https://uw-web-ui.vercel.app/?path=/docs/web-ui-helpers-media-queries--documentation##usemediaqueries-hook)
 * @example
 * ```tsx
 * import { useMediaQuery, media } from '@utilitywarehouse/ds-react';
 *
 * const isMobileOrTablet = useMediaQuery(media.below('desktop'));
 * // Use `isMobileOrTablet ` to conditionally apply styles or logic based on the screen size.
 * ```
 */
export function useMediaQuery(query: string, options: UseMediaQueryOptions = {}): boolean {
  const { defaultValue = false, initializeWithDefaultValue = false } = options;

  query = query.replace(/^@media( ?)/m, '');

  const getDefaultSnapshot = React.useCallback(() => defaultValue, [defaultValue]);
  const getServerSnapshot = React.useMemo(() => {
    if (initializeWithDefaultValue) {
      return getDefaultSnapshot;
    }
    return () => window.matchMedia(query).matches;
  }, [getDefaultSnapshot, query, initializeWithDefaultValue]);

  const [getSnapshot, subscribe] = React.useMemo(() => {
    if (window.matchMedia === null) {
      return [getDefaultSnapshot, () => () => {}];
    }

    const mediaQueryList = window.matchMedia(query);

    return [
      () => mediaQueryList.matches,
      (notify: () => void) => {
        mediaQueryList.addEventListener('change', notify);
        return () => {
          mediaQueryList.removeEventListener('change', notify);
        };
      },
    ];
  }, [getDefaultSnapshot, query]);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
  const match = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue({ query, match });
  }

  return match;
}
