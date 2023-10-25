import * as React from 'react';
import MuiGrid from '@mui/material/Grid';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import type { GridProps as MuiGridProps, RegularBreakpoints } from '@mui/material/Grid';

export const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12, wide: 12 };
export const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3, wide: 3 };

export type DefaultGridComponent = 'div';

export interface CustomGridProps {
  mobile?: RegularBreakpoints['xs'];
  tablet?: RegularBreakpoints['md'];
  desktop?: RegularBreakpoints['lg'];
  wide?: RegularBreakpoints['xl'];
}

export interface GridTypeMap<D extends React.ElementType = DefaultGridComponent, P = {}> {
  props: CustomGridProps & Omit<MuiGridProps<D, P>, 'xs' | 'sm' | 'lg' | 'md' | 'xl'>;
  defaultComponent: D;
}

export type GridProps<D extends React.ElementType = DefaultGridComponent, P = {}> = OverrideProps<
  GridTypeMap<D, P>,
  D
>;

/**
 * A responsive layout grid which adapts to screen size and orientation, ensuring
 * consistency across layouts.
 *
 * This component is based on the `@mui/material` Grid component, except it
 * adheres to our custom breakpoints, and has default spacing & columns.
 *
 * Please [check the MUI site for further documentation](https://mui.com/material-ui/react-grid/).
 *
 * > This component should be wrapped in a ThemeProvider
 */
export const Grid = forwardRef(function Grid({ columns = DEFAULT_COLUMNS, ...props }, ref) {
  if (props.container) {
    return (
      <MuiGrid ref={ref} columns={columns} spacing={props.spacing || DEFAULT_SPACING} {...props} />
    );
  }
  return <MuiGrid ref={ref} columns={columns} {...props} />;
}) as OverridableComponent<GridTypeMap>;
