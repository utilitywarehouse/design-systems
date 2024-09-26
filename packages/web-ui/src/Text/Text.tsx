import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import clsx from 'clsx';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { useBackground } from '../Box';
import { TextProps } from './Text.props';
import { styled } from '../theme';
import { fontWeights, fonts } from '../tokens';
import { PropsWithSx } from '../types';
import {
  DATA_ATTRIBUTES,
  DATA_ATTRIBUTE_SELECTORS,
  classSelector,
  mediaQueries,
  pxToRem,
  withGlobalPrefix,
} from '../utils';

const componentName = 'Text';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  noWrap: withGlobalPrefix('no-wrap'),
  variant: {
    subtitle: withGlobalPrefix('variant-subtitle'),
    body: withGlobalPrefix('variant-body'),
    legalNote: withGlobalPrefix('variant-legalNote'),
    caption: withGlobalPrefix('variant-caption'),
  },
  fontWeight: {
    regular: withGlobalPrefix('font-weight-regular'),
    medium: withGlobalPrefix('font-weight-medium'),
    semibold: withGlobalPrefix('font-weight-semibold'),
  },
};

const classSelectors = {
  noWrap: classSelector(classNames.noWrap),
  variant: {
    subtitle: classSelector(classNames.variant.subtitle),
    body: classSelector(classNames.variant.body),
    legalNote: classSelector(classNames.variant.legalNote),
    caption: classSelector(classNames.variant.caption),
  },
  fontWeight: {
    regular: classSelector(classNames.fontWeight.regular),
    medium: classSelector(classNames.fontWeight.medium),
    semibold: classSelector(classNames.fontWeight.semibold),
  },
};

const StyledElement = styled('p', {
  shouldForwardProp: prop => prop !== 'color' && prop !== 'as' && prop !== 'textTransform',
})<{
  color?: string;
  textTransform?: TextProps['textTransform'];
}>(({ color, textTransform }) => {
  return {
    fontFamily: fonts.secondary,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    textTransform: textTransform as any,
    fontSize: 'var(--text-font-size)',
    lineHeight: 'var(--text-line-height)',
    fontWeight: 'var(--text-font-weight)',
    color: 'var(--text-color)',
    '--text-font-weight': 'var(--text-font-weight-regular)',
    '--text-font-weight-regular': fontWeights.secondary.regular,
    '--text-font-weight-medium': fontWeights.secondary.medium,
    '--text-font-weight-semibold': fontWeights.secondary.semibold,
    '--text-color': colorsCommon.brandMidnight,
    '--text-color-inverted': colorsCommon.brandWhite,
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
    [DATA_ATTRIBUTE_SELECTORS.inverted]: {
      '--text-color': 'var(--text-color-inverted)',
    },
    [DATA_ATTRIBUTE_SELECTORS.customColor]: {
      '--text-color': 'var(--text-color-custom)',
    },
    [classSelectors.fontWeight.regular]: {
      '--text-font-weight': 'var(--text-font-weight-regular)',
    },
    [classSelectors.fontWeight.medium]: {
      '--text-font-weight': 'var(--text-font-weight-medium)',
    },
    [classSelectors.fontWeight.semibold]: {
      '--text-font-weight': 'var(--text-font-weight-semibold)',
    },
    [classSelectors.noWrap]: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
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
 */
export const Text = React.forwardRef<
  React.ElementRef<'p'>,
  React.PropsWithChildren<PropsWithSx<TextProps>>
>(
  (
    {
      variant = 'body',
      component = 'p',
      bold,
      noWrap,
      color,
      className,
      inverted,
      asChild,
      fontWeight = 'regular',
      ...props
    },
    ref
  ) => {
    const { isInvertedBackground } = useBackground();
    const dataAttributeProps = {
      [DATA_ATTRIBUTES.inverted]: !color && (inverted || isInvertedBackground) ? '' : undefined,
      [DATA_ATTRIBUTES.customColor]: color !== undefined ? '' : undefined,
    };

    return (
      <StyledElement
        ref={ref}
        as={asChild ? Slot : component}
        className={clsx(
          componentClassName,
          className,
          classNames.variant[variant],
          classNames.fontWeight[fontWeight],
          {
            [classNames.fontWeight.semibold]: bold,
            [classNames.noWrap]: noWrap,
          }
        )}
        color={color}
        {...dataAttributeProps}
        {...props}
      />
    );
  }
);

Text.displayName = componentName;
