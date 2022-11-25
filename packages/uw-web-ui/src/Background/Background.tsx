import * as React from 'react';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { styled } from '@mui/material/styles';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { BackgroundColor, NeutralBackgroundColor, InverseBackgroundColor } from '../types';
import Box, { BoxProps } from '../Box';
import { dataAttributes, isInverseBackgroundColor } from '../utils';

const DefaultBackgroundColor: BackgroundColor = 'white' as BackgroundColor;

type DefaultComponent = 'div';

type CustomProps<D extends React.ElementType = DefaultComponent, P = {}> = Pick<
  BoxProps<D, P>,
  'sx' | 'component' | 'classes'
> & {
  backgroundColor: NeutralBackgroundColor | InverseBackgroundColor;
};

interface TypeMap<D extends React.ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type BackgroundProps<D extends React.ElementType = DefaultComponent, P = {}> = OverrideProps<
  TypeMap<D, P>,
  D
>;

interface StyledBackgroundProps {
  backgroundColor: CustomProps['backgroundColor'];
}

const StyledBackground = styled(Box, {
  shouldForwardProp: prop => prop !== 'backgroundColor',
})<StyledBackgroundProps>(({ backgroundColor }) => ({
  backgroundColor: colors[backgroundColor],
}));

const Background = React.forwardRef(function Background(
  { backgroundColor = DefaultBackgroundColor, ...props },
  ref
) {
  const inverse = isInverseBackgroundColor(backgroundColor);
  const dataAttributeProps = {
    [`data-${dataAttributes.inverse}`]: inverse,
  };
  return (
    <StyledBackground
      {...props}
      ref={ref}
      backgroundColor={backgroundColor}
      {...dataAttributeProps}
    />
  );
}) as OverridableComponent<TypeMap>;

export default Background;
