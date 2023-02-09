import type { ElementType } from 'react';
import type { BoxProps as MuiBoxProps } from '@mui/material/Box';
import type { NeutralBackgroundColor, InverseBackgroundColor } from '../types';
import type { OverrideProps } from '@mui/material/OverridableComponent';

type DefaultComponent = 'div';

type CustomProps<D extends ElementType = DefaultComponent, P = {}> = {
  /**
   * Changes the background colour, and provides context to child elements
   * that need to change colour accordingly
   */
  background?: NeutralBackgroundColor | InverseBackgroundColor;
} & Omit<MuiBoxProps<D, P>, 'background'>;

export interface BoxTypeMap<D extends ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type BoxProps<D extends ElementType = DefaultComponent, P = {}> = OverrideProps<
  BoxTypeMap<D, P>,
  D
>;
