import type { ElementType } from 'react';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import type { ResponsiveStyleValue } from '@mui/system/styleFunctionSx';
import type { BoxProps as MuiBoxProps } from '@mui/material/Box';

type DefaultComponent = 'span';

type CustomProps<D extends ElementType = DefaultComponent, P = {}> = {
  /**
   * The direction of the Spacer axis
   * @default vertical
   */
  axis?: 'horizontal' | 'vertical';
  size: ResponsiveStyleValue<number>;
  inline?: boolean;
} & MuiBoxProps<D, P>;

export interface SpacerTypeMap<D extends ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type SpacerProps<D extends ElementType = DefaultComponent, P = {}> = OverrideProps<
  SpacerTypeMap<D, P>,
  D
>;
