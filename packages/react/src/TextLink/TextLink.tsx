import React from 'react';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { isHeadingVariant, isInverseBackgroundColor } from '../utils';
import { colors, transitions } from '@utilitywarehouse/customer-ui-design-tokens';
import { styled } from '@mui/material/styles';
import { useBackground } from '../Background';

const StyledTextLink = styled(MuiLink)(({ variant = 'body' }) => {
  const { backgroundColor } = useBackground();
  const getLinkColor = () => {
    if (variant === 'inherit') {
      return variant;
    }
    if (isInverseBackgroundColor(backgroundColor)) {
      return colors.white;
    }
    if (isHeadingVariant(variant)) {
      return colors.purple;
    }
    return colors.midnight;
  };
  const color = getLinkColor();
  return {
    transition: `${transitions.duration}ms ${transitions.easingFunction}`,
    transitionProperty: 'text-decoration, color, opacity',
    opacity: 1,
    cursor: 'pointer',
    '&.MuiLink-root': {
      color,
    },
    ...(variant === 'inherit' && { textTransform: 'inherit', color: 'inherit' }),
    textDecoration: 'underline',
    textDecorationThickness: 2,
    textUnderlineOffset: 4,
    textDecorationColor: colors.cyan,
    '&:hover': {
      opacity: 0.5,
    },
  };
});

export interface TextLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Pick<MuiLinkProps, 'children' | 'classes' | 'sx' | 'variant'> {}

const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(function Link(
  { variant = 'body', ...props },
  ref
) {
  return <StyledTextLink ref={ref} variant={variant} {...props} underline="none" />;
});

export default TextLink;
