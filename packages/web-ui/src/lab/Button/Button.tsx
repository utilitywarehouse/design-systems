import * as React from 'react';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { fonts, fontWeights } from '../../tokens';
import { PropsWithSx } from '../../types';
import {
  classSelector,
  dataAttributes,
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
import { Slot } from '@radix-ui/react-slot';
import { styled } from '../../theme';

const componentName = 'Button';
const label = getPrefixedName(componentName);

const classNames = {
  variant: {
    solid: getPrefixedName('variant-solid'),
    outline: getPrefixedName('variant-outline'),
    ghost: getPrefixedName('variant-ghost'),
  },
  size: {
    large: getPrefixedName('size-large'),
    small: getPrefixedName('size-small'),
  },
};

const classSelectors = {
  variant: {
    solid: classSelector(classNames.variant.solid),
    outline: classSelector(classNames.variant.outline),
    ghost: classSelector(classNames.variant.ghost),
  },
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

const StyledButton = styled('button', { label })<ButtonProps>(() => {
  const sizeStyles = {
    large: {
      '--button-font-size': pxToRem(18),
      '--button-line-height': pxToRem(24),
      '--button-height': pxToRem(48),
      '--button-min-width': px(120),
      '--button-padding-inline': px(24),
      '--button-padding-block': px(12),
      '--button-gap': px(spacing(2)),
      '--focus-outline-width': '4px',
    },
    small: {
      '--button-font-size': pxToRem(16),
      '--button-line-height': pxToRem(16),
      '--button-height': pxToRem(32),
      '--button-min-width': px(56),
      '--button-padding-inline': px(16),
      '--button-padding-block': px(8),
      '--button-gap': px(spacing(0.5)),
      '--focus-outline-width': '2px',
    },
  };

  return {
    all: 'unset',
    outline: 'transparent',
    appearance: 'none',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexShrink: 0,
    userSelect: 'none',
    verticalAlign: 'top',
    WebkitTapHighlightColor: 'transparent',
    WebkitTouchCallout: 'none',
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.semibold,
    borderRadius: px(9999),
    // make clicks not need to wait and observe a potential double click, making the buttons feel faster
    touchAction: 'manipulation',
    gap: 'var(--button-gap)',
    color: 'var(--button-foreground-color)',
    backgroundColor: 'var(--button-background-color)',
    border: 'none',
    fontSize: 'var(--button-font-size)',
    lineHeight: 'var(--button-line-height)',
    minWidth: 'var(--button-min-width)',
    height: 'var(--button-height)',
    paddingTop: 'var(--button-padding-block)',
    paddingBottom: 'var(--button-padding-block)',
    paddingLeft: 'var(--button-padding-inline)',
    paddingRight: 'var(--button-padding-inline)',
    '> :where(svg, [data-icon])': {
      // as UW icons use currentColor by default, this will fallback to the Button's color property if not set.
      color: 'var(--button-icon-color)',
    },
    '--button-focus-outline':
      '0 0 0 var(--focus-outline-width, 0) var(--focus-outline-color, transparent)',
    [dataAttributes.cyan]: {
      '--button-solid-foreground-color': colors.cyan1000,
      '--button-solid-background-color': colors.cyan400,
      '--button-solid-background-color-hover': colors.cyan500,
      '--button-solid-background-color-active': colors.cyan300,
      '--button-solid-foreground-color-disabled': colors.cyan300,
      '--button-solid-background-color-disabled': colors.cyan100,
      '--button-solid-icon-color': colors.cyan800,
      '--button-ghost-foreground-color': colors.cyan1000,
      '--button-ghost-background-color-hover': colors.cyan100,
      '--button-ghost-background-color-active': colors.cyan200,
      '--button-ghost-foreground-color-disabled': colors.cyan300,
      '--button-ghost-icon-color': colors.cyan600,
      '--button-outline-foreground-color': colors.cyan1000,
      '--button-outline-border-color': colors.cyan400,
      '--button-outline-background-color-hover': colors.cyan75,
      '--button-outline-background-color-active': colors.cyan200,
      '--button-outline-foreground-color-disabled': colors.cyan300,
      '--button-outline-border-color-disabled': colors.cyan300,
      '--button-outline-icon-color': colors.cyan600,
      '--focus-outline-color': colors.cyan700,
    },
    [dataAttributes.red]: {
      '--button-solid-foreground-color': colorsCommon.brandWhite,
      '--button-solid-background-color': colors.red500,
      '--button-solid-background-color-hover': colors.red600,
      '--button-solid-background-color-active': colors.red700,
      '--button-solid-foreground-color-disabled': colors.red300,
      '--button-solid-background-color-disabled': colors.red100,
      '--button-ghost-foreground-color': colors.red900,
      '--button-ghost-background-color-hover': colors.red100,
      '--button-ghost-background-color-active': colors.red200,
      '--button-ghost-foreground-color-disabled': colors.red300,
      '--button-ghost-icon-color': colors.red600,
      '--button-outline-foreground-color': colors.red900,
      '--button-outline-border-color': colors.red500,
      '--button-outline-background-color-hover': colors.red100,
      '--button-outline-background-color-active': colors.red200,
      '--button-outline-foreground-color-disabled': colors.red300,
      '--button-outline-border-color-disabled': colors.red300,
      '--button-outline-icon-color': colors.red600,
      '--focus-outline-color': colors.red700,
    },
    [dataAttributes.green]: {
      '--button-solid-foreground-color': colorsCommon.brandWhite,
      '--button-solid-background-color': colors.green500,
      '--button-solid-background-color-hover': colors.green600,
      '--button-solid-background-color-active': colors.green700,
      '--button-solid-foreground-color-disabled': colors.green300,
      '--button-solid-background-color-disabled': colors.green100,
      '--button-ghost-foreground-color': colors.green900,
      '--button-ghost-background-color-hover': colors.green100,
      '--button-ghost-background-color-active': colors.green200,
      '--button-ghost-foreground-color-disabled': colors.green300,
      '--button-ghost-icon-color': colors.green600,
      '--button-outline-foreground-color': colors.green900,
      '--button-outline-border-color': colors.green600,
      '--button-outline-background-color-hover': colors.green100,
      '--button-outline-background-color-active': colors.green200,
      '--button-outline-foreground-color-disabled': colors.green300,
      '--button-outline-border-color-disabled': colors.green300,
      '--button-outline-icon-color': colors.green600,
      '--focus-outline-color': colors.green700,
    },
    [dataAttributes.gold]: {
      '--button-outline-foreground-color': colors.gold900,
      '--button-outline-border-color': colors.gold500,
      '--button-outline-background-color-hover': colors.gold100,
      '--button-outline-background-color-active': colors.gold200,
      '--button-ghost-foreground-color': colors.gold900,
      '--button-ghost-background-color-hover': colors.gold100,
      '--button-ghost-background-color-active': colors.gold200,
      '--button-ghost-foreground-color-disabled': colors.gold300,
      '--button-ghost-icon-color': colors.gold600,
      '--button-outline-foreground-color-disabled': colors.gold300,
      '--button-outline-border-color-disabled': colors.gold300,
      '--button-outline-icon-color': colors.gold600,
      '--focus-outline-color': colors.gold700,
    },
    [dataAttributes.grey]: {
      '--button-outline-foreground-color': colors.grey1000,
      '--button-outline-border-color': colors.grey500,
      '--button-outline-background-color-hover': colors.grey100,
      '--button-outline-background-color-active': colors.grey175,
      '--button-ghost-foreground-color': colors.grey1000,
      '--button-ghost-background-color-hover': colors.grey100,
      '--button-ghost-background-color-active': colors.grey175,
      '--button-ghost-foreground-color-disabled': colors.grey300,
      '--button-ghost-icon-color': colors.grey800,
      '--button-outline-foreground-color-disabled': colors.grey300,
      '--button-outline-border-color-disabled': colors.grey300,
      '--focus-outline-color': colors.grey700,
    },
    [classSelectors.variant.solid]: {
      '--button-foreground-color': 'var(--button-solid-foreground-color)',
      '--button-background-color': 'var(--button-solid-background-color)',
      '--button-background-color-hover': 'var(--button-solid-background-color-hover)',
      '--button-background-color-active': 'var(--button-solid-background-color-active)',
      '--button-foreground-color-disabled': 'var(--button-solid-foreground-color-disabled)',
      '--button-background-color-disabled': 'var(--button-solid-background-color-disabled)',
      '--button-icon-color': 'var(--button-solid-icon-color)',
    },
    [classSelectors.variant.ghost]: {
      '--button-background-color': 'transparent',
      '--button-background-color-disabled': 'transparent',
      '--button-foreground-color': 'var(--button-ghost-foreground-color)',
      '--button-background-color-hover': 'var(--button-ghost-background-color-hover)',
      '--button-background-color-active': 'var(--button-ghost-background-color-active)',
      '--button-foreground-color-disabled': 'var(--button-ghost-foreground-color-disabled)',
      ':not(:hover,:active,[aria-disabled])': {
        '--button-icon-color': 'var(--button-ghost-icon-color)',
      },
    },
    [classSelectors.variant.outline]: {
      '--button-background-color': 'transparent',
      '--button-background-color-disabled': 'transparent',
      '--button-foreground-color': 'var(--button-outline-foreground-color)',
      '--button-background-color-hover': 'var(--button-outline-background-color-hover)',
      '--button-background-color-active': 'var(--button-outline-background-color-active)',
      '--button-foreground-color-disabled': 'var(--button-outline-foreground-color-disabled)',
      '--button-border-color-disabled': 'var(--button-outline-border-color-disabled)',
      '--button-outline-border': 'inset 0 0 0 2px var(--button-outline-border-color)',
      boxShadow: 'var(--button-outline-border)',
      ':not(:hover,:active,[aria-disabled])': {
        '--button-icon-color': 'var(--button-outline-icon-color)',
      },
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
    '&:where(:focus-visible)': {
      boxShadow: 'var(--button-focus-outline)',
      '--button-background-color': 'var(--button-background-color-hover)',
      [classSelectors.variant.outline]: {
        boxShadow: 'var(--button-outline-border), var(--button-focus-outline)',
      },
    },
    '@media (hover: hover)': {
      cursor: 'default', // so the cursor doesn't change on hover when using a `a` element with `asChild`
      '&:where(:hover)': {
        '--button-background-color': 'var(--button-background-color-hover)',
      },
    },
    '&:where(:active)': {
      '--button-background-color': 'var(--button-background-color-active)',
      '--button-icon-color': 'var(--button-icon-color-active)',
    },
    [dataAttributes.disabled]: {
      cursor: 'not-allowed',
      '--button-foreground-color': 'var(--button-foreground-color-disabled)',
      '--button-background-color': 'var(--button-background-color-disabled)',
      '--button-border-color': 'var(--button-border-color-disabled)',
      '--button-icon-color': 'var(--button-icon-color-disabled)',
      [classSelectors.variant.outline]: {
        '--button-outline-border-color': 'var(--button-outline-border-color-disabled)',
      },
    },
  };
});

/**
 * Trigger an action or event, such as submitting a form or displaying a dialog.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Button = forwardRef<ElementRef<'button'>, PropsWithChildren<PropsWithSx<ButtonProps>>>(
  function Button(
    {
      variant = 'solid',
      colorScheme = 'cyan',
      size = 'large',
      className,
      asChild,
      children,
      disabled,
      onClick,
      ...props
    },
    forwardedRef
  ) {
    return (
      <StyledButton
        as={asChild ? Slot : 'button'}
        ref={forwardedRef}
        data-colorscheme={colorScheme}
        aria-disabled={disabled || undefined}
        // as we're using aria-disabled instead of disabled then we need to
        // disable the onClick event
        onClick={disabled ? undefined : onClick}
        className={clsx(
          label,
          className,
          withBreakpoints(size, 'size'),
          classNames.variant[variant]
        )}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = componentName;
