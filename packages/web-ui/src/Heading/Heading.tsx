import { forwardRef } from 'react';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { dataAttributes } from '../utils';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import type { SystemProps } from '../types';

export type DefaultHeadingComponent = 'h2';

export const headingVariantMapping: Record<string, string> = {
  displayHeading: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

export interface CustomHeadingProps {
  variant: 'displayHeading' | 'h1' | 'h2' | 'h3' | 'h4';
  component: React.ElementType;
  color?: 'primary' | 'secondary';
  textTransform?: MuiTypographyProps['textTransform'];
}

export interface HeadingTypeMap<D extends React.ElementType = DefaultHeadingComponent, P = {}> {
  props: Omit<MuiTypographyProps<D, P>, 'variant' | SystemProps> & CustomHeadingProps;
  defaultComponent: D;
}

export type HeadingProps<
  D extends React.ElementType = DefaultHeadingComponent,
  P = {}
> = OverrideProps<HeadingTypeMap<D, P>, D>;

export const Heading = forwardRef(function Heading({ color = 'primary', ...props }, ref) {
  const dataAttributeProps = {
    [`data-${dataAttributes[color]}`]: true,
  };
  return (
    <MuiTypography
      ref={ref}
      variantMapping={headingVariantMapping}
      {...props}
      {...dataAttributeProps}
    />
  );
}) as OverridableComponent<HeadingTypeMap>;
