import * as React from 'react';
import clsx from 'clsx';
import { BaseButton } from '../BaseButton';
import { ButtonProps } from './Button.props';
import { styled } from '../theme';
import { fontWeights, fonts } from '../tokens';
import { PropsWithSx } from '../types';
import {
  classSelector,
  mediaQueries,
  px,
  pxToRem,
  responsiveClassSelector,
  withBreakpoints,
  withGlobalPrefix,
} from '../utils';

const componentName = 'Button';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  size: {
    medium: withGlobalPrefix('size-medium'),
    small: withGlobalPrefix('size-small'),
  },
};

const classSelectors = {
  size: {
    medium: classSelector(classNames.size.medium),
    small: classSelector(classNames.size.small),
    tablet: {
      medium: responsiveClassSelector(classNames.size.medium, 'tablet'),
      small: responsiveClassSelector(classNames.size.small, 'tablet'),
    },
    desktop: {
      medium: responsiveClassSelector(classNames.size.medium, 'desktop'),
      small: responsiveClassSelector(classNames.size.small, 'desktop'),
    },
    wide: {
      medium: responsiveClassSelector(classNames.size.medium, 'wide'),
      small: responsiveClassSelector(classNames.size.small, 'wide'),
    },
  },
};

const StyledElement = styled(BaseButton)<ButtonProps>(() => {
  const sizeStyles = {
    medium: {
      '--button-line-height': 1.5,
      '--button-min-width': px(136),
      '--button-padding-inline': px(24),
      '--button-padding-block': px(12),
    },
    small: {
      '--button-line-height': 1,
      '--button-min-width': px(120),
      '--button-padding-inline': px(16),
      '--button-padding-block': px(8),
    },
  };

  return {
    fontFamily: fonts.secondary,
    fontSize: pxToRem(16),
    fontWeight: fontWeights.secondary.medium,
    lineHeight: 'var(--button-line-height)',
    minWidth: 'var(--button-min-width)',
    gap: px(8),
    paddingBlock: 'var(--button-padding-block)',
    paddingInline: 'var(--button-padding-inline)',
    [classSelectors.size.medium]: { ...sizeStyles.medium },
    [classSelectors.size.small]: { ...sizeStyles.small },
    [mediaQueries.tablet]: {
      [classSelectors.size.tablet.medium]: { ...sizeStyles.medium },
      [classSelectors.size.tablet.small]: { ...sizeStyles.small },
    },
    [mediaQueries.desktop]: {
      [classSelectors.size.desktop.medium]: { ...sizeStyles.medium },
      [classSelectors.size.desktop.small]: { ...sizeStyles.small },
    },
    [mediaQueries.wide]: {
      [classSelectors.size.wide.medium]: { ...sizeStyles.medium },
      [classSelectors.size.wide.small]: { ...sizeStyles.small },
    },
  };
});

/**
 * Trigger an action or event, such as submitting a form or displaying a dialog.
 *
 * > This component is not intended for use on the midnight & purple brand colours.
 */
export const Button = React.forwardRef<
  React.ElementRef<'button'>,
  React.PropsWithChildren<PropsWithSx<ButtonProps>>
>(function Button({ size = 'medium', className, ...props }, ref) {
  return (
    <StyledElement
      ref={ref}
      className={clsx(componentClassName, className, withBreakpoints(size, 'size'))}
      {...props}
    />
  );
});

Button.displayName = componentName;
