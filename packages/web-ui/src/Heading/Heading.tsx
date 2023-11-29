import * as React from 'react';
import { useBackground } from '../Box';
import { PropsWithSx } from '../types';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import {
  withGlobalPrefix,
  pxToRem,
  classSelector,
  mediaQueries,
  DATA_ATTRIBUTE_SELECTORS,
  DATA_ATTRIBUTES,
} from '../utils';
import { HeadingProps } from './Heading.props';
import { Typography } from '../Typography';
import clsx from 'clsx';
import { styled } from '../theme';

const componentName = 'Heading';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  variant: {
    displayHeading: withGlobalPrefix('variant-displayHeading'),
    h1: withGlobalPrefix('variant-h1'),
    h2: withGlobalPrefix('variant-h2'),
    h3: withGlobalPrefix('variant-h3'),
    h4: withGlobalPrefix('variant-h4'),
  },
};

const classSelectors = {
  variant: {
    displayHeading: classSelector(classNames.variant.displayHeading),
    h1: classSelector(classNames.variant.h1),
    h2: classSelector(classNames.variant.h2),
    h3: classSelector(classNames.variant.h3),
    h4: classSelector(classNames.variant.h4),
  },
};

const StyledElement = styled(Typography, { shouldForwardProp: prop => prop !== 'color' })<{
  color?: string;
}>(({ color }) => {
  if (color) {
    return { color };
  }
  return {
    fontSize: 'var(--heading-font-size)',
    lineHeight: 'var(--heading-line-height)',
    color: 'var(--heading-color)',
    '--heading-color': colorsCommon.brandPrimaryPurple,
    '--heading-color-on-brand-bg': colorsCommon.brandWhite,
    '--heading-font-size-display-heading': pxToRem(42),
    '--heading-font-size-display-heading-desktop': pxToRem(64),
    '--heading-font-size-h1': pxToRem(32),
    '--heading-font-size-h1-desktop': pxToRem(42),
    '--heading-font-size-h2': pxToRem(28),
    '--heading-font-size-h2-desktop': pxToRem(32),
    '--heading-font-size-h3': pxToRem(22),
    '--heading-font-size-h3-desktop': pxToRem(24),
    '--heading-font-size-h4': pxToRem(18),
    '--heading-font-size-h4-desktop': pxToRem(20),
    '--heading-line-height-display-heading': 1.2,
    '--heading-line-height-h1': 1.2,
    '--heading-line-height-h2': 1.2,
    '--heading-line-height-h2-desktop': 1.5,
    '--heading-line-height-h3': 1.5,
    '--heading-line-height-h4': 1.5,
    [DATA_ATTRIBUTE_SELECTORS.onBrandBackground]: {
      '--heading-color': 'var(--heading-color-on-brand-bg)',
    },
    [classSelectors.variant.displayHeading]: {
      '--heading-font-size': 'var(--heading-font-size-display-heading)',
      '--heading-font-size-desktop': 'var(--heading-font-size-display-heading-desktop)',
      '--heading-line-height': 'var(--heading-line-height-display-heading)',
    },
    [classSelectors.variant.h1]: {
      '--heading-font-size': 'var(--heading-font-size-h1)',
      '--heading-font-size-desktop': 'var(--heading-font-size-h1-desktop)',
      '--heading-line-height': 'var(--heading-line-height-h1)',
    },
    [classSelectors.variant.h2]: {
      '--heading-font-size': 'var(--heading-font-size-h2)',
      '--heading-font-size-desktop': 'var(--heading-font-size-h2-desktop)',
      '--heading-line-height': 'var(--heading-line-height-h2)',
      '--heading-line-height-desktop': 'var(--heading-line-height-h2-desktop)',
    },
    [classSelectors.variant.h3]: {
      '--heading-font-size': 'var(--heading-font-size-h3)',
      '--heading-font-size-desktop': 'var(--heading-font-size-h3-desktop)',
      '--heading-line-height': 'var(--heading-line-height-h3)',
    },
    [classSelectors.variant.h4]: {
      '--heading-font-size': 'var(--heading-font-size-h4)',
      '--heading-font-size-desktop': 'var(--heading-font-size-h4-desktop)',
      '--heading-line-height': 'var(--heading-line-height-h4)',
    },
    [mediaQueries.desktop]: {
      '--heading-font-size': 'var(--heading-font-size-desktop)',
      '--heading-line-height': 'var(--heading-line-height-desktop)',
    },
  };
});

/**
 * Heading renders the primary UW font, to be used for heading-level typography.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Heading = React.forwardRef<
  React.ElementRef<'h2'>,
  React.PropsWithChildren<PropsWithSx<HeadingProps>>
>(({ component, variant = 'h2', color, className, ...props }, ref) => {
  const element = variant === 'displayHeading' ? 'h1' : variant;
  const { isBrandBackground } = useBackground();
  const dataAttributeProps = {
    [DATA_ATTRIBUTES.onBrandBackground]: isBrandBackground || undefined,
  };
  return (
    <StyledElement
      ref={ref}
      component={component || element}
      className={clsx(componentClassName, className, classNames.variant[variant])}
      fontFamily="primary"
      weight="regular"
      color={color}
      {...dataAttributeProps}
      {...props}
    />
  );
});

Heading.displayName = componentName;
