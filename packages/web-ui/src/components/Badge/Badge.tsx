import * as React from 'react';

import clsx from 'clsx';

import { colors } from '@utilitywarehouse/colour-system';

import { BadgeProps } from './Badge.props';
import { tokens } from './Badge.tokens';

import { useBackground } from '../Box';

import {
  COLORSCHEME_SELECTORS,
  DATA_ATTRIBUTES,
  DATA_ATTRIBUTE_SELECTORS,
  classSelector,
  responsiveClassSelector,
  translateBooleanValues,
  withBreakpoints,
} from '../../helpers';
import { styled } from '../../theme';
import { fontWeights, fonts } from '../../tokens';
import { PropsWithSx } from '../../types';
import { mediaQueries, px, pxToRem, withGlobalPrefix } from '../../utils';

const componentName = 'Badge';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  padding: {
    compact: withGlobalPrefix('padding-compact'),
    regular: withGlobalPrefix('padding-regular'),
  },
  variant: {
    soft: withGlobalPrefix('variant-soft'),
    strong: withGlobalPrefix('variant-strong'),
    outline: withGlobalPrefix('variant-outline'),
  },
  bottomRadiusZero: withGlobalPrefix('bottom-radius-zero'),
};

const classSelectors = {
  padding: {
    compact: classSelector(classNames.padding.compact),
    regular: classSelector(classNames.padding.regular),
    tablet: {
      compact: responsiveClassSelector(classNames.padding.compact, 'tablet'),
      regular: responsiveClassSelector(classNames.padding.regular, 'tablet'),
    },
    desktop: {
      compact: responsiveClassSelector(classNames.padding.compact, 'desktop'),
      regular: responsiveClassSelector(classNames.padding.regular, 'desktop'),
    },
    wide: {
      compact: responsiveClassSelector(classNames.padding.compact, 'wide'),
      regular: responsiveClassSelector(classNames.padding.regular, 'wide'),
    },
  },
  variant: {
    soft: classSelector(classNames.variant.soft),
    strong: classSelector(classNames.variant.strong),
    outline: classSelector(classNames.variant.outline),
  },
  bottomRadiusZero: classSelector(classNames.bottomRadiusZero),
};

