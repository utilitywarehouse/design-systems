import type { BoxTypeMap as MuiBoxTypeMap } from '@mui/material/Box';
import type { NeutralBackgroundColor, InverseBackgroundColor } from '../types';
import type { OverrideProps } from '@mui/material/OverridableComponent';

type DefaultComponent = 'div';

interface CustomProps {
  /**
   * Changes the background colour, and provides context to child elements
   * that need to change colour accordingly
   */
  background?: NeutralBackgroundColor | InverseBackgroundColor;
}

export type BoxTypeMap<P = {}, D extends React.ElementType = DefaultComponent> = {
  props: P & Omit<MuiBoxTypeMap<P, D>['props'], 'background'> & CustomProps;
  defaultComponent: D;
};

export type BoxProps<D extends React.ElementType = DefaultComponent, P = {}> = OverrideProps<
  BoxTypeMap<P, D>,
  D
>;
