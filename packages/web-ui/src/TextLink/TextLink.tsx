import React from 'react';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { dataAttributes, isHeadingVariant } from '../utils';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { useBackground } from '../Box';

export interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Pick<MuiLinkProps, 'children' | 'classes' | 'sx' | 'variant'> {
  /**
   * Sets textTransform: capitalize | lowercase | uppercase.
   */
  textTransform?: MuiTypographyProps['textTransform'];
}

/**
 * TextLink is for non button type links.
 * It adds the data-heading attribute as true if variant is one of the following:
 * 'displayHeading', 'h1', 'h2', 'h3', 'h4'.
 * It adds the data-bg-color-brand attribute as true if nested in a Box component where
 * background = isBrandBackground.
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
    <MuiLink ref={ref} variant={variant} {...props} underline="none" {...dataAttributeProps} />
  );
});
