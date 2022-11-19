import * as React from 'react';
import { styled } from '@mui/material/styles';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { isBrandBackgroundColor, px } from '../utils';
import { BackgroundColor, BackgroundProvider, useBackground } from './Background';
import Box, { BoxProps } from './Box';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';

export type CardVariant = 'transparent' | 'opaque';

const getCardPalette = (backgroundColor: BackgroundColor, variant: CardVariant) => {
  const neutralBackgroundColorPalette = {
    opaque: {
      backgroundColor: colors.white,
      borderColor: colors.white,
    },
    transparent: {
      borderColor: colors.purple,
      backgroundColor: 'transparent',
    },
  };

  const brandBackgroundColorPalette = {
    opaque: {
      backgroundColor: colors.purple,
      borderColor: colors.purple,
    },
    transparent: {
      borderColor: colors.white,
      backgroundColor: 'transparent',
    },
  };

  if (isBrandBackgroundColor(backgroundColor)) {
    return brandBackgroundColorPalette[variant];
  }

  return neutralBackgroundColorPalette[variant];
};

interface StyledCardProps {
  variant: CardVariant;
  backgroundColor: BackgroundColor;
}

const StyledCard = styled(Box, {
  shouldForwardProp: prop => prop !== 'variant' && prop !== 'backgroundColor',
})<StyledCardProps>(({ theme, backgroundColor, variant }) => {
  const palette = getCardPalette(backgroundColor, variant);
  return {
    ...palette,
    padding: theme.spacing(3),
    borderRadius: px(14),
    borderWidth: px(2),
    borderStyle: variant === 'transparent' ? 'dashed' : 'solid',
  };
});

type defaultComponent = 'div';

interface CustomProps<D extends React.ElementType = defaultComponent, P = {}>
  extends Pick<BoxProps<D, P>, 'sx' | 'component' | 'classes'> {
  children?: React.ReactNode;
  /**
   * @deprecated in v2. The variant prop will be removed in v3 and the opaque variant will be the default.
   */
  variant?: CardVariant;
  /**
   * @deprecated in v2. forwardedRef is deprecated in v2, and will be removed in v3.
   */
  forwardedRef?: React.Ref<HTMLElement>;
}

interface TypeMap<D extends React.ElementType = defaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type CardProps<D extends React.ElementType = defaultComponent, P = {}> = OverrideProps<
  TypeMap<D, P>,
  D
>;

const Card = React.forwardRef(function Card({ variant = 'opaque', forwardedRef, ...props }, ref) {
  const { backgroundColor } = useBackground();

  if (variant === 'transparent') {
    console.warn(
      'The variant prop on the Card component is deprecated in v2 and will be removed in v3. The opaque variant will be the default.'
    );
  }

  if (forwardedRef !== undefined) {
    console.warn(
      'forwardedRef on the Card component is deprecated in v2 and will be removed in v3. Please use ref instead.'
    );
  }

  const cardBackgroundColor =
    variant === 'transparent' ? backgroundColor : backgroundColor === 'white' ? 'purple' : 'white';

  return (
    <BackgroundProvider backgroundColor={cardBackgroundColor}>
      <StyledCard
        {...props}
        variant={variant}
        ref={forwardedRef || ref}
        backgroundColor={cardBackgroundColor}
      />
    </BackgroundProvider>
  );
}) as OverridableComponent<TypeMap>;

export default Card;
