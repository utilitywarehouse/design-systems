import * as React from 'react';
import { colors } from '@utilitywarehouse/colour-system';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { fonts, fontWeights } from '../../tokens';
import { PropsWithSx } from '../../types';
import {
  classSelector,
  withGlobalPrefix,
  mediaQueries,
  px,
  pxToRem,
  responsiveClassSelector,
  spacing,
  withBreakpoints,
} from '../../utils';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { styled } from '../../theme';
import { LinkProps } from './Link.props';

const componentName = 'Link';
const label = withGlobalPrefix(componentName);

const classNames = {
  size: {
    large: withGlobalPrefix('size-large'),
    small: withGlobalPrefix('size-small'),
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

const StyledLink = styled('a', { label })<LinkProps>(() => {
  const sizeStyles = {
    large: {
      '--link-font-size': pxToRem(18),
      '--link-line-height': pxToRem(24),
      '--link-height': pxToRem(24),
      '--link-underline-offset': px(2),
    },
    small: {
      '--link-font-size': pxToRem(16),
      '--link-line-height': pxToRem(16),
      '--link-height': pxToRem(16),
      '--link-underline-offset': px(-1),
    },
  };

  return {
    // unset button styles when asChild is used
    ':where(button)': {
      outline: 'transparent',
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      padding: 0,
    },
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexShrink: 0,
    gap: px(spacing(0.5)),
    fontFamily: fonts.secondary,
    fontSize: 'var(--link-font-size)',
    lineHeight: 'var(--link-line-height)',
    height: 'var(--link-height)',
    fontWeight: fontWeights.secondary.semibold,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationThickness: px(2),
    borderRadius: px(4),
    color: 'var(--link-color)',
    textDecorationColor: 'var(--link-underline-color)',
    textUnderlinePosition: 'under',
    textUnderlineOffset: 'var(--link-underline-offset)',
    '--link-color-default': colors.cyan800,
    '--link-color-hover': colors.cyan1000,
    '--link-color': 'var(--link-color-default)',
    '--link-underline-color-default': colors.cyan300,
    '--link-underline-color-hover': colors.cyan500,
    '--link-underline-color-active': colors.cyan700,
    '--link-underline-color': 'var(--link-underline-color-default)',
    '@media (hover: hover)': {
      '&:where(:hover)': {
        '--link-underline-color': 'var(--link-underline-color-hover)',
        '--link-color': 'var(--link-color-hover)',
      },
    },
    '&:where(:active)': {
      '--link-underline-color': 'var(--link-underline-color-active)',
    },
    '&:where(:focus-visible)': {
      textDecoration: 'none',
      outlineWidth: px(2),
      outlineStyle: 'solid',
      outlineColor: colors.cyan700,
      outlineOffset: 0,
    },
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
 * A semantic Call To Action for navigating between pages.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Link = forwardRef<ElementRef<'a'>, PropsWithChildren<PropsWithSx<LinkProps>>>(
  function Link({ className, asChild, children, size = 'large', ...props }, forwardedRef) {
    return (
      <StyledLink
        as={asChild ? Slot : 'a'}
        ref={forwardedRef}
        className={clsx(label, className, withBreakpoints(size, 'size'))}
        {...props}
      >
        {children}
      </StyledLink>
    );
  }
);

Link.displayName = componentName;
