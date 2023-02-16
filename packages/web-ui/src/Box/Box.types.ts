import type { BoxProps as MuiBoxProps } from '@mui/material/Box';
import type { NeutralBackgroundColor, InverseBackgroundColor } from '../types';
import type { OverrideProps } from '@mui/material/OverridableComponent';

type DefaultBoxComponent = 'div';

interface CustomBoxProps {
  background?: NeutralBackgroundColor | InverseBackgroundColor;
}

interface BoxTypeMap<D extends React.ElementType = DefaultBoxComponent, P = {}> {
  props: MuiBoxProps<D, P> & CustomBoxProps;
  defaultComponent: D;
}

type BoxProps<D extends React.ElementType = DefaultBoxComponent, P = {}> = OverrideProps<
  BoxTypeMap<D, P>,
  D
>;

export type { DefaultBoxComponent, CustomBoxProps, BoxTypeMap, BoxProps };
