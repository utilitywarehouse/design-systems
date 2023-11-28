import * as React from 'react';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { PropsWithSx } from '../../types';
import { withGlobalPrefix, px } from '../../utils';
import clsx from 'clsx';
import { Typography } from '../../Typography';
import { TextLinkProps } from './TextLink.props';
import { styled } from '../../theme';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { useBackground } from '../../Box';

const componentName = 'TextLink';
const componentClassName = withGlobalPrefix(componentName);

const StyledTypography = styled(Typography)(() => {
  const { isBrandBackground } = useBackground();
  return {
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexShrink: 0,
    '--text-link-color-default': isBrandBackground ? colorsCommon.brandWhite : colors.cyan600,
    '--text-link-color-active': isBrandBackground ? colors.purple100 : colors.cyan800,
    '--text-link-color-visited': isBrandBackground ? colors.purple300 : colors.cyan800,
    '--text-link-focus-outline-color': isBrandBackground ? colors.purple400 : colors.cyan700,
    '--text-link-color': 'var(--text-link-color-default)',
    textDecoration: 'underline',
    color: 'var(--text-link-color)',
    textDecorationColor: 'var(--text-link-color)',
    borderRadius: px(4),
    ':visited': {
      color: 'var(--text-link-color-visited)',
      textDecorationColor: 'var(--text-link-color-visited)',
    },
    '@media (hover: hover)': {
      ':where(:hover)': {
        textDecoration: 'none',
      },
    },
    ':where(:active)': {
      '--text-link-color': 'var(--text-link-color-active)',
    },
    ':where(:focus-visible)': {
      outlineWidth: px(2),
      outlineStyle: 'solid',
      outlineColor: 'var(--text-link-focus-outline-color)',
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
