import styled from '@emotion/styled';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { fonts, fontWeights } from '../../tokens';
import { Breakpoints, PropsWithSx, Responsive } from '../../types';
import { dataAttributes, getPrefixedName, mediaQueries, px, pxToRem, spacing } from '../../utils';
import { ButtonProps } from './Button.props';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';

const componentName = 'Button';
const label = getPrefixedName(componentName);

const classNames = {
  solid: getPrefixedName('variant-solid'),
  outline: getPrefixedName('variant-outline'),
  ghost: getPrefixedName('variant-ghost'),
  large: getPrefixedName('size-large'),
  small: getPrefixedName('size-small'),
  ['tablet:large']: `tablet:${getPrefixedName('size-large')}`,
};
const classSelector = (className: string) => `&:where(.${className})`;
const classSelectors = {
  solid: classSelector(classNames.solid),
  outline: classSelector(classNames.outline),
  ghost: classSelector(classNames.ghost),
  large: classSelector(classNames.large),
  small: classSelector(classNames.small),
  ['tablet:large']: `&:where(.tablet\\:${getPrefixedName('size-large')})`,
  ['tablet:small']: `&:where(.tablet\\:${getPrefixedName('size-small')})`,
  ['desktop:large']: `&:where(.desktop\\:${getPrefixedName('size-large')})`,
  ['desktop:small']: `&:where(.desktop\\:${getPrefixedName('size-small')})`,
  ['wide:large']: `&:where(.wide\\:${getPrefixedName('size-large')})`,
  ['wide:small']: `&:where(.wide\\:${getPrefixedName('size-small')})`,
};

const StyledButton = styled('button', { label })<ButtonProps>(() => {
  const sizeStyles = {
    large: {
      '--button-font-size': pxToRem(18),
      '--button-line-height': pxToRem(24),
      '--button-min-width': px(160),
      '--button-padding-inline': px(24),
      '--button-padding-block': px(12),
      '--button-gap': px(spacing(2)),
      '--focus-outline-width': '4px',
    },
    small: {
      '--button-font-size': pxToRem(16),
      '--button-line-height': pxToRem(16),
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
    '-webkit-tap-highlight-color': 'transparent',
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.semibold,
    borderRadius: px(9999),
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
    svg: {
      // this will fallback to the icon's default fill of currentColor when not set
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
    [classSelectors.solid]: {
      '--button-foreground-color': 'var(--button-solid-foreground-color)',
      '--button-background-color': 'var(--button-solid-background-color)',
      '--button-background-color-hover': 'var(--button-solid-background-color-hover)',
      '--button-background-color-active': 'var(--button-solid-background-color-active)',
      '--button-foreground-color-disabled': 'var(--button-solid-foreground-color-disabled)',
      '--button-background-color-disabled': 'var(--button-solid-background-color-disabled)',
      '--button-icon-color': 'var(--button-solid-icon-color)',
    },
    [classSelectors.ghost]: {
      '--button-background-color': 'transparent',
      '--button-background-color-disabled': 'transparent',
      '--button-foreground-color': 'var(--button-ghost-foreground-color)',
      '--button-background-color-hover': 'var(--button-ghost-background-color-hover)',
      '--button-background-color-active': 'var(--button-ghost-background-color-active)',
      '--button-foreground-color-disabled': 'var(--button-ghost-foreground-color-disabled)',
      ':not(:hover,:active,:disabled)': {
        '--button-icon-color': 'var(--button-ghost-icon-color)',
      },
    },
    [classSelectors.outline]: {
      '--button-background-color': 'transparent',
      '--button-background-color-disabled': 'transparent',
      '--button-foreground-color': 'var(--button-outline-foreground-color)',
      '--button-background-color-hover': 'var(--button-outline-background-color-hover)',
      '--button-background-color-active': 'var(--button-outline-background-color-active)',
      '--button-foreground-color-disabled': 'var(--button-outline-foreground-color-disabled)',
      '--button-border-color-disabled': 'var(--button-outline-border-color-disabled)',
      '--button-outline-border': 'inset 0 0 0 2px var(--button-outline-border-color)',
      boxShadow: 'var(--button-outline-border)',
      ':not(:hover,:active,:disabled)': {
        '--button-icon-color': 'var(--button-outline-icon-color)',
      },
    },
    [classSelectors.large]: {
      ...sizeStyles.large,
    },
    [classSelectors.small]: {
      ...sizeStyles.small,
    },
    [mediaQueries.tablet]: {
      [classSelectors['tablet:large']]: {
        ...sizeStyles.large,
      },
      [classSelectors['tablet:small']]: {
        ...sizeStyles.small,
      },
    },
    [mediaQueries.desktop]: {
      [classSelectors['desktop:large']]: {
        ...sizeStyles.large,
      },
      [classSelectors['desktop:small']]: {
        ...sizeStyles.small,
      },
    },
    [mediaQueries.wide]: {
      [classSelectors['wide:large']]: {
        ...sizeStyles.large,
      },
      [classSelectors['wide:small']]: {
        ...sizeStyles.small,
      },
    },
    '&:where(:focus-visible)': {
      boxShadow: 'var(--button-focus-outline)',
      '--button-background-color': 'var(--button-background-color-hover)',
      [classSelectors.outline]: {
        boxShadow: 'var(--button-outline-border), var(--button-focus-outline)',
      },
    },
    '@media (hover: hover)': {
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
      [classSelectors.outline]: {
        '--button-outline-border-color': 'var(--button-outline-border-color-disabled)',
      },
    },
  };
});

const withBreakpoints = (value: Responsive<string> | undefined, prefix = '') => {
  if (typeof value === 'string') {
    return getPrefixedName(`${prefix}-${value}`);
  }

  const classes: string[] = [];
  if (typeof value === 'object') {
    for (const bp of Object.keys(value) as Breakpoints[]) {
      if (bp in value) {
        const baseClassName = getPrefixedName(`${prefix}-${value[bp]}`);
        const className = bp === 'mobile' ? baseClassName : `${bp}:${baseClassName}`;
        classes.push(className);
      }
    }
    return classes.reverse().join(' ');
  }
};

export const Button = forwardRef<ElementRef<'button'>, PropsWithChildren<PropsWithSx<ButtonProps>>>(
  function Button(
    {
      variant = 'solid',
      colorScheme = 'cyan',
      size = 'large',
      className,
      asChild,
      children,
      iconLeft,
      ...props
    },
    forwardedRef
  ) {
    const IconLeft = iconLeft;
    return (
      <StyledButton
        as={asChild ? Slot : 'button'}
        ref={forwardedRef}
        data-colorscheme={colorScheme}
        // The `data-disabled` attribute enables correct styles when doing `<Button asChild disabled>`
        data-disabled={props.disabled || undefined}
        className={clsx(label, className, withBreakpoints(size, 'size'), classNames[variant])}
        {...props}
      >
        {iconLeft ? <IconLeft color="hotpink" /> : null}
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = componentName;
