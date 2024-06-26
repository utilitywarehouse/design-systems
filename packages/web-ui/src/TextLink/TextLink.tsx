import * as React from 'react';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { DATA_ATTRIBUTES, isHeadingVariant } from '../utils';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { useBackground } from '../Box';
import { styled } from '@mui/material';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { transitions } from '../tokens';
import { PropsWithSx } from '../types';

export interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Pick<MuiLinkProps, 'children' | 'classes' | 'variant'> {
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
  [`&[${DATA_ATTRIBUTES.heading}=true]`]: {
    color: colorsCommon.brandPrimaryPurple,
  },
  [`&[${DATA_ATTRIBUTES.bgcolorBrand}=true]`]: {
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
 * > This component should be wrapped in a ThemeProvider
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
export const TextLink = React.forwardRef<HTMLAnchorElement, PropsWithSx<TextLinkProps>>(
  function Link({ variant = 'inherit', ...props }, ref) {
    const heading = isHeadingVariant(variant);
    const { isInvertedBackground } = useBackground();
    const dataAttributeProps = {
      [DATA_ATTRIBUTES.heading]: heading,
      [DATA_ATTRIBUTES.bgcolorBrand]: isInvertedBackground,
    };
    return (
      <StyledLink ref={ref} variant={variant} {...props} underline="none" {...dataAttributeProps} />
    );
  }
);
