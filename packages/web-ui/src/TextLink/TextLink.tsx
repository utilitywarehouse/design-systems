import React from 'react';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { dataAttributes, isHeadingVariant } from '../utils';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { useBackground } from '../Box';
import { styled } from '@mui/material';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { transitions } from '../tokens';

export interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Pick<MuiLinkProps, 'children' | 'classes' | 'sx' | 'variant'> {
  /**
   * Sets text-transform property on the TextLink contents.
   */
  textTransform?: MuiTypographyProps['textTransform'];
}

const StyledLink = styled(MuiLink)({
  transition: `${transitions.duration}ms ${transitions.easingFunction}`,
  transitionProperty: 'text-decoration, color, opacity',
  opacity: 1,
  cursor: 'pointer',
  color: colorsCommon.brandMidnight,
  textDecoration: 'underline',
  textDecorationThickness: 2,
  textUnderlineOffset: 4,
  textDecorationColor: colors.cyan400,
  '&:hover': {
    opacity: 0.5,
  },
  [`&[data-${dataAttributes.heading}=true]`]: {
    color: colorsCommon.brandPrimaryPurple,
  },
  [`&[data-${dataAttributes.bgcolorBrand}=true]`]: {
    color: colorsCommon.brandWhite,
  },
  // TODO: remove when `Background` component removed.
  [`[data-${dataAttributes.inverse}=true] &`]: {
    color: colorsCommon.brandWhite,
  },
  '&.MuiTypography-inherit': {
    color: 'inherit',
    textTransform: 'inherit',
  },
});

/**
 * TextLink is for non button type links.
 *
 * ## Contextual colour
 *
 * When contained inside a `Box` component that specifies a `backgroundColor`
 * which is the value of either `colorsCommon.brandMidnight` or
 * `colorsCommon.brandPrimaryPurple`, the `TextLink` color will be set to
 * `colorsCommon.brandWhite`. This can be overridden by the `color` prop.
 *
 * ## Styles
 *
 * The system props are not available on the `TextLink` component. If necessary
 * you can use `sx` as an escape hatch for one-off custom styling.
 */
export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(function Link(
  { variant = 'inherit', ...props },
  ref
) {
  const heading = isHeadingVariant(variant);
  const { isBrandBackground } = useBackground();
  const dataAttributeProps = {
    [`data-${dataAttributes.heading}`]: heading,
    [`data-${dataAttributes.bgcolorBrand}`]: isBrandBackground,
  };
  return (
    <StyledLink ref={ref} variant={variant} {...props} underline="none" {...dataAttributeProps} />
  );
});
