import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { fonts, fontWeights } from '../../tokens';
import { PropsWithSx } from '../../types';
import { getPrefixedName, px, pxToRem } from '../../utils';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { styled } from '../../theme';
import { LinkProps } from './Link.props';

const componentName = 'Link';
const label = getPrefixedName(componentName);

const StyledLink = styled('a', { label })<LinkProps>(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    fontFamily: fonts.secondary,
    fontSize: pxToRem(18),
    lineHeight: pxToRem(24),
    fontWeight: fontWeights.secondary.semibold,
    color: colors.cyan800,
    textDecoration: 'underline',
    textDecorationThickness: px(2),
    textDecorationColor: colors.cyan300,
    textUnderlinePosition: 'under',
  };
});

/**
 *
 * This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Link = forwardRef<ElementRef<'a'>, PropsWithChildren<PropsWithSx<LinkProps>>>(
  function Link({ className, asChild, children, ...props }, forwardedRef) {
    return (
      <StyledLink
        as={asChild ? Slot : 'a'}
        ref={forwardedRef}
        className={clsx(label, className)}
        {...props}
      >
        {children}
      </StyledLink>
    );
  }
);

Link.displayName = componentName;
