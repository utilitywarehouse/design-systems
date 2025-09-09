import * as React from 'react';

import clsx from 'clsx';

import { Slot } from '@radix-ui/react-slot';

import { colors } from '@utilitywarehouse/colour-system';

import type { TextLinkProps } from './TextLink.props';

import { useBackground } from '../Box';

import { DATA_ATTRIBUTES, DATA_ATTRIBUTE_SELECTORS } from '../../helpers';
import { styled } from '../../theme';
import type { PropsWithSx } from '../../types';
import { px, spacing, withGlobalPrefix } from '../../utils';

const componentName = 'TextLink';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled('a', {
  shouldForwardProp: prop => prop !== 'color' && prop !== 'as' && prop !== 'textTransform',
})<{
  color?: string;
  textTransform?: TextLinkProps['textTransform'];
}>(({ color, textTransform }) => ({
  // unset button styles when asChild is used
  ':where(button)': {
    outline: 'transparent',
    appearance: 'none',
    border: 'none',
    background: 'transparent',
    padding: 0,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  textTransform: textTransform as any,
  cursor: 'pointer',
  display: 'inline',
  ':has(svg, [data-icon])': {
    display: 'inline-flex',
    alignItems: 'center',
    flexShrink: 0,
    gap: px(spacing(0.5)),
  },
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  fontWeight: 'inherit',
  '--text-link-color-custom': color,
  '--text-link-color': colors.cyan600,
  '--text-link-color-active': colors.cyan800,
  '--text-link-color-visited': colors.purple700,
  '--text-link-color-inverted': colors.cyan400,
  '--text-link-color-active-inverted': colors.cyan200,
  '--text-link-color-visited-inverted': colors.purple300,
  '--text-link-focus-outline-color': colors.cyan700,
  '--text-link-focus-outline-color-inverted': colors.cyan400,
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
    '--text-link-color': 'var(--text-link-color-inverted)',
    '--text-link-color-active': 'var(--text-link-color-active-inverted)',
    '--text-link-color-visited': 'var(--text-link-color-visited-inverted)',
    '--text-link-focus-outline-color': 'var(--text-link-focus-outline-color-inverted)',
  },
  [DATA_ATTRIBUTE_SELECTORS.customColor]: {
    '--text-link-color': 'var(--text-link-color-custom)',
    '--text-link-color-active': 'var(--text-link-color-custom)',
    '--text-link-color-visited': 'var(--text-link-color-custom)',
  },
}));

/**
 * A semantic element for navigating between pages. The `TextLink` component is
 * intended to be used within a block of text, and should be nested in a `Text`
 * component. This should happen even when using as a standalone link element
 * as it will inherit many styles from the parent `Text` component.
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
    /* @ts-expect-error - upgrade issue. TODO: Fix this */
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
