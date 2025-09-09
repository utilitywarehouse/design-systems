import * as React from 'react';

import clsx from 'clsx';

import { IconButtonProps } from './IconButton.props';

import { BaseButton } from '../BaseButton';

import { classSelector, responsiveClassSelector, withBreakpoints } from '../../helpers';
import { styled } from '../../theme';
import { PropsWithSx } from '../../types';
import { mediaQueries, pxToRem, withGlobalPrefix } from '../../utils';

const componentName = 'IconButton';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  size: {
    medium: withGlobalPrefix('size-medium'),
    small: withGlobalPrefix('size-small'),
    xsmall: withGlobalPrefix('size-xsmall'),
  },
};

const classSelectors = {
  size: {
    medium: classSelector(classNames.size.medium),
    small: classSelector(classNames.size.small),
    xsmall: classSelector(classNames.size.xsmall),
    tablet: {
      medium: responsiveClassSelector(classNames.size.medium, 'tablet'),
      small: responsiveClassSelector(classNames.size.small, 'tablet'),
      xsmall: responsiveClassSelector(classNames.size.xsmall, 'tablet'),
    },
    desktop: {
      medium: responsiveClassSelector(classNames.size.medium, 'desktop'),
      small: responsiveClassSelector(classNames.size.small, 'desktop'),
      xsmall: responsiveClassSelector(classNames.size.xsmall, 'desktop'),
    },
    wide: {
      medium: responsiveClassSelector(classNames.size.medium, 'wide'),
      small: responsiveClassSelector(classNames.size.small, 'wide'),
      xsmall: responsiveClassSelector(classNames.size.xsmall, 'wide'),
    },
  },
};

const StyledElement = styled(BaseButton)(() => {
  const sizeStyles = {
    medium: { '--icon-button-size': 'var(--icon-button-size-medium)' },
    small: { '--icon-button-size': 'var(--icon-button-size-small)' },
    xsmall: { '--icon-button-size': 'var(--icon-button-size-xsmall)' },
  };

  return {
    height: 'var(--icon-button-size)',
    width: 'var(--icon-button-size)',
    '--icon-button-size-medium': pxToRem(48),
    '--icon-button-size-small': pxToRem(32),
    '--icon-button-size-xsmall': pxToRem(24),
    [classSelectors.size.medium]: { ...sizeStyles.medium },
    [classSelectors.size.small]: { ...sizeStyles.small },
    [classSelectors.size.xsmall]: { ...sizeStyles.xsmall },
    [mediaQueries.tablet]: {
      [classSelectors.size.tablet.medium]: { ...sizeStyles.medium },
      [classSelectors.size.tablet.small]: { ...sizeStyles.small },
      [classSelectors.size.tablet.xsmall]: { ...sizeStyles.xsmall },
    },
    [mediaQueries.desktop]: {
      [classSelectors.size.desktop.medium]: { ...sizeStyles.medium },
      [classSelectors.size.desktop.small]: { ...sizeStyles.small },
      [classSelectors.size.desktop.xsmall]: { ...sizeStyles.xsmall },
    },
    [mediaQueries.wide]: {
      [classSelectors.size.wide.medium]: { ...sizeStyles.medium },
      [classSelectors.size.wide.small]: { ...sizeStyles.small },
      [classSelectors.size.wide.xsmall]: { ...sizeStyles.xsmall },
    },
  };
});

/**
 * Trigger an action or event, such as submitting a form or displaying a dialog.
 */
export const IconButton = React.forwardRef<
  React.ElementRef<'button'>,
  React.PropsWithChildren<PropsWithSx<IconButtonProps>>
>(function IconButton({ size = 'medium', className, label, ...props }, ref) {
  return (
    /* @ts-expect-error - upgrade issue. TODO: Fix this */
    <StyledElement
      ref={ref}
      className={clsx(componentClassName, className, withBreakpoints(size, 'size'))}
      aria-label={label}
      {...props}
    />
  );
});

IconButton.displayName = componentName;