const StyledElement = styled('span')(() => {
  const paddingStyles = {
    compact: { '--badge-padding-inline': 'var(--badge-padding-inline-compact)' },
    regular: { '--badge-padding-inline': 'var(--badge-padding-inline-regular)' },
  };

  return {
    display: 'inline-flex',
    gap: tokens.badge.gap,
    alignItems: 'center',
    whiteSpace: 'nowrap',
    fontSize: tokens.badge.fontSize,
    fontFamily: tokens.badge.fontFamily,
    fontWeight: tokens.badge.fontWeight,
    fontStyle: 'normal',
    flexShrink: 0,
    lineHeight: tokens.badge.lineHeight,
    textAlign: 'center',
    height: 'fit-content' /* Make sure that the height is not stretched in a Flex/Grid layout */,
    '--badge-padding-inline-regular': tokens.badge.padding.inline.regular,
    '--badge-padding-inline-compact': tokens.badge.padding.inline.compact,
    '--badge-padding-inline': 'var(--badge-padding-inline-regular)',
    paddingBlock: tokens.badge.padding.block,
    paddingInline: 'var(--badge-padding-inline)',
    borderBottomLeftRadius: tokens.badge.borderRadius.bottom.left.default,
    borderBottomRightRadius: tokens.badge.borderRadius.bottom.right.default,
    borderTopLeftRadius: tokens.badge.borderRadius.top.left.default,
    borderTopRightRadius: tokens.badge.borderRadius.top.right.default,
    color: 'var(--badge-color)',
    backgroundColor: 'var(--badge-background-color)',
    [classSelectors.padding.compact]: { ...paddingStyles.compact },
    [classSelectors.padding.regular]: { ...paddingStyles.regular },
    [mediaQueries.tablet]: {
      [classSelectors.padding.tablet.compact]: { ...paddingStyles.compact },
      [classSelectors.padding.tablet.regular]: { ...paddingStyles.regular },
    },
    [mediaQueries.desktop]: {
      [classSelectors.padding.desktop.compact]: { ...paddingStyles.compact },
      [classSelectors.padding.desktop.regular]: { ...paddingStyles.regular },
    },
    [mediaQueries.wide]: {
      [classSelectors.padding.wide.compact]: { ...paddingStyles.compact },
      [classSelectors.padding.wide.regular]: { ...paddingStyles.regular },
    },
    [classSelectors.bottomRadiusZero]: {
      borderBottomLeftRadius: tokens.badge.borderRadius.bottom.left.zero,
      borderBottomRightRadius: tokens.badge.borderRadius.bottom.right.zero,
    },
    [classSelectors.variant.soft]: {
      '--badge-color': 'var(--badge-soft-color)',
      '--badge-background-color': 'var(--badge-soft-background-color)',
    },
    [classSelectors.variant.strong]: {
      '--badge-color': 'var(--badge-strong-color)',
      '--badge-background-color': 'var(--badge-strong-background-color)',
    },
    [classSelectors.variant.outline]: {
      '--badge-color': 'var(--badge-outline-color)',
      '--badge-background-color': 'transparent',
      '--badge-border-color': 'var(--badge-outline-border-color)',
      boxShadow: 'inset 0 0 0 2px var(--badge-border-color)',
      [DATA_ATTRIBUTE_SELECTORS.inverted]: {
        '--badge-color': 'var(--badge-outline-color-inverted)',
        '--badge-border-color': 'var(--badge-outline-border-color-inverted)',
      },
    },
    [COLORSCHEME_SELECTORS.cyan]: {
      '--badge-soft-color': tokens.badge.soft.cyan.color,
      '--badge-soft-background-color': tokens.badge.soft.cyan.backgroundColor,
      '--badge-strong-color': tokens.badge.strong.cyan.color,
      '--badge-strong-background-color': tokens.badge.strong.cyan.backgroundColor,
      '--badge-outline-color': tokens.badge.outline.cyan.color.default,
      '--badge-outline-border-color': tokens.badge.outline.cyan.borderColor.default,
      '--badge-outline-color-inverted': tokens.badge.outline.cyan.color.inverted,
      '--badge-outline-border-color-inverted': tokens.badge.outline.cyan.borderColor.inverted,
    },
    [COLORSCHEME_SELECTORS.green]: {
      '--badge-soft-color': tokens.badge.soft.green.color,
      '--badge-soft-background-color': tokens.badge.soft.green.backgroundColor,
      '--badge-strong-color': tokens.badge.strong.green.color,
      '--badge-strong-background-color': tokens.badge.strong.green.backgroundColor,
      '--badge-outline-color': tokens.badge.outline.green.color.default,
      '--badge-outline-border-color': tokens.badge.outline.green.borderColor.default,
      '--badge-outline-color-inverted': tokens.badge.outline.green.color.inverted,
      '--badge-outline-border-color-inverted': tokens.badge.outline.green.borderColor.inverted,
    },
    [COLORSCHEME_SELECTORS.red]: {
      '--badge-soft-color': tokens.badge.soft.red.color,
      '--badge-soft-background-color': tokens.badge.soft.red.backgroundColor,
      '--badge-strong-color': tokens.badge.strong.red.color,
      '--badge-strong-background-color': tokens.badge.strong.red.backgroundColor,
      '--badge-outline-color': tokens.badge.outline.red.color.default,
      '--badge-outline-border-color': tokens.badge.outline.red.borderColor.default,
      '--badge-outline-color-inverted': tokens.badge.outline.red.color.inverted,
      '--badge-outline-border-color-inverted': tokens.badge.outline.red.borderColor.inverted,
    },
    [COLORSCHEME_SELECTORS.gold]: {
      '--badge-soft-color': tokens.badge.soft.gold.color,
      '--badge-soft-background-color': tokens.badge.soft.gold.backgroundColor,
      '--badge-strong-color': tokens.badge.strong.gold.color,
      '--badge-strong-background-color': tokens.badge.strong.gold.backgroundColor,
      '--badge-outline-color': tokens.badge.outline.gold.color.default,
      '--badge-outline-border-color': tokens.badge.outline.gold.borderColor.default,
      '--badge-outline-color-inverted': tokens.badge.outline.gold.color.inverted,
      '--badge-outline-border-color-inverted': tokens.badge.outline.gold.borderColor.inverted,
    },
    [COLORSCHEME_SELECTORS.grey]: {
      '--badge-soft-color': tokens.badge.soft.grey.color,
      '--badge-soft-background-color': tokens.badge.soft.grey.backgroundColor,
      '--badge-strong-color': tokens.badge.strong.grey.color,
      '--badge-strong-background-color': tokens.badge.strong.grey.backgroundColor,
      '--badge-outline-color': tokens.badge.outline.grey.color.default,
      '--badge-outline-border-color': tokens.badge.outline.grey.borderColor.default,
      '--badge-outline-color-inverted': tokens.badge.outline.grey.color.inverted,
      '--badge-outline-border-color-inverted': tokens.badge.outline.grey.borderColor.inverted,
    },
  };
});

/**
 * Provide additional context (such as status), or to draw attention to another
 * interface element.
 */
export const Badge = React.forwardRef<
  React.ElementRef<'span'>,
  React.PropsWithChildren<PropsWithSx<BadgeProps>>
>(
  (
    {
      className,
      colorScheme = 'cyan',
      variant = 'soft',
      bottomRadiusZero,
      compact = false,
      inverted = false,
      ...props
    },
    ref
  ) => {
    const { isInvertedBackground } = useBackground();

    const dataAttributeProps = {
      [DATA_ATTRIBUTES.colorscheme]: colorScheme,
      [DATA_ATTRIBUTES.inverted]:
        (inverted || isInvertedBackground) && variant === 'outline' ? '' : undefined,
    };
    return (
      <StyledElement
        ref={ref}
        className={clsx(
          componentClassName,
          className,
          classNames.variant[variant],
          withBreakpoints(
            translateBooleanValues(compact, { true: 'compact', false: 'regular' }),
            'padding'
          ),
          { [classNames.bottomRadiusZero]: bottomRadiusZero }
        )}
        {...dataAttributeProps}
        {...props}
      />
    );
  }
);

Badge.displayName = componentName;
