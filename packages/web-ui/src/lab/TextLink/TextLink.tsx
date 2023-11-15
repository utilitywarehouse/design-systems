import * as React from 'react';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { PropsWithSx } from '../../types';
import { getPrefixedName, px } from '../../utils';
import clsx from 'clsx';
import { Typography } from '../../Typography';
import { TextLinkProps } from './TextLink.props';
import { styled } from '../../theme';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { useBackground } from '../../Box';

const componentName = 'TextLink';
const componentClassName = getPrefixedName(componentName);

const StyledTypography = styled(Typography)(() => {
  const { isBrandBackground } = useBackground();
  return {
    '--text-link-color-default': isBrandBackground ? colorsCommon.brandWhite : colors.cyan600,
    '--text-link-color-active': isBrandBackground ? colorsCommon.brandWhite : colors.cyan800,
    '--text-link-color': 'var(--text-link-color-default)',
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'var(--text-link-color)',
    textDecorationColor: 'var(--text-link-color)',
    borderRadius: px(4),
    '@media (hover: hover)': {
      '&:where(:hover)': {
        textDecoration: 'none',
      },
    },
    '&:where(:active)': {
      '--text-link-color': 'var(--text-link-color-active)',
    },
    '&:where(:focus-visible)': {
      outlineWidth: px(2),
      outlineStyle: 'solid',
      outlineColor: colors.cyan700,
      outlineOffset: px(2),
    },
  };
});

/**
 * A semantic element for navigating between pages.
 *
 * The `TextLink` component is intended to be used within a block of text, and
 * must be nested in a `Text` component.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be
 * > used standalone with other component libraries.
 */
export const TextLink = forwardRef<ElementRef<'a'>, PropsWithChildren<PropsWithSx<TextLinkProps>>>(
  ({ className, ...props }, ref) => {
    return (
      <StyledTypography
        ref={ref}
        component="a"
        className={clsx(componentClassName, className)}
        fontFamily="inherit"
        fontSize="inherit"
        lineHeight="inherit"
        weight="inherit"
        color="inherit"
        {...props}
      />
    );
  }
);

TextLink.displayName = componentName;
