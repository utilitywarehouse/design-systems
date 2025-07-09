import * as React from 'react';

import type { GridProps as MuiGridProps, RegularBreakpoints } from '@mui/material/Grid';
import MuiGrid from '@mui/material/Grid';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';

export const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12, wide: 12 };
export const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3, wide: 3 };

export type DefaultGridComponent = 'div';

export interface CustomGridProps {
  mobile?: RegularBreakpoints['xs'];
  tablet?: RegularBreakpoints['md'];
  desktop?: RegularBreakpoints['lg'];
  wide?: RegularBreakpoints['xl'];
}

export interface GridTypeMap<D extends React.ElementType = DefaultGridComponent, P = object> {
  /* @ts-expect-error - upgrade issue. TODO: Fix this */
  props: CustomGridProps & Omit<MuiGridProps<D, P>, 'xs' | 'sm' | 'lg' | 'md' | 'xl'>;
  defaultComponent: D;
}

export type GridProps<
  D extends React.ElementType = DefaultGridComponent,
  P = object,
  /* @ts-expect-error - upgrade issue. TODO: Fix this */
> = OverrideProps<GridTypeMap<D, P>, D>;

/**
 * > This component is deprecated and will be removed in `v2`.
 *
 * A responsive layout grid which adapts to screen size and orientation, ensuring
 * consistency across layouts.
 *
 * This component is based on the `@mui/material` Grid component, except it
 * adheres to our custom breakpoints, and has default spacing & columns.
 *
 * Please [check the MUI site for further documentation](https://mui.com/material-ui/react-grid/).
 *
 * @deprecated
 */
export const Grid = React.forwardRef(function Grid({ columns = DEFAULT_COLUMNS, ...props }, ref) {
  if (props.container) {
    return (
      <MuiGrid ref={ref} columns={columns} spacing={props.spacing || DEFAULT_SPACING} {...props} />
    );
  }
  return <MuiGrid ref={ref} columns={columns} {...props} />;
}) as OverridableComponent<GridTypeMap>;
