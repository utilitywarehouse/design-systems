import * as React from 'react';
import { useBackground } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import {
  DATA_ATTRIBUTES,
  DATA_ATTRIBUTE_SELECTORS,
  classSelector,
  mediaQueries,
  pxToRem,
  withGlobalPrefix,
} from '../utils';
import { Typography } from '../Typography';
import { TextProps } from './Text.props';
import { PropsWithSx } from '../types';
import clsx from 'clsx';
import { styled } from '../theme';
import { fontWeights } from '../tokens';

const componentName = 'Text';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  bold: withGlobalPrefix('bold'),
  variant: {
    subtitle: withGlobalPrefix('variant-subtitle'),
    body: withGlobalPrefix('variant-body'),
    legalNote: withGlobalPrefix('variant-legalNote'),
    caption: withGlobalPrefix('variant-caption'),
  },
};

const classSelectors = {
  bold: classSelector(classNames.bold),
  variant: {
    subtitle: classSelector(classNames.variant.subtitle),
    body: classSelector(classNames.variant.body),
    legalNote: classSelector(classNames.variant.legalNote),
    caption: classSelector(classNames.variant.caption),
  },
};

const StyledElement = styled(Typography, { shouldForwardProp: prop => prop !== 'color' })<{
  color?: string;
}>(({ color }) => {
  return {
    fontSize: 'var(--text-font-size)',
    lineHeight: 'var(--text-line-height)',
    fontWeight: 'var(--text-font-weight)',
    color: 'var(--text-color)',
    '--text-font-weight': fontWeights.secondary.regular,
    '--text-font-weight-bold': fontWeights.secondary.semibold,
    '--text-color': colorsCommon.brandMidnight,
    '--text-color-on-brand-bg': colorsCommon.brandWhite,
    '--text-color-custom': color,
    '--text-font-size-subtitle': pxToRem(18),
    '--text-font-size-subtitle-desktop': pxToRem(20),
    '--text-font-size-body': pxToRem(16),
    '--text-font-size-legalNote': pxToRem(14),
    '--text-font-size-caption': pxToRem(12),
    '--text-line-height-subtitle': 1.5,
    '--text-line-height-body': 1.5,
    '--text-line-height-legalNote': 1.5,
    '--text-line-height-caption': 2,
    [DATA_ATTRIBUTE_SELECTORS.onBrandBackground]: {
      '--text-color': 'var(--text-color-on-brand-bg)',
    },
    [DATA_ATTRIBUTE_SELECTORS.customColor]: {
      '--text-color': 'var(--text-color-custom)',
    },
    [classSelectors.bold]: {
      '--text-font-weight': 'var(--text-font-weight-bold)',
    },
    [classSelectors.variant.subtitle]: {
      '--text-font-size': 'var(--text-font-size-subtitle)',
      '--text-font-size-desktop': 'var(--text-font-size-subtitle-desktop)',
      '--text-line-height': 'var(--text-line-height-subtitle)',
    },
    [classSelectors.variant.body]: {
      '--text-font-size': 'var(--text-font-size-body)',
      '--text-font-size-desktop': 'var(--text-font-size-body)',
      '--text-line-height': 'var(--text-line-height-body)',
    },
    [classSelectors.variant.legalNote]: {
      '--text-font-size': 'var(--text-font-size-legalNote)',
      '--text-font-size-desktop': 'var(--text-font-size-legalNote)',
      '--text-line-height': 'var(--text-line-height-legalNote)',
    },
    [classSelectors.variant.caption]: {
      '--text-font-size': 'var(--text-font-size-caption)',
      '--text-font-size-desktop': 'var(--text-font-size-caption)',
      '--text-line-height': 'var(--text-line-height-caption)',
    },
    [mediaQueries.desktop]: {
      '--text-font-size': 'var(--text-font-size-desktop)',
    },
  };
});

/**
 * Text renders the secondary UW font, Work Sans, to be used for body text.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Text = React.forwardRef<
  React.ElementRef<'span'>,
  React.PropsWithChildren<PropsWithSx<TextProps>>
>(({ variant = 'body', bold, color, className, ...props }, ref) => {
  const { isBrandBackground } = useBackground();
  const dataAttributeProps = {
    [DATA_ATTRIBUTES.onBrandBackground]: !color && isBrandBackground ? '' : undefined,
    [DATA_ATTRIBUTES.customColor]: color !== undefined ? '' : undefined,
  };

  return (
    <StyledElement
      ref={ref}
      className={clsx(componentClassName, className, classNames.variant[variant], {
        [classNames.bold]: bold,
      })}
      fontFamily="secondary"
      color={color}
      {...dataAttributeProps}
      {...props}
    />
  );
});

Text.displayName = componentName;
