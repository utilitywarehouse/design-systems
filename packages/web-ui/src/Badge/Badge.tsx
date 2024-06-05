import * as React from 'react';
import { PropsWithSx } from '../types';
import { BadgeProps } from './Badge.props';
import {
  COLORSCHEME_SELECTORS,
  DATA_ATTRIBUTES,
  DATA_ATTRIBUTE_SELECTORS,
  classSelector,
  px,
  pxToRem,
  withGlobalPrefix,
} from '../utils';
import clsx from 'clsx';
import { styled } from '../theme';
import { fontWeights, fonts } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';
import { useBackground } from '../Box';

const componentName = 'Badge';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  compact: withGlobalPrefix('compact'),
  bottomRadiusZero: withGlobalPrefix('bottom-radius-zero'),
  variant: {
    soft: withGlobalPrefix('variant-soft'),
    strong: withGlobalPrefix('variant-strong'),
    outline: withGlobalPrefix('variant-outline'),
  },
};

const classSelectors = {
  compact: classSelector(classNames.compact),
  bottomRadiusZero: classSelector(classNames.bottomRadiusZero),
  variant: {
    soft: classSelector(classNames.variant.soft),
    strong: classSelector(classNames.variant.strong),
    outline: classSelector(classNames.variant.outline),
  },
};

const StyledElement = styled('span')({
  display: 'inline-flex',
  gap: px(4),
  alignItems: 'center',
  whiteSpace: 'nowrap',
  fontSize: pxToRem(13),
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
  fontStyle: 'normal',
  flexShrink: 0,
  lineHeight: pxToRem(16),
  textAlign: 'center',
  /* Make sure that the height is not stretched in a Flex/Grid layout */
  height: 'fit-content',
  '--badge-padding-inline': px(16),
  '--badge-padding-inline-compact': px(8),
  paddingBlock: px(4),
  paddingInline: 'var(--badge-padding-inline)',
  borderRadius: px(4),
  color: 'var(--badge-color)',
  backgroundColor: 'var(--badge-background-color)',
  [classSelectors.compact]: {
    paddingInline: 'var(--badge-padding-inline-compact)',
  },
  [classSelectors.bottomRadiusZero]: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
    '--badge-soft-color': colors.cyan900,
    '--badge-soft-background-color': colors.cyan200,
    '--badge-strong-color': colors.cyan50,
    '--badge-strong-background-color': colors.cyan600,
    '--badge-outline-color': colors.cyan900,
    '--badge-outline-border-color': colors.cyan600,
    '--badge-outline-color-inverted': colors.cyan50,
    '--badge-outline-border-color-inverted': colors.cyan500,
  },
  [COLORSCHEME_SELECTORS.green]: {
    '--badge-soft-color': colors.green900,
    '--badge-soft-background-color': colors.green200,
    '--badge-strong-color': colors.green50,
    '--badge-strong-background-color': colors.green600,
    '--badge-outline-color': colors.green900,
    '--badge-outline-border-color': colors.green600,
    '--badge-outline-color-inverted': colors.green50,
    '--badge-outline-border-color-inverted': colors.green400,
  },
  [COLORSCHEME_SELECTORS.red]: {
    '--badge-soft-color': colors.red900,
    '--badge-soft-background-color': colors.red200,
    '--badge-strong-color': colors.red50,
    '--badge-strong-background-color': colors.red500,
    '--badge-outline-color': colors.red900,
    '--badge-outline-border-color': colors.red500,
    '--badge-outline-color-inverted': colors.red50,
    '--badge-outline-border-color-inverted': colors.red500,
  },
  [COLORSCHEME_SELECTORS.gold]: {
    '--badge-soft-color': colors.gold900,
    '--badge-soft-background-color': colors.gold200,
    '--badge-strong-color': colors.gold900,
    '--badge-strong-background-color': colors.gold300,
    '--badge-outline-color': colors.gold900,
    '--badge-outline-border-color': colors.gold500,
    '--badge-outline-color-inverted': colors.gold50,
    '--badge-outline-border-color-inverted': colors.gold400,
  },
  [COLORSCHEME_SELECTORS.grey]: {
    '--badge-soft-color': colors.grey900,
    '--badge-soft-background-color': colors.grey100,
    '--badge-strong-color': colors.grey900,
    '--badge-strong-background-color': colors.grey200,
    '--badge-outline-color': colors.grey900,
    '--badge-outline-border-color': colors.grey500,
    '--badge-outline-color-inverted': colors.grey50,
    '--badge-outline-border-color-inverted': colors.grey300,
  },
});

/**
 * Provide additional context (such as status), or use Badge to draw attention to another interface element.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
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
    const { isBrandBackground } = useBackground();

    const dataAttributeProps = {
      [DATA_ATTRIBUTES.colorscheme]: colorScheme,
      [DATA_ATTRIBUTES.inverted]:
        (inverted || isBrandBackground) && variant === 'outline' ? '' : undefined,
    };
    return (
      <StyledElement
        ref={ref}
        className={clsx(componentClassName, className, classNames.variant[variant], {
          [classNames.compact]: compact,
          [classNames.bottomRadiusZero]: bottomRadiusZero,
        })}
        {...dataAttributeProps}
        {...props}
      />
    );
  }
);

Badge.displayName = componentName;
