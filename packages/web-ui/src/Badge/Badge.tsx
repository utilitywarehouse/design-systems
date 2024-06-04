import * as React from 'react';
import { PropsWithSx } from '../types';
import { BadgeProps } from './Badge.props';
import {
  COLORSCHEME_SELECTORS,
  DATA_ATTRIBUTES,
  classSelector,
  px,
  pxToRem,
  withGlobalPrefix,
} from '../utils';
import clsx from 'clsx';
import { styled } from '../theme';
import { fontWeights, fonts } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';

const componentName = 'Badge';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  compact: withGlobalPrefix('compact'),
  bottomRadiusZero: withGlobalPrefix('bottom-radius-zero'),
  variant: {
    soft: withGlobalPrefix('variant-soft'),
  },
};

const classSelectors = {
  compact: classSelector(classNames.compact),
  bottomRadiusZero: classSelector(classNames.bottomRadiusZero),
  variant: {
    soft: classSelector(classNames.variant.soft),
  },
};

const StyledElement = styled('span')({
  fontSize: pxToRem(13),
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
  lineHeight: pxToRem(16),
  '--badge-padding-inline': px(16),
  '--badge-padding-inline-compact': px(8),
  paddingBlock: px(4),
  paddingInline: 'var(--badge-padding-inline)',
  borderRadius: px(4),
  backgroundColor: 'var(--badge-background-color)',
  [classSelectors.compact]: {
    paddingInline: 'var(--badge-padding-inline-compact)',
  },
  [classSelectors.bottomRadiusZero]: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  [COLORSCHEME_SELECTORS.cyan]: {
    '--badge-soft-background-color': colors.cyan200,
  },
  [classSelectors.variant.soft]: {
    '--badge-background-color': 'var(--badge-soft-background-color)',
  },
});

/**
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
      hasBottomRadiusZero,
      compact = false,
      ...props
    },
    ref
  ) => {
    const dataAttributeProps = {
      [DATA_ATTRIBUTES.colorscheme]: colorScheme,
    };
    return (
      <StyledElement
        ref={ref}
        className={clsx(componentClassName, className, classNames.variant[variant], {
          [classNames.compact]: compact,
          [classNames.bottomRadiusZero]: hasBottomRadiusZero,
        })}
        {...dataAttributeProps}
        {...props}
      />
    );
  }
);

Badge.displayName = componentName;
