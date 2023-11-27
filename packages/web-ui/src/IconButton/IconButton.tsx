import * as React from 'react';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import clsx from 'clsx';
import {
  classSelector,
  withPrefix,
  mediaQueries,
  pxToRem,
  responsiveClassSelector,
  withBreakpoints,
} from '../utils';
import { styled } from '../theme';
import { BaseButton } from '../BaseButton';
import { IconButtonProps } from './IconButton.props';
import { PropsWithSx } from '../types';

const componentName = 'IconButton';
const componentLabel = withPrefix(componentName);

const classNames: { [key: string]: { [key: string]: string } } = {
  size: {
    large: withPrefix('size-large'),
    small: withPrefix('size-small'),
    xsmall: withPrefix('size-xsmall'),
  },
};

const classSelectors = {
  size: {
    large: classSelector(classNames.size.large),
    small: classSelector(classNames.size.small),
    xsmall: classSelector(classNames.size.xsmall),
    tablet: {
      large: responsiveClassSelector(classNames.size.large, 'tablet'),
      small: responsiveClassSelector(classNames.size.small, 'tablet'),
      xsmall: responsiveClassSelector(classNames.size.xsmall, 'tablet'),
    },
    desktop: {
      large: responsiveClassSelector(classNames.size.large, 'desktop'),
      small: responsiveClassSelector(classNames.size.small, 'desktop'),
      xsmall: responsiveClassSelector(classNames.size.xsmall, 'desktop'),
    },
    wide: {
      large: responsiveClassSelector(classNames.size.large, 'wide'),
      small: responsiveClassSelector(classNames.size.small, 'wide'),
      xsmall: responsiveClassSelector(classNames.size.xsmall, 'wide'),
    },
  },
};

const StyledButton = styled(BaseButton, { label: componentLabel })(() => {
  const sizeStyles = {
    large: {
      '--icon-button-size': pxToRem(48),
      '--focus-outline-width': '4px',
    },
    small: {
      '--icon-button-size': pxToRem(32),
      '--focus-outline-width': '2px',
    },
    xsmall: {
      '--icon-button-size': pxToRem(24),
      '--focus-outline-width': '2px',
    },
  };

  return {
    height: 'var(--icon-button-size)',
    width: 'var(--icon-button-size)',
    [classSelectors.size.large]: { ...sizeStyles.large },
    [classSelectors.size.small]: { ...sizeStyles.small },
    [classSelectors.size.xsmall]: { ...sizeStyles.xsmall },
    [mediaQueries.tablet]: {
      [classSelectors.size.tablet.large]: { ...sizeStyles.large },
      [classSelectors.size.tablet.small]: { ...sizeStyles.small },
      [classSelectors.size.tablet.xsmall]: { ...sizeStyles.xsmall },
    },
    [mediaQueries.desktop]: {
      [classSelectors.size.desktop.large]: { ...sizeStyles.large },
      [classSelectors.size.desktop.small]: { ...sizeStyles.small },
      [classSelectors.size.desktop.xsmall]: { ...sizeStyles.xsmall },
    },
    [mediaQueries.wide]: {
      [classSelectors.size.wide.large]: { ...sizeStyles.large },
      [classSelectors.size.wide.small]: { ...sizeStyles.small },
      [classSelectors.size.wide.xsmall]: { ...sizeStyles.xsmall },
    },
  };
});

/**
 * Trigger an action or event, such as submitting a form or displaying a dialog.
 *
 * This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const IconButton = forwardRef<
  ElementRef<'button'>,
  PropsWithChildren<PropsWithSx<IconButtonProps>>
>(function IconButton({ size = 'large', className, label, ...props }, forwardedRef) {
  return (
    <StyledButton
      ref={forwardedRef}
      className={clsx(label, className, withBreakpoints(size, 'size'))}
      aria-label={label}
      {...props}
    />
  );
});

IconButton.displayName = componentName;
