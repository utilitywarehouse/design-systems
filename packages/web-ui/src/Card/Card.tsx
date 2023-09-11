import * as React from 'react';
import { px } from '../utils';
import { Box, BoxProps } from '@mui/material';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { BackgroundProvider, useBackground } from '../Background/Background';
import { OverridableComponent, OverrideProps } from '@mui/types';
import { styled } from '../theme';

export type CardVariant = 'transparent' | 'opaque';

const getCardPalette = (backgroundColor: string) => {
  if (backgroundColor === 'purple') {
    return {
      backgroundColor: colorsCommon.brandPrimaryPurple,
      borderColor: colorsCommon.brandPrimaryPurple,
    };
  }

  return {
    backgroundColor: colorsCommon.brandWhite,
    borderColor: colorsCommon.brandWhite,
  };
};

interface StyledCardProps {
  backgroundColor: string;
}

const StyledCard = styled(Box, {
  shouldForwardProp: prop => prop !== 'backgroundColor',
})<StyledCardProps>(({ theme, backgroundColor }) => {
  const palette = getCardPalette(backgroundColor);
  return {
    ...palette,
    padding: theme.spacing(3),
    borderRadius: px(14),
    borderWidth: px(2),
    borderStyle: 'solid',
  };
});

type DefaultComponent = 'div';

interface CustomProps<D extends React.ElementType = DefaultComponent, P = {}>
  extends Pick<BoxProps<D, P>, 'sx' | 'component' | 'classes'> {
  children?: React.ReactNode;
}

interface TypeMap<D extends React.ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type CardProps<D extends React.ElementType = DefaultComponent, P = {}> = OverrideProps<
  TypeMap<D, P>,
  D
>;

const Card = React.forwardRef(function Card(props, ref) {
  const { backgroundColor } = useBackground();
  const cardBackgroundColor = backgroundColor === 'white' ? 'purple' : 'white';

  return (
    <BackgroundProvider backgroundColor={cardBackgroundColor}>
      <StyledCard {...props} ref={ref} backgroundColor={cardBackgroundColor} />
    </BackgroundProvider>
  );
}) as OverridableComponent<TypeMap>;

export default Card;
