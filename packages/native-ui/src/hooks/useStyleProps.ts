/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import useTheme from './useTheme';
import {
  propStyleMapping,
  resolveThemeValue,
  themeStyleMapping,
  themeStyleMappingNew,
  viewStyleProps,
} from '../utils/styleUtils';

/**
 * Type for the return value from useStyleProps
 */
interface StylePropsResult {
  /** The computed styles based on the input props */
  computedStyles: Record<string, any>;
  /** Props that are not style related and should be passed to the component */
  remainingProps: Record<string, any>;
}

/**
 * Hook to process utility style props and resolve theme values
 * @param props Component props to process
 * @returns Object containing computed styles and non-style props
 */
export const useStyleProps = (props: Record<string, any>): StylePropsResult => {
  const theme = useTheme();

  return useMemo(() => {
    const computedStyles: Record<string, any> = {};
    const remainingProps: Record<string, any> = {};

    Object.entries(props).forEach(([propName, propValue]) => {
      if (propValue === undefined) return;

      let stylePropName: keyof ViewStyle | undefined;
      let themeKey: keyof typeof theme | undefined;
      let newThemeKey: keyof typeof theme | undefined;

      // Handle shorthand props
      if (propStyleMapping[propName]) {
        stylePropName = propStyleMapping[propName];
      }
      // Handle direct style props
      else if (viewStyleProps.has(propName)) {
        stylePropName = propName as keyof ViewStyle;
      }

      if (stylePropName) {
        // Resolve theme value if needed
        themeKey = themeStyleMapping[stylePropName] as keyof typeof theme;
        newThemeKey = themeStyleMappingNew[stylePropName] as keyof typeof theme;

        if (themeKey && theme[themeKey]) {
          computedStyles[stylePropName] = resolveThemeValue(
            propValue,
            theme[themeKey],
            theme[newThemeKey]
          );
        } else {
          computedStyles[stylePropName] = propValue;
        }
      } else {
        // This prop is not style related, keep it
        remainingProps[propName] = propValue;
      }
    });

    return { computedStyles, remainingProps };
  }, [props, theme]);
};
