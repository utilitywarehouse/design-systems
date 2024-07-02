import * as React from 'react';
import { PropsWithSx } from '../../types';
import {
  withGlobalPrefix,
  px,
  DATA_ATTRIBUTES,
  DATA_ATTRIBUTE_SELECTORS,
  spacing,
} from '../../utils';
import clsx from 'clsx';
import { TextLinkProps } from './TextLink.props';
import { styled } from '../../theme';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { useBackground } from '../../Box';
import { Slot } from '@radix-ui/react-slot';

const componentName = 'TextLink';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled('a', {
  shouldForwardProp: prop => prop !== 'color' && prop !== 'as',
})<{
  color?: string;
}>(({ color }) => ({
  // unset button styles when asChild is used
  ':where(button)': {
    outline: 'transparent',
    appearance: 'none',
    border: 'none',
    background: 'transparent',
    padding: 0,
  },
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  flexShrink: 0,
  gap: px(spacing(0.5)),
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  fontWeight: 'inherit',
  '--text-link-color': colors.cyan600,
  '--text-link-color-custom': color,
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
  ':where(:visited)': {
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
  [DATA_ATTRIBUTE_SELECTORS.inverted]: {
    '--text-link-color': 'var(--text-link-color-on-brand-bg)',
    '--text-link-color-active': 'var(--text-link-color-active-on-brand-bg)',
    '--text-link-color-visited': 'var(--text-link-color-visited-on-brand-bg)',
    '--text-link-focus-outline-color': 'var(--text-link-focus-outline-color-on-brand-bg)',
  },
  [DATA_ATTRIBUTE_SELECTORS.customColor]: {
    '--text-link-color': 'var(--text-link-color-custom)',
    '--text-link-color-active': 'var(--text-link-color-custom)',
    '--text-link-color-visited': 'var(--text-link-color-custom)',
  },
}));

/**
 * A semantic element for navigating between pages.
 *
 * The `TextLink` component is intended to be used within a block of text, and
 * should be nested in a `Text` component. This should happen even when using
 * as a standalone link element as it will inherit many styles from the parent
 * `Text` component.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be
 * > used standalone with other component libraries.
 */
export const TextLink = React.forwardRef<
  React.ElementRef<'a'>,
  React.PropsWithChildren<PropsWithSx<TextLinkProps>>
>(({ className, color, asChild, inverted, ...props }, ref) => {
  const { isInvertedBackground } = useBackground();
  const dataAttributeProps = {
    [DATA_ATTRIBUTES.inverted]: inverted || isInvertedBackground ? '' : undefined,
    [DATA_ATTRIBUTES.customColor]: color !== undefined ? '' : undefined,
  };
  return (
    <StyledElement
      as={asChild ? Slot : 'a'}
      ref={ref}
      className={clsx(componentClassName, className)}
      color={color}
      {...dataAttributeProps}
      {...props}
    />
  );
});

TextLink.displayName = componentName;
