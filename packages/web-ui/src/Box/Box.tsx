import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import type { Theme } from '../theme';
import MuiBox from '@mui/material/Box';

export type DefaultBoxComponent = 'div';

export type BoxProps<
  D extends React.ElementType<any> = DefaultBoxComponent,
  P = {}
> = OverrideProps<MuiBoxTypeMap<P, D, Theme>, D>;

/**
 * Box is a low-level primitive, which supports theme-aware styling props, and can
 * be used for building any styled element.
 */
export const Box = forwardRef(function Box(props, ref) {
  return <MuiBox ref={ref} {...props} />;
}) as OverridableComponent<MuiBoxTypeMap<BoxProps, DefaultBoxComponent, Theme>>;
