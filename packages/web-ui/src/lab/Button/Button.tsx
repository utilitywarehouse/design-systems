import * as React from 'react';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { fonts, fontWeights } from '../../tokens';
import { PropsWithSx } from '../../types';
import {
  classSelector,
  getPrefixedName,
  mediaQueries,
  px,
  pxToRem,
  responsiveClassSelector,
  spacing,
  withBreakpoints,
} from '../../utils';
import { ButtonProps } from './Button.props';
import clsx from 'clsx';
import { styled } from '../../theme';
import { BaseButton } from '../../BaseButton';

const componentName = 'Button';
const label = getPrefixedName(componentName);

const classNames: { [key: string]: { [key: string]: string } } = {
  size: {
    large: getPrefixedName('size-large'),
    small: getPrefixedName('size-small'),
  },
};

const classSelectors = {
  size: {
    large: classSelector(classNames.size.large),
    small: classSelector(classNames.size.small),
    tablet: {
      large: responsiveClassSelector(classNames.size.large, 'tablet'),
      small: responsiveClassSelector(classNames.size.small, 'tablet'),
    },
    desktop: {
      large: responsiveClassSelector(classNames.size.large, 'desktop'),
      small: responsiveClassSelector(classNames.size.small, 'desktop'),
    },
    wide: {
      large: responsiveClassSelector(classNames.size.large, 'wide'),
      small: responsiveClassSelector(classNames.size.small, 'wide'),
    },
  },
};

const StyledButton = styled(BaseButton, { label })<ButtonProps>(() => {
  const sizeStyles = {
    large: {
      '--button-font-size': pxToRem(18),
      '--button-line-height': pxToRem(24),
      '--button-height': pxToRem(48),
      '--button-min-width': px(120),
      '--button-padding-inline': px(24),
      '--button-padding-block': px(12),
      '--button-gap': px(spacing(2)),
      '--button-focus-outline-width': '4px',
    },
    small: {
      '--button-font-size': pxToRem(16),
      '--button-line-height': pxToRem(16),
      '--button-height': pxToRem(32),
      '--button-min-width': px(56),
      '--button-padding-inline': px(16),
      '--button-padding-block': px(8),
      '--button-gap': px(spacing(0.5)),
      '--button-focus-outline-width': '2px',
    },
  };

  return {
    fontFamily: fonts.secondary,
    fontSize: 'var(--button-font-size)',
    fontWeight: fontWeights.secondary.semibold,
    lineHeight: 'var(--button-line-height)',
    minWidth: 'var(--button-min-width)',
    gap: 'var(--button-gap)',
    height: 'var(--button-height)',
    paddingTop: 'var(--button-padding-block)',
    paddingBottom: 'var(--button-padding-block)',
    paddingLeft: 'var(--button-padding-inline)',
    paddingRight: 'var(--button-padding-inline)',
    [classSelectors.size.large]: { ...sizeStyles.large },
    [classSelectors.size.small]: { ...sizeStyles.small },
    [mediaQueries.tablet]: {
      [classSelectors.size.tablet.large]: { ...sizeStyles.large },
      [classSelectors.size.tablet.small]: { ...sizeStyles.small },
    },
    [mediaQueries.desktop]: {
      [classSelectors.size.desktop.large]: { ...sizeStyles.large },
      [classSelectors.size.desktop.small]: { ...sizeStyles.small },
    },
    [mediaQueries.wide]: {
      [classSelectors.size.wide.large]: { ...sizeStyles.large },
      [classSelectors.size.wide.small]: { ...sizeStyles.small },
    },
  };
});

/**
 * Trigger an action or event, such as submitting a form or displaying a dialog.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Button = forwardRef<ElementRef<'button'>, PropsWithChildren<PropsWithSx<ButtonProps>>>(
  function Button({ size = 'large', className, ...props }, forwardedRef) {
    return (
      <StyledButton
        ref={forwardedRef}
        className={clsx(label, className, withBreakpoints(size, 'size'))}
        {...props}
      />
    );
  }
);

Button.displayName = componentName;
