import React from 'react';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { dataAttributes, isHeadingVariant } from '../utils';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { useBackground } from '../Box';

export interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Pick<MuiLinkProps, 'children' | 'classes' | 'sx' | 'variant'> {
  /**
   * Sets text-transform property on the TextLink contents.
   */
  textTransform?: MuiTypographyProps['textTransform'];
}

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
    <MuiLink ref={ref} variant={variant} {...props} underline="none" {...dataAttributeProps} />
  );
});
