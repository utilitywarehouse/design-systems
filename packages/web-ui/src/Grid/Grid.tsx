import MuiGrid from '@mui/material/Grid';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import type { GridProps as MuiGridProps, RegularBreakpoints } from '@mui/material/Grid';

const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12 };
const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3 };

export type DefaultGridComponent = 'div';

export interface CustomGridProps {
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   *
   * If 'auto', the grid item's width matches its content.
   *
   * If false, the prop is ignored.
   *
   * If true, the grid item's width grows to use the space available in the grid container.
   *
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  mobile?: boolean | 'auto' | number;
  tablet?: RegularBreakpoints['md'];
  desktop?: RegularBreakpoints['lg'];
}

export interface GridTypeMap<D extends React.ElementType = DefaultGridComponent, P = {}> {
  props: CustomGridProps & Omit<MuiGridProps<D, P>, 'xs' | 'sm' | 'lg' | 'md' | 'xl'>;
  defaultComponent: D;
}

export type GridProps<D extends React.ElementType = DefaultGridComponent, P = {}> = OverrideProps<
  GridTypeMap<D, P>,
  D
>;

export const Grid = forwardRef(function Grid({ columns = DEFAULT_COLUMNS, ...props }, ref) {
  if (props.container) {
    return (
      <MuiGrid ref={ref} columns={columns} spacing={props.spacing || DEFAULT_SPACING} {...props} />
    );
  }
  return <MuiGrid ref={ref} columns={columns} {...props} />;
}) as OverridableComponent<GridTypeMap>;
