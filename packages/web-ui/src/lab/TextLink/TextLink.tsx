import * as React from 'react';
import { PropsWithSx } from '../../types';
import { withGlobalPrefix, px, DATA_ATTRIBUTES, DATA_ATTRIBUTE_SELECTORS } from '../../utils';
import clsx from 'clsx';
import { Typography } from '../../Typography';
import { TextLinkProps } from './TextLink.props';
import { styled } from '../../theme';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { useBackground } from '../../Box';

const componentName = 'TextLink';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled(Typography)(() => {
  return {
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexShrink: 0,
    '--text-link-color': colors.cyan600,
    '--text-link-color-on-brand-bg': colorsCommon.brandWhite,
    '--text-link-color-active': colors.cyan800,
    '--text-link-color-active-on-brand-bg': colors.purple100,
    '--text-link-color-visited': colors.cyan800,
    '--text-link-color-visited-on-brand-bg': colors.purple300,
    '--text-link-focus-outline-color': colors.cyan700,
    '--text-link-focus-outline-color-on-brand-bg': colors.purple400,
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
    [DATA_ATTRIBUTE_SELECTORS.onBrandBackground]: {
      '--text-link-color': 'var(--text-link-color-on-brand-bg)',
      '--text-link-color-active': 'var(--text-link-color-active-on-brand-bg)',
      '--text-link-color-visited': 'var(--text-link-color-visited-on-brand-bg)',
      '--text-link-focus-outline-color': 'var(--text-link-focus-outline-color-on-brand-bg)',
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
export const TextLink = React.forwardRef<
  React.ElementRef<'a'>,
  React.PropsWithChildren<PropsWithSx<TextLinkProps>>
>(({ className, ...props }, ref) => {
  const { isBrandBackground } = useBackground();
  const dataAttributeProps = {
    [DATA_ATTRIBUTES.onBrandBackground]: isBrandBackground ? '' : undefined,
  };
  return (
    <StyledElement
      ref={ref}
      component="a"
      className={clsx(componentClassName, className)}
      fontFamily="inherit"
      fontSize="inherit"
      lineHeight="inherit"
      weight="inherit"
      color="inherit"
      {...dataAttributeProps}
      {...props}
    />
  );
});

TextLink.displayName = componentName;
