import { TypographyProps as MuiTypographyProps } from '@mui/material';
import { PropsWithStyleOverrides } from '../types';
import { PropsWithChildren } from 'react';
import { BoxProps as MuiBoxProps } from '@mui/system';
import { OverrideProps } from '@mui/types';

export interface TypographyOwnProps
  extends Pick<
    MuiBoxProps,
    | 'component'
    | 'fontSize'
    | 'lineHeight'
    | 'letterSpacing'
    | 'textTransform'
    | 'textAlign'
    | 'padding'
  > {
  fontFamily?: 'primary' | 'secondary';
  fontWeight?: 'regular' | 'semibold';
  noWrap?: boolean | undefined;
  color?: string | 'primary' | 'secondary' | 'success' | 'error';
  /** @deprecated The variant prop is deprecated and will be removed in v1 */
  variant?: MuiTypographyProps['variant'];
}

export type DefaultTypographyComponent = 'p';

export interface TypographyTypeMap<
  AdditionalProps = {},
  DefaultComponent extends React.ElementType = DefaultTypographyComponent
> {
  props: AdditionalProps & PropsWithChildren<PropsWithStyleOverrides<TypographyOwnProps>>;
  defaultComponent: DefaultComponent;
}

export type TypographyProps<
  RootComponent extends React.ElementType = TypographyTypeMap['defaultComponent'],
  AdditionalProps = {}
> = OverrideProps<TypographyTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};
