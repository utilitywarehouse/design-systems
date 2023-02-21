import { forwardRef } from 'react';
import MuiTypography from '@mui/material/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { dataAttributes } from '../utils';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import { TypographyProps } from '../Typography';

type DefaultHeadingComponent = 'h2';

export const headingVariantMapping: Record<string, string> = {
  displayHeading: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

interface CustomHeadingProps {
  variant: 'displayHeading' | 'h1' | 'h2' | 'h3' | 'h4';
  color?: 'primary' | 'secondary';
  component: React.ElementType;
}

interface HeadingTypeMap<D extends React.ElementType = DefaultHeadingComponent, P = {}> {
  props: Omit<TypographyProps<D, P>, 'variant' | 'fontWeight' | 'color' | 'bold'> &
    CustomHeadingProps;
  defaultComponent: D;
}

type HeadingProps<D extends React.ElementType = DefaultHeadingComponent, P = {}> = OverrideProps<
  HeadingTypeMap<D, P>,
  D
>;

const Heading = forwardRef(function Heading({ color = 'primary', ...props }, ref) {
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

export default Heading;
export type { DefaultHeadingComponent, CustomHeadingProps, HeadingTypeMap, HeadingProps };
