import * as React from 'react';
import clsx from 'clsx';
import {
  classSelector,
  withGlobalPrefix,
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
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  size: {
    large: withGlobalPrefix('size-large'),
    small: withGlobalPrefix('size-small'),
    xsmall: withGlobalPrefix('size-xsmall'),
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

const StyledElement = styled(BaseButton)(() => {
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
export const IconButton = React.forwardRef<
  React.ElementRef<'button'>,
  React.PropsWithChildren<PropsWithSx<IconButtonProps>>
>(function IconButton({ size = 'large', className, label, ...props }, ref) {
  return (
    <StyledElement
      ref={ref}
      className={clsx(componentClassName, className, withBreakpoints(size, 'size'))}
      aria-label={label}
      {...props}
    />
  );
});

IconButton.displayName = componentName;
