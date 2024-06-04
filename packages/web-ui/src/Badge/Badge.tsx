import * as React from 'react';
import { PropsWithSx } from '../types';
import { BadgeProps } from './Badge.props';
import { classSelector, px, pxToRem, withGlobalPrefix } from '../utils';
import clsx from 'clsx';
import { styled } from '../theme';
import { fontWeights, fonts } from '../tokens';

const componentName = 'Badge';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  compact: withGlobalPrefix('compact'),
  bottomRadiusZero: withGlobalPrefix('bottom-radius-zero'),
};

const classSelectors = {
  compact: classSelector(classNames.compact),
  bottomRadiusZero: classSelector(classNames.bottomRadiusZero),
};

const StyledElement = styled('span')({
  border: '1px solid red',
  fontSize: pxToRem(13),
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
  lineHeight: pxToRem(16),
  '--badge-padding-inline': px(16),
  '--badge-padding-inline-compact': px(8),
  paddingBlock: px(4),
  paddingInline: 'var(--badge-padding-inline)',
  borderRadius: px(4),
  [classSelectors.compact]: {
    paddingInline: 'var(--badge-padding-inline-compact)',
  },
  [classSelectors.bottomRadiusZero]: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});

/**
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Badge = React.forwardRef<
  React.ElementRef<'span'>,
  React.PropsWithChildren<PropsWithSx<BadgeProps>>
>(({ className, hasBottomRadiusZero, compact = false, ...props }, ref) => {
  return (
    <StyledElement
      ref={ref}
      className={clsx(componentClassName, className, {
        [classNames.compact]: compact,
        [classNames.bottomRadiusZero]: hasBottomRadiusZero,
      })}
      {...props}
    />
  );
});

Badge.displayName = componentName;
