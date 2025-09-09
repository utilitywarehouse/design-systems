import React, { forwardRef, useMemo } from 'react';
import { useWindowDimensions, View, ViewProps } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { useStyleProps, useTheme } from '../../hooks';
import type { GridProps } from './Grid.props';

const Grid = forwardRef<View, GridProps>(
  ({ columns = 2, containerStyle, itemStyle, rowStyle, space, children, ...props }, ref) => {
    const { breakpoints } = useTheme();
    const { computedStyles, remainingProps } = useStyleProps(props);
    const childrenArray = React.Children.toArray(children).filter(Boolean);
    const { width } = useWindowDimensions();
    const { gap, columnGap, rowGap } = { ...remainingProps, ...computedStyles };

    styles.useVariants({ space });

    const getColumnsForWidth = useMemo(() => {
      // If columns is a number, use that number
      if (typeof columns === 'number') {
        return columns;
      }

      // If columns is an object, determine columns based on current breakpoint
      if (typeof columns === 'object') {
        const currentBreakpoint = UnistylesRuntime.breakpoint ?? 'base';

        // Try to get the value for the current breakpoint
        if (columns[currentBreakpoint] !== undefined) {
          return columns[currentBreakpoint];
        }

        // If not found, find the nearest smaller breakpoint that has a defined column value
        const breakpointKeys = Object.keys(breakpoints) as Array<keyof typeof breakpoints>;
        const sortedBreakpoints = breakpointKeys.sort((a, b) => breakpoints[a] - breakpoints[b]);
        // @ts-expect-error - TypeScript doesn't know the type of currentBreakpoint
        const currentBreakpointIndex = sortedBreakpoints.indexOf(currentBreakpoint);

        // Look for the closest smaller breakpoint with a defined value
        for (let i = currentBreakpointIndex - 1; i >= 0; i--) {
          const breakpoint = sortedBreakpoints[i];
          if (columns[breakpoint] !== undefined) {
            return columns[breakpoint];
          }
        }

        // If no smaller breakpoint has a defined value, look for larger ones
        for (let i = currentBreakpointIndex + 1; i < sortedBreakpoints.length; i++) {
          const breakpoint = sortedBreakpoints[i];
          if (columns[breakpoint] !== undefined) {
            return columns[breakpoint];
          }
        }
      }

      // Default to 2 columns
      return 2;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columns, width]);

    const computedColumnGap = columnGap ?? gap;
    const computedRowGap = rowGap ?? gap;

    // Create rows and columns structure for better control over layout
    const rows = useMemo(() => {
      const result: Array<Array<React.ReactNode>> = [];
      let currentRow: Array<React.ReactNode> = [];

      childrenArray.forEach((child, index) => {
        currentRow.push(child);

        // When we reach the end of a row or the end of all children
        if ((index + 1) % getColumnsForWidth === 0 || index === childrenArray.length - 1) {
          result.push([...currentRow]);
          currentRow = [];
        }
      });

      return result;
    }, [childrenArray, getColumnsForWidth]);

    return (
      <View
        ref={ref} // Pass ref to the outermost View
        {...remainingProps}
        style={[styles.container, containerStyle, computedStyles]}
      >
        <View
          style={[styles.rowsContainer, computedRowGap ? { gap: computedRowGap as number } : {}]}
        >
          {rows.map((rowItems, rowIndex) => (
            <View
              key={`row-${rowIndex}`}
              style={[
                styles.row,
                computedColumnGap ? { gap: computedColumnGap as number } : {},
                rowStyle,
              ]}
            >
              {rowItems.map((child, colIndex) => {
                return (
                  <View key={`item-${rowIndex}-${colIndex}`} style={[styles.item, itemStyle]}>
                    {child as ViewProps['children']}
                  </View>
                );
              })}

              {/* Add empty placeholder items to fill the last row if needed */}
              {rowItems.length < getColumnsForWidth &&
                Array.from({ length: getColumnsForWidth - rowItems.length }).map((_, index) => (
                  <View key={`placeholder-${rowIndex}-${index}`} style={[styles.item]} />
                ))}
            </View>
          ))}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create(theme => ({
  container: {
    width: '100%',
  },
  rowsContainer: {
    width: '100%',
    variants: {
      space: theme.globalStyle.variants.space,
    },
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    variants: {
      space: theme.globalStyle.variants.space,
    },
  },
  item: {
    alignSelf: 'stretch',
    flex: 1,
  },
}));

Grid.displayName = 'Grid';

export default Grid;
