import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx';
import { px } from '../utils';
import Box, { BoxProps } from '../Box';

type DefaultComponent = 'span';

interface CustomProps<D extends React.ElementType = DefaultComponent, P = {}>
  extends Pick<BoxProps<D, P>, 'sx' | 'component' | 'classes' | 'children'> {
  axis?: 'horizontal' | 'vertical';
  size: ResponsiveStyleValue<number>;
  inline?: boolean;
}

interface TypeMap<D extends React.ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type SpacerProps<D extends React.ElementType = DefaultComponent, P = {}> = OverrideProps<
  TypeMap<D, P>,
  D
>;

const Spacer = React.forwardRef(function Spacer(
  { axis = 'horizontal', size = 1, component = 'span', inline = false, sx, ...props },
  ref
) {
  const theme = useTheme();

  const getSize = () => {
    if (Array.isArray(size)) {
      return size.map(s => theme.spacing(s as number));
    }
    if (typeof size === 'object') {
      return Object.keys(theme.breakpoints.values).reduce(
        (acc: { [key: string]: string }, breakpoint: string) => {
          if (size[breakpoint] !== null) {
            acc[breakpoint] = theme.spacing(size[breakpoint] as number);
          }
          return acc;
        },
        {}
      );
    }
    return theme.spacing(size);
  };

  const width = axis === 'vertical' ? px(1) : getSize();
  const height = axis === 'horizontal' ? px(1) : getSize();

  return (
    <Box
      ref={ref}
      component={component}
      sx={{
        display: inline ? 'inline-block' : 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...sx,
      }}
      {...props}
    />
  );
}) as OverridableComponent<TypeMap>;

export default Spacer;
