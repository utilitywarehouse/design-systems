import type { ElementType } from 'react';

import type { BoxTypeMap as MuiBoxTypeMap, ResponsiveStyleValue } from '@mui/system';
import type { OverrideProps } from '@mui/types';

import type { BoxProps } from '../Box';

import { Theme } from '../../theme';

export interface FlexOwnProps {
  display?: ResponsiveStyleValue<'none' | 'flex' | 'inline-flex'>;
  direction?: BoxProps['flexDirection'];
  align?: BoxProps['alignItems'];
  justify?: BoxProps['justifyContent'];
  wrap?: BoxProps['flexWrap'];
  basis?: BoxProps['flexBasis'];
  grow?: BoxProps['flexGrow'];
  shrink?: BoxProps['flexShrink'];
}

export type FlexProps<
  RootComponent extends ElementType = MuiBoxTypeMap['defaultComponent'],
  AdditionalProps = object,
> = OverrideProps<
  MuiBoxTypeMap<FlexOwnProps & AdditionalProps, RootComponent, Theme>,
  RootComponent
> & {
  component?: ElementType;
};
