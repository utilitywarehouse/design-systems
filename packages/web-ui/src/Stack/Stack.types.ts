import type { StackProps as MuiStackProps } from '@mui/material/Stack';
import type { OverrideProps } from '@mui/material/OverridableComponent';

type DefaultStackComponent = 'div';

interface StackTypeMap<D extends React.ElementType = DefaultStackComponent, P = {}> {
  props: MuiStackProps<D, P>;
  defaultComponent: D;
}

type StackProps<D extends React.ElementType = DefaultStackComponent, P = {}> = OverrideProps<
  StackTypeMap<D, P>,
  D
>;

export type { DefaultStackComponent, StackTypeMap, StackProps };
