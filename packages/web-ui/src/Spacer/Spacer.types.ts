import type { BoxProps as MuiBoxProps } from '@mui/material/Box';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import type { ResponsiveStyleValue } from '@mui/system/styleFunctionSx';

type DefaultSpacerComponent = 'div';

interface CustomSpacerProps {
  /**
   * The direction of the Spacer axis
   */
  axis?: 'horizontal' | 'vertical';
  size: ResponsiveStyleValue<number>;
  inline?: boolean;
}

interface SpacerTypeMap<D extends React.ElementType = DefaultSpacerComponent, P = {}> {
  props: MuiBoxProps<D, P> & CustomSpacerProps;
  defaultComponent: D;
}

type SpacerProps<D extends React.ElementType = DefaultSpacerComponent, P = {}> = OverrideProps<
  SpacerTypeMap<D, P>,
  D
>;

export type { DefaultSpacerComponent, CustomSpacerProps, SpacerTypeMap, SpacerProps };
